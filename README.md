# Notes API

A RESTful Notes API built with **Node.js, Express.js, and MongoDB**. This project demonstrates backend development fundamentals, including CRUD operations, REST API routing, database integration, and error handling.

## Features

- Create new notes
- Retrieve all notes
- Retrieve a single note by ID
- Update existing notes
- Delete notes
- MongoDB integration using Mongoose
- Modular project structure with routes, controllers, and models
- JSON request and response handling

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Environment Variables:** dotenv
- **Development Tool:** Nodemon

## Project Structure

```text
notes-api/
├── src/
│   ├── controllers/
│   │   └── note.controller.js
│   ├── db/
│   │   └── db.js
│   ├── models/
│   │   └── note.model.js
│   ├── routes/
│   │   └── note.route.js
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/esstrive/notes-api.git
cd notes-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Replace the placeholder with your MongoDB connection string.

**Security:** Never commit your `.env` file or expose database credentials on GitHub.

### 4. Start the server

Start the application:

```bash
npm start
```

For development with automatic restarts:

```bash
npm run dev
```

The API will be available at `http://localhost:3000`, provided port 3000 is configured.

## API Endpoints

Base URL: `http://localhost:3000/api`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/notes` | Create a note |
| GET | `/notes` | Retrieve all notes |
| GET | `/notes/:id` | Retrieve a note by ID |
| PATCH | `/notes/:id` | Update a note |
| DELETE | `/notes/:id` | Delete a note |

### Example: Create a Note

**Request**

```http
POST /api/notes
Content-Type: application/json
```

**Request body**

```json
{
  "title": "Learn Node.js",
  "description": "Practice Express and MongoDB"
}
```

Send the request to:

`http://localhost:3000/api/notes`

### Example: Retrieve All Notes

```http
GET /api/notes
```

### Example: Update a Note

```http
PATCH /api/notes/NOTE_ID
Content-Type: application/json
```

```json
{
  "title": "Learn Backend Development",
  "description": "Build REST APIs with Node.js"
}
```

Replace `NOTE_ID` with an actual MongoDB document ID.

### Example: Delete a Note

```http
DELETE /api/notes/NOTE_ID
```

Replace `NOTE_ID` with the ID of the note you want to delete.

## Testing

You can test the endpoints using Postman, another API client, or `curl`.

Example:

```bash
curl http://localhost:3000/api/notes
```

## Learning Objectives

This project helps practice:

- Building RESTful APIs with Express.js
- Understanding HTTP methods and status codes
- Separating routes, controllers, and models
- Connecting MongoDB with Mongoose
- Handling JSON requests and responses
- Managing environment variables
- Testing API endpoints

## Future Improvements

- Add request validation
- Improve error handling
- Add pagination and search
- Implement user authentication and authorization
- Add automated API tests
- Deploy the API to a hosting platform

## Author

**Esstrive**

GitHub: https://github.com/esstrive

---

*Built as a hands-on project to strengthen backend development skills with Node.js, Express.js, and MongoDB.*
