# Simple Blog API

This is a backend API for a simple blog application built using  --Node.js--, --Express-- , and --MongoDB--. It supports **user authentication** and **CRUD operations** on blog posts.

## Features
- User registration and login
- Password hashing using **bcrypt**
- Authentication using **JWT**
- CRUD operations for blog posts
- MongoDB with **Mongoose ODM**
- Request validation and error handling

## Tech Stack
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JWT, bcrypt
- **Testing:** Postman

## Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-university-github/simple-blog-api.git
cd simple-blog-api
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Create a `.env` File
Create a `.env` file in the root directory and add the following variables:
```env
PORT=5000
MONGO_URI=mongodb+srv://your_mongo_uri_here
JWT_SECRET=your_secret_key_here
```

### 4️⃣ Start the Server
```sh
npm start
```
The API will be available at `http://localhost:5000`

---

## API Endpoints

### **User Authentication**

#### **1️⃣ Register User**
- **Endpoint:** `POST /api/register`
- **Request Body:**
```json
{
    "username": "testuser",
    "email": "testuser@example.com",
    "password": "password123"
}
```
- **Response:**
```json
{ "message": "User registered successfully" }
```

#### **2️⃣ Login User**
- **Endpoint:** `POST /api/login`
- **Request Body:**
```json
{
    "email": "testuser@example.com",
    "password": "password123"
}
```
- **Response:**
```json
{ "token": "your-jwt-token-here" }
```

### **Blog Posts (Protected Routes - Requires JWT)**

#### **3️⃣ Create a Blog Post**
- **Endpoint:** `POST /api/posts`
- **Headers:** `Authorization: Bearer <token>`
- **Request Body:**
```json
{
    "title": "My First Blog Post",
    "content": "This is the content of my first blog post."
}
```

#### **4️⃣ Get All Blog Posts**
- **Endpoint:** `GET /api/posts`

#### **5️⃣ Get a Single Blog Post**
- **Endpoint:** `GET /api/posts/:id`

#### **6️⃣ Update a Blog Post**
- **Endpoint:** `PUT /api/posts/:id`
- **Headers:** `Authorization: Bearer <token>`
- **Request Body:**
```json
{
    "title": "Updated Blog Post",
    "content": "Updated content."
}
```

#### **7️⃣ Delete a Blog Post**
- **Endpoint:** `DELETE /api/posts/:id`
- **Headers:** `Authorization: Bearer <token>`

---

