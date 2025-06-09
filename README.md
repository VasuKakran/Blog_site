# Blog Site

A full-stack blog web application with user authentication, post creation, and viewing capabilities.

## Technologies Used

- Backend: Node.js, Express, MySQL, JWT, Multer, Cors, Cookie-parser
- Frontend: React, React Router, Axios, Sass

## Project Structure

- `api/`: Backend API server
- `client/`: Frontend React application

## Installation

### Backend

1. Navigate to the `api` directory:
   ```bash
   cd api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file for environment variables (e.g., database credentials, JWT secret).
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend

1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm start
   ```

The frontend server proxies API requests to the backend server running on port 8800.

## Features

- User registration and login
- Create, edit, and delete blog posts
- View individual posts
- File upload support for post images
- Responsive UI with navigation and footer

## Folder Structure

```
Blog_site/
├── api/                # Backend API server
│   ├── controllers/    # Route controllers for auth, users, posts
│   ├── routes/         # API route definitions
│   ├── index.js        # Main server file
│   └── package.json    # Backend dependencies and scripts
├── client/             # React frontend application
│   ├── public/         # Static assets and uploads
│   ├── src/            # React source code
│   ├── package.json    # Frontend dependencies and scripts
│   └── style.scss      # Global styles
└── README.md           # This file
```

## Contact

For any questions or feedback, please contact.
