package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"
	"time"

	"github.com/jalexanderII/silver-palm-tree/global"
	"github.com/jalexanderII/silver-palm-tree/proto"
	"github.com/pkg/errors"
	"go.mongodb.org/mongo-driver/bson"
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
