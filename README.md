# Rolex Collection API

Rolex Collection API
This is a simple Express.js API for managing a Rolex watch collection. It uses MongoDB as the database to store Rolex watch information.

Getting Started
npm install

MONGODB_USERNAME=<your-mongodb-username>
MONGODB_PASSWORD=<your-mongodb-password>

npm start

# Endpoints

1. Add Rolex Watch
Endpoint: POST /admin
Description: Adds a new Rolex watch to the collection.
Request Body:

{
  "adminImage": "url-to-image",
  "adminTitle": "Watch Title",
  "adminDesc": "Watch Description"
}

# Response

Status: 200 OK
Body:

1. Add Rolex Watch
Endpoint: POST /admin
Description: Adds a new Rolex watch to the collection.
Request Body:

# Body

Status: 500 Internal Server Error
Body:

{
  "error": "Internal Server Error"
}

# Fetch Rolex Watches

Endpoint: GET /fetchrolex
Description: Fetches all Rolex watches from the collection.
Response:
Status: 200 OK
Body:

[
  {
    "_id": "unique-watch-id",
    "img": "url-to-image",
    "title": "Watch Title",
    "desc": "Watch Description"
  },
  // ... more watches
]

Status: 500 Internal Server Error
Body:

{
  "error": "Fetch error"
}


# Test Endpoint

Endpoint: GET /
Description: A test endpoint to check if the server is running.
Response:
Status: 200 OK
Body:

<h1>Hello World!</h1>


# Database

he API uses MongoDB to store Rolex watch information. The connection string is specified in the mongoose.connect function in index.js.

mongoose.connect(
  `mongodb+srv://${envUserName}:${envPassWord}@mainnikedb.jx4pwkk.mongodb.net/rolex`
)


Make sure to replace <your-mongodb-username> and <your-mongodb-password> with your MongoDB Atlas username and password.