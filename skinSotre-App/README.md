# SkinStore Clone - Fullstack Project

A fullstack e-commerce web application inspired by Dermstore, featuring:
- Product listing and cart functionality
- User authentication (login, logout, register)
- Integrated chatbot (OpenAI or FAQ-based)

---

## Project Structure

```
skinSotre-App/
  Backend/           # Node.js, Express, MongoDB (API, Auth, Chatbot, Collaboration)
  Frontend/
    my-react-app/    # React (UI, Chatbot widget, Code editor)
```

---

## Prerequisites
- Node.js (v16+ recommended)
- npm
- MongoDB (local or Atlas)

---

## Backend Setup

1. **Install dependencies:**
   ```bash
   cd Backend
   npm install
   ```

2. **Configure MongoDB:**
   - By default, connects to local MongoDB at `mongodb://127.0.0.1:27017/skinStore`.
   - To use MongoDB Atlas, update the connection string in `Backend/config/db.js` or your `.env` file.

3. **(Optional) Add OpenAI API Key:**
   - For chatbot AI, create a `.env` file in `Backend/`:
     ```
     OPENAI_API_KEY=your_openai_api_key_here
     ```

4. **Start the backend server:**
   ```bash
   npm run server
   ```
   - Runs on [http://localhost:8080](http://localhost:8080)

---

## Frontend Setup

1. **Install dependencies:**
   ```bash
   cd Frontend/my-react-app
   npm install
   ```

2. **Start the frontend dev server:**
   ```bash
   npm run dev
   ```
   - Runs on [http://localhost:5173](http://localhost:5173)

---

## Features

### 🛒 E-commerce
- Browse products, add to cart, place orders
- User authentication (register, login, logout)

### 💬 Chatbot
- Floating chat widget on all pages
- Responds to user queries (FAQ or OpenAI-powered)
- Backend: `/api/chat` endpoint



---

## Customization
- **Chatbot:**
  - Edit logic in `Backend/controllers/chat.controller.js`
  - To use OpenAI, add your API key to `.env`


