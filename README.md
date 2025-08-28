AI-Powered Code Reviewer

An interactive web application that allows users to input code, get instant code reviews, and see syntax-highlighted feedback. Built with React, PrismJS, and Axios, this project provides a modern, developer-friendly interface for code improvement suggestions.

Live Demo

Check out the app live here: https://ai-powered-code-reviewer-anupchaura.vercel.app/

Features

Live code editor with syntax highlighting using react-simple-code-editor and PrismJS.

Instant code review via backend API.

Markdown-based results with syntax highlighting (rehype-highlight).

Responsive UI with dark and light themes.

Easy deployment for both frontend and backend.

Tech Stack

Frontend: React, React Hooks, Axios, PrismJS, react-simple-code-editor, react-markdown, rehype-highlight

Backend: Node.js, Express (or serverless function for Vercel)

Deployment: Vercel for frontend, any Node.js-compatible platform for backend

Installation

Clone the repository:

git clone https://github.com/your-username/ai-powered-code-reviewer.git
cd ai-powered-code-reviewer


Install dependencies:

npm install


Set up environment variables:

Create a .env file in the root:

VITE_API_BASE_URL=http://localhost:4000


For production, replace http://localhost:4000 with your deployed backend URL.

Start the development server:

npm run dev


Open http://localhost:5173 in your browser.


Usage

Enter JavaScript code in the editor.

Click Review.

See instant feedback in the right-hand panel with syntax-highlighted results.

Deployment

Frontend: Deploy on Vercel or any static hosting service.

Backend: Deploy on Railway, Render, Heroku, or Vercel serverless function.

Environment Variables
Variable	Description
VITE_API_BASE_URL	Base URL of your backend API
Contributing

Fork the repository.

Create your feature branch: git checkout -b feature/YourFeature.

Commit your changes: git commit -m 'Add new feature'.

Push to the branch: git push origin feature/YourFeature.

Open a Pull Request.

License

This project is licensed under the MIT License.
