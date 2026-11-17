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

📸 Screenshots

<img width="1920" height="1080" alt="Screenshot (11)" src="https://github.com/user-attachments/assets/716c9276-908e-4771-9418-602cab268de2" />



Tech Stack

Frontend: React, React Hooks, Axios, PrismJS, react-simple-code-editor, react-markdown, rehype-highlight

Backend: Node.js, Express (or serverless function for Vercel)

Deployment: Vercel for frontend, any Node.js-compatible platform for backend

## Installation

Clone this repository:

```bash
git clone https://github.com/Anup-Chaurasiya/AI-Powered-Code-Reviewer.git
cd AI-Powered-Code-Reviewer
```

### Start the backend

In one terminal, install the backend dependencies:

```bash
cd Backend
npm ci
```

Create `Backend/.env` with your Gemini API key:

```dotenv
GOOGLE_GEMINI_KEY=your_gemini_api_key
PORT=3000
```

Keep the key in the backend environment; do not put it in a `VITE_` variable or commit your `.env` file.

Start the API from the `Backend` directory:

```bash
node server.js
```

The backend listens on port 3000 by default. Visiting http://localhost:3000/ should return `Hello, world!`.

### Start the frontend

In a second terminal, starting from the repository root:

```bash
cd Frontend
npm ci
```

Create `Frontend/.env`:

```dotenv
VITE_API_BASE_URL=http://localhost:3000
```

If you change the backend port, update this URL to match. For production, use your deployed backend's base URL, without the `/ai/result` suffix.

Start Vite from the `Frontend` directory:

```bash
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173). Restart Vite after changing `Frontend/.env`.

Usage

Enter JavaScript code in the editor.

Click Review.

See instant feedback in the right-hand panel with syntax-highlighted results.

Deployment

Frontend: Deploy on Vercel or any static hosting service.

Backend: Deploy on Railway, Render, Heroku, or Vercel serverless function.

## Environment Variables

| File | Variable | Description |
| --- | --- | --- |
| `Backend/.env` | `GOOGLE_GEMINI_KEY` | Gemini API key used by the backend |
| `Backend/.env` | `PORT` | Optional API port; defaults to `3000` |
| `Frontend/.env` | `VITE_API_BASE_URL` | Backend base URL, such as `http://localhost:3000` |

Contributing

Fork the repository.

Create your feature branch: git checkout -b feature/YourFeature.

Commit your changes: git commit -m 'Add new feature'.

Push to the branch: git push origin feature/YourFeature.

Open a Pull Request.

License

This project is licensed under the MIT License.
