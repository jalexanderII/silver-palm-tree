package global

const (
	dburi       = "mongodb+srv://dbUser:pass@cluster0.kdblq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
	dbname      = "blog-application"
	performance = 100
)

var jwtSecret = []byte("blogSecret")
