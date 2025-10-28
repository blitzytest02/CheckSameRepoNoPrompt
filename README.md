# CheckSameRepoNoPrompt

A Node.js Express.js tutorial project demonstrating basic HTTP endpoint implementation with two simple routes.

## Description

This project serves as a minimal Express.js tutorial, showcasing how to:
- Set up a Node.js project with Express.js
- Define HTTP GET endpoints
- Return text responses
- Configure the server with environment variables

## Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (comes with Node.js)

Check your versions:
```bash
node --version
npm --version
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd CheckSameRepoNoPrompt
```

2. Install dependencies:
```bash
npm install
```

This will install Express.js and all required dependencies.

## Running the Server

Start the server with:
```bash
npm start
```

The server will start on port 3000 by default. You should see:
```
Server is running on http://localhost:3000
```

### Custom Port

To use a different port, set the PORT environment variable:
```bash
PORT=8080 npm start
```

## API Endpoints

### GET /
Returns a "Hello world" greeting.

**Request:**
```bash
curl http://localhost:3000/
```

**Response:**
```
Hello world
```

### GET /evening
Returns a "Good evening" greeting.

**Request:**
```bash
curl http://localhost:3000/evening
```

**Response:**
```
Good evening
```

## Testing

You can test the endpoints using:

**Browser:**
- Open http://localhost:3000/ in your browser
- Open http://localhost:3000/evening in your browser

**curl:**
```bash
curl http://localhost:3000/
curl http://localhost:3000/evening
```

**wget:**
```bash
wget -qO- http://localhost:3000/
wget -qO- http://localhost:3000/evening
```

## Project Structure

```
CheckSameRepoNoPrompt/
├── server.js           # Main application entry point
├── package.json        # Project metadata and dependencies
├── package-lock.json   # Dependency version lock file
├── .gitignore         # Git ignore rules
├── README.md          # This file
└── node_modules/      # Installed dependencies (not committed)
```

## Troubleshooting

**Error: Cannot find module 'express'**
- Solution: Run `npm install` to install dependencies

**Error: Port 3000 already in use**
- Solution: Either stop the process using port 3000, or use a different port:
  ```bash
  PORT=3001 npm start
  ```

**Error: Node version too old**
- Solution: Upgrade Node.js to version 18 or higher

## License

MIT