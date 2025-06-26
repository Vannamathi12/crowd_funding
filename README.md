# Second-Hand Marketplace (MERN Stack)

This is a full-stack second-hand marketplace web app using MongoDB, Express, React, and Node.js.

## 📁 Project Structure

```
mern-secondhand-marketplace/
├── client/        # Frontend (React)
├── server/        # Backend (Node/Express/MongoDB)
```

---

## 🚀 Getting Started

### 1. Clone the project

```
git clone https://github.com/yourusername/secondhand-marketplace.git
cd mern-secondhand-marketplace
```

### 2. Set up the backend

```
cd server
npm install
cp .env.example .env
# edit .env to add your MongoDB URI
npm start
```

### 3. Set up the frontend

```
cd ../client
npm install
npm run dev
```

### 🌐 Visit

Frontend: http://localhost:5173  
Backend API: http://localhost:5000/api/products

---

## 🧩 MongoDB Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new project & cluster
3. Create a database named: `secondhand-marketplace`
4. Add a user with password
5. Replace your connection URI in `.env`

---

## 🛠 Features

- Product listing & creation
- Full API via MongoDB
- React + Tailwind frontend UI

Enjoy!
