# Book Management REST API

## Description
This project is a REST API built using Node.js and Express for managing a collection of books through CRUD operations. The application stores book data in memory using a JavaScript array, so no database or external service is required.

## Features
- Get all books
- Add a new book
- Update a book
- Delete a book
- Basic request validation
- JSON responses
- Error handling
- In-memory data storage

## Technologies
- Node.js
- Express.js
- JavaScript
- REST API
- JSON
- Postman

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/` | Welcome message for the API |
| GET | `/books` | Get all books |
| GET | `/books/:id` | Get a single book by ID |
| POST | `/books` | Add a new book |
| PUT | `/books/:id` | Update a book |
| DELETE | `/books/:id` | Delete a book |

## Installation
1. Open the project folder.
2. Run:

```bash
npm install
```

## Run
Start the server with:

```bash
node server.js
```

The server runs at:

```text
http://localhost:3000
```

## Testing
Postman was used to test the CRUD endpoints and validate the API behavior for success and error scenarios.

## Concepts Demonstrated
- REST API
- CRUD
- HTTP methods
- Express routing
- Middleware
- JSON
- Request/response objects
- HTTP status codes
- Error handling

## Middleware
The app uses `express.json()` middleware so incoming JSON request bodies are parsed correctly before route logic runs.

## Author
Pawan Sain
