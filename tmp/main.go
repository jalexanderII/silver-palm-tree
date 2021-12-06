package main

import (
	"context"
	"log"

	"github.com/jalexanderII/silver-palm-tree/proto"
	"google.golang.org/grpc"
)

func main() {
	conn, err := grpc.Dial("localhost:9090", grpc.WithInsecure())
	if err != nil {
		log.Fatal(err)
	}
	client := proto.NewAuthServiceClient(conn)
	client.SignUp(context.Background(), &proto.SignupRequest{Username: "Carl", Email: "carl@gmail.com", Password: "examplestring"})
}
