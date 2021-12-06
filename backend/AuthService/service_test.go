package main

import (
	"context"
	"testing"

	"github.com/jalexanderII/silver-palm-tree/global"
	"github.com/jalexanderII/silver-palm-tree/proto"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"golang.org/x/crypto/bcrypt"
)

const exampleToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoie1wiSURcIjpcIjYxYWQzN2M3N2I1Y2RiNTdmMTRjMzZlNlwiLFwiVXNlcm5hbWVcIjpcIkNhcmxcIixcIkVtYWlsXCI6XCJ0ZXN0QGdtYWlsLmNvbVwiLFwiUGFzc3dvcmRcIjpcIiQyYSQxMCREdHV5L3hLcGxpem5LejQuelNwSUplUC5ya2FidkJmenFOUWgvS1dMS0VpcktWNE83a25KcVwifSJ9.V-VxigRdxwVWfALe6cj7AtM_6wXUlz3YatszmtDoGYk"

func Test_authServer_Login(t *testing.T) {
	global.ConnectToTestDB()
	pw, _ := bcrypt.GenerateFromPassword([]byte("example"), bcrypt.DefaultCost)
	_, err := global.DB.Collection("user").InsertOne(context.Background(), global.User{ID: primitive.NewObjectID(), Email: "test@gmail.com", Username: "Carl", Password: string(pw)})
	if err != nil {
		t.Errorf("Something went wrong: %v", err)
	}
	server := authServer{}

	_, err = server.Login(context.Background(), &proto.LoginRequest{Login: "test@gmail.com", Password: "example"})
	if err != nil {
		t.Errorf("1: An error was returned: %v", err)
	}

	_, err = server.Login(context.Background(), &proto.LoginRequest{Login: "wrong", Password: "wrong"})
	if err == nil {
		t.Error("2: Error was nil")
	}

	_, err = server.Login(context.Background(), &proto.LoginRequest{Login: "Carl", Password: "example"})
	if err != nil {
		t.Errorf("3: An error was returned: %v", err)
	}
}

func Test_authServer_UsernameUsed(t *testing.T) {
	global.ConnectToTestDB()
	_, err := global.DB.Collection("user").InsertOne(context.Background(), global.User{Username: "Carl"})
	if err != nil {
		t.Errorf("Something went wrong: %v", err)
	}
	server := authServer{}
	res, err := server.UsernameUsed(context.Background(), &proto.UsernameUsedRequest{Username: "Carlo"})
	if err != nil {
		t.Errorf("1: An error was returned: %v", err)
	}
	if res.GetUsed() {
		t.Errorf("1: Wrong result")
	}
	res, err = server.UsernameUsed(context.Background(), &proto.UsernameUsedRequest{Username: "Carl"})
	if err != nil {
		t.Errorf("2: An error was returned: %v", err)
	}
	if !res.GetUsed() {
		t.Errorf("2: Wrong result")
	}
}

func Test_authServer_EmailUsed(t *testing.T) {
	global.ConnectToTestDB()
	_, err := global.DB.Collection("user").InsertOne(context.Background(), global.User{Email: "test@gmail.com"})
	if err != nil {
		t.Errorf("Something went wrong: %v", err)
	}
	server := authServer{}
	res, err := server.EmailUsed(context.Background(), &proto.EmailUsedRequest{Email: "wrong"})
	if err != nil {
		t.Errorf("1: An error was returned: %v", err)
	}
	if res.GetUsed() {
		t.Errorf("1: Wrong result")
	}
	res, err = server.EmailUsed(context.Background(), &proto.EmailUsedRequest{Email: "test@gmail.com"})
	if err != nil {
		t.Errorf("2: An error was returned: %v", err)
	}
	if !res.GetUsed() {
		t.Errorf("2: Wrong result")
	}
}

func Test_authServer_SignUp(t *testing.T) {
	global.ConnectToTestDB()
	_, err := global.DB.Collection("user").InsertOne(context.Background(), global.User{Username: "Carl", Email: "test@gmail.com"})
	if err != nil {
		t.Errorf("Something went wrong: %v", err)
	}
	server := authServer{}

	_, err = server.SignUp(context.Background(), &proto.SignupRequest{Username: "Carl", Email: "example@gmail.com", Password: "examplestring"})
	if err.Error() != "Username already taken" {
		t.Error("1: No or wrong error returned")
	}
	_, err = server.SignUp(context.Background(), &proto.SignupRequest{Username: "Carlo", Email: "test@gmail.com", Password: "examplestring"})
	if err.Error() != "Email already used" {
		t.Error("2: No or wrong error returned")
	}

	_, err = server.SignUp(context.Background(), &proto.SignupRequest{Username: "Example", Email: "example@gmail.com", Password: "examplestring"})
	if err != nil {
		t.Errorf("3: Error creating new user: %v", err)
	}

	_, err = server.SignUp(context.Background(), &proto.SignupRequest{Username: "Example", Email: "example@gmail.com", Password: "pass"})
	if err.Error() != "Validation failed" {
		t.Error("4: No or wrong error returned for validation")
	}
}

func Test_authServer_AuthUser(t *testing.T) {
	server := authServer{}
	res, err := server.AuthUser(context.Background(), &proto.AuthUserRequest{Token: exampleToken})
	if err != nil {
		t.Errorf("An error was returned: %v", err)
	}
	if res.GetID() != "61ad37c77b5cdb57f14c36e6" || res.GetUsername() != "Carl" || res.GetEmail() != "test@gmail.com" {
		t.Errorf("Wrong result returned: %v", res)
	}
}
