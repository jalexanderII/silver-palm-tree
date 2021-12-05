package global

import (
	"context"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// DB holds Database Connection
var DB mongo.Database

func connectToDB() {
	clientOptions := options.Client().ApplyURI(dburi)
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatalf("Error connecting to DB: %v", err)
	}
	DB = *client.Database(dbname)
}

// NewDBContext returns a new Context according to app performance
func NewDBContext(d time.Duration) (context.Context, context.CancelFunc) {
	return context.WithTimeout(context.Background(), d*performance/100)
}

// ConnectToTestDB overwrites DB with a Test DB
func ConnectToTestDB() {
	clientOptions := options.Client().ApplyURI(dburi)
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatalf("Error connecting to DB: %v", err)
	}
	DB = *client.Database(dbname + "_test")
}
