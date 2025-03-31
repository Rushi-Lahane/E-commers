# E-Commerce Platform

## 🚀 Project Overview
This is a modern **E-Commerce Platform** built using **Next.js**, **Tailwind CSS**, and **Redux** on the frontend, with **Spring Boot** and **MySQL** powering the backend. The platform provides a seamless shopping experience with features like product browsing, secure checkout, and fast order processing.

## 🛠 Tech Stack
### Frontend:
- **Next.js** – Server-side rendering & optimized performance.
- **Tailwind CSS** – Fast and responsive UI design.
- **Redux Toolkit** – State management for cart and authentication.
- **AOS (Animate on Scroll)** – Smooth animations for a better user experience.

### Backend:
- **Spring Boot** – RESTful APIs for handling authentication, orders, and payments.
- **MySQL** – Database management for products, users, and transactions.
- **JWT Authentication** – Secure login and session management.

## 🌟 Features
- 🔹 **User Authentication** – Sign up, login, and manage accounts securely.
- 🔹 **Product Listings** – Browse products with categories and filters.
- 🔹 **Shopping Cart** – Add/remove products with real-time price updates.
- 🔹 **Secure Checkout** – Place orders with payment integration.
- 🔹 **Order Tracking** – View order history and track deliveries.
- 🔹 **Admin Dashboard** – Manage products, users, and orders.

## 📦 Installation

### 1️⃣ Setup the Frontend
```sh
cd frontend
npm install
npm run dev
```

### 2️⃣ Setup the Backend
```sh
cd backend
mvn clean install
mvn spring-boot:run
```

## 🔗 API Endpoints
| Method | Endpoint            | Description                      |
|--------|--------------------|----------------------------------|
| GET    | `/api/products`    | Fetch all products              |
| GET    | `/api/orders`      | Fetch user orders               |
| POST   | `/api/cart`        | Add product to cart             |
| POST   | `/api/auth/login`  | Authenticate user login         |
| POST   | `/api/auth/signup` | Register a new user             |

## 🤝 Contributing
We welcome contributions! Feel free to fork this repo, submit pull requests, and improve the platform.

## 📜 License
This project is **MIT Licensed** – feel free to use and modify it as needed.

---
🚀 **Happy Shopping!** 🛒
