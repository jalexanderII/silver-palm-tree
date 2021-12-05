package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"
	"regexp"
	"time"

	"github.com/jalexanderII/silver-palm-tree/global"
	"github.com/jalexanderII/silver-palm-tree/proto"
	"github.com/pkg/errors"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"golang.org/x/crypto/bcrypt"
	"google.golang.org/grpc"
)

var port = flag.Int("port", 50051, "The server port")

type authServer struct {
	proto.UnimplementedAuthServiceServer
}

func newServer() *authServer {
	return &authServer{}
}

func (authServer) Login(ctx context.Context, in *proto.LoginRequest) (*proto.AuthResponse, error) {
	login, password := in.GetLogin(), in.GetPassword()
	ctx, cancel := global.NewDBContext(5 * time.Second)
	defer cancel()

	var user global.User
	global.DB.Collection("user").FindOne(ctx, bson.M{"$or": []bson.M{{"username": login}, {"email": login}}}).Decode(&user)
	if user == global.NilUser || bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password)) != nil {
		return nil, errors.New("wrong login credentials provided")
	}
	return &proto.AuthResponse{Token: user.GetToken()}, nil
}

func (server authServer) SignUp(ctx context.Context, in *proto.SignupRequest) (*proto.AuthResponse, error) {
	username, email, password := in.GetUsername(), in.GetEmail(), in.GetPassword()
	match, _ := regexp.MatchString(global.EmailRegex, email)
	if len(username) < 4 || len(username) > 20 || len(email) < 7 || len(email) > 35 || len(password) < 8 || len(password) > 128 || !match {
		return nil, errors.New("Validation failed")
	}
	res, err := server.UsernameUsed(context.Background(), &proto.UsernameUsedRequest{Username: username})
	if err != nil {
		log.Printf("Error returned from UsernameUsed: %v\n", err)
		return nil, errors.New("Something went wrong")
	}
	if res.GetUsed() {
		return nil, errors.New("Username already taken")
	}

	res, err = server.EmailUsed(context.Background(), &proto.EmailUsedRequest{Email: email})
	if err != nil {
		log.Printf("Error returned from EmailUsed: %v\n", err)
		return nil, errors.New("EmailUsed")
	}
	if res.GetUsed() {
		return nil, errors.New("Email already used")
	}

	pw, _ := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	newUser := global.User{ID: primitive.NewObjectID(), Email: email, Username: username, Password: string(pw)}

	ctx, cancel := global.NewDBContext(5 * time.Second)
	defer cancel()
	_, err = global.DB.Collection("user").InsertOne(ctx, newUser)
	if err != nil {
		log.Printf("Error inserting new user: %v\n", err)
		return nil, errors.New("Something went wrong")
	}
	return &proto.AuthResponse{Token: newUser.GetToken()}, nil
}

func (authServer) EmailUsed(ctx context.Context, in *proto.EmailUsedRequest) (*proto.UsedResponse, error) {
	var email = in.GetEmail()
	ctx, cancel := global.NewDBContext(5 * time.Second)
	defer cancel()
	var result global.User
	global.DB.Collection("user").FindOne(ctx, bson.M{"email": email}).Decode(&result)
	return &proto.UsedResponse{Used: result != global.NilUser}, nil
}

func (authServer) UsernameUsed(ctx context.Context, in *proto.UsernameUsedRequest) (*proto.UsedResponse, error) {
	var username = in.GetUsername()
	ctx, cancel := global.NewDBContext(5 * time.Second)
	defer cancel()
	var result global.User
	global.DB.Collection("user").FindOne(ctx, bson.M{"username": username}).Decode(&result)
	return &proto.UsedResponse{Used: result != global.NilUser}, nil
}

func (authServer) AuthUser(ctx context.Context, in *proto.AuthUserRequest) (*proto.AuthUserResponse, error) {
	var token = in.GetToken()
	user := global.UserFromToken(token)
	return &proto.AuthUserResponse{ID: user.ID.Hex(), Username: user.Username, Email: user.Email}, nil
}

func main() {
	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf("localhost:%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	var opts []grpc.ServerOption

	grpcServer := grpc.NewServer(opts...)
	proto.RegisterAuthServiceServer(grpcServer, newServer())
	grpcServer.Serve(lis)
}
