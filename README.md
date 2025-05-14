Blog_site

A full-stack blogging platform that enables users to create, manage, and read blog posts.
Built with a modular architecture separating the frontend and backend for scalability and maintainability.

Technologies Used
- Frontend: React.js
- Backend: Node.js, Express.js
- Styling: SCSS
- Templating: HTML

Project Structure
Blog_site/
├── api/           # Backend API built with Node.js and Express
├── client/        # Frontend application built with React
├── .gitignore     # Specifies files and directories to ignore in Git

Getting Started

Prerequisites
- Node.js and npm installed on your machine

Installation
1. Clone the repository:
   git clone https://github.com/VasuKakran/Blog_site.git
   cd Blog_site

2. Install dependencies for both frontend and backend:
   # Install backend dependencies
   cd api
   npm install

   # Install frontend dependencies
   cd ../client
   npm install

Running the Application

1. Start the backend server:
   cd api
   npm start

2. Start the frontend development server:
   cd ../client
   npm start

3. Access the application:
   Open your browser and navigate to http://localhost:3000 to view the application.

Features
- User-friendly interface for reading and writing blog posts
- Responsive design for various devices
- Modular codebase for easy maintenance
- Separation of concerns between frontend and backend

Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

License
This project is open-source and available under the MIT License.
