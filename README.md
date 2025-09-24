# Chatrix - Real Time Chat Application

Chatrix is a full-stack real-time chat app built with React, Vite, Express, MongoDB, and Socket.io. It supports user authentication, profile management, image uploads, and live messaging.

## Features

- User authentication (signup, login, logout)
- Real-time messaging with Socket.io
- Profile picture upload (Cloudinary)
- Online user status
- Multiple themes (DaisyUI + Tailwind)
- Responsive UI

## Tech Stack

- **Frontend:** React, Vite, Zustand, DaisyUI, TailwindCSS, Socket.io-client, Axios
- **Backend:** Express, MongoDB, Mongoose, Socket.io, Cloudinary, JWT, bcryptjs

## Project Structure

```
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── lib/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── index.js
│   └── package.json
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── package.json
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB instance
- Cloudinary account (for image uploads)

### Environment Variables

Create `.env` files in `Backend/` and set:

```
PORT=5001
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_secret
```

### Installation

1. **Install dependencies:**

   ```sh
   npm run build
   ```

2. **Start backend:**

   ```sh
   npm run start
   ```

3. **Start frontend (in another terminal):**

   ```sh
   cd Frontend
   npm run dev
   ```

### Usage

- Visit [http://localhost:5173](http://localhost:5173) in your browser.
- Sign up, log in, and start chatting!

## License

This project is licensed under the ISC License.

---

Feel free to customize this README for your needs!
