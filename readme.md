# 💰 Finance Data Processing & Access Control Backend

> A production-ready backend system for managing financial records with role-based access control (RBAC), built using Node.js, Express.js, and MongoDB Atlas.

---

## 🔗 Live Links

- 🌐 **Live API (Render)**: https://your-live-api.onrender.com/api  
- 💻 **GitHub Repository**: [https://github.com/your-username/finance-backend
](https://github.com/thvvamshi/finance_backend_apis)
---

## 🚀 Overview

Secure RESTful APIs to manage users and financial records with JWT authentication and RBAC.  
Includes clean architecture, data validation, pagination, filtering, and analytics via MongoDB aggregation.

---

## 🧱 Tech Stack

| Layer          | Technology     |
|----------------|----------------|
| Runtime        | Node.js        |
| Framework      | Express.js     |
| Database       | MongoDB Atlas  |
| ODM            | Mongoose       |
| Authentication | JWT + bcrypt   |
| Validation     | Zod            |

---

## ✨ Features

### 🔐 Authentication & Authorization

- JWT-based authentication
- Role-Based Access Control (RBAC)

| Role    | Dashboard | View Records | Create/Update/Delete Records |
|---------|-----------|--------------|------------------------------|
| Viewer  | ✅        | ❌           | ❌                           |
| Analyst | ✅        | ✅           | ❌                           |
| Admin   | ✅        | ✅           | ✅                           |

### 👤 User Management (Admin Only)

- Register new users
- Update user roles
- Activate / Deactivate users

### 💰 Financial Records

- CRUD operations
- Soft delete for data safety (`isDeleted`)
- Pagination and filtering
- Filter by category and date range

### 📊 Dashboard Analytics

- Total Income
- Total Expenses
- Net Balance
- Uses MongoDB aggregation pipeline

---

## 📁 Project Structure

```bash
finance-backend/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   ├── finance.controller.js
│   │   └── dashboard.controller.js
│   ├── models/
│   │   ├── User.model.js
│   │   └── Finance.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   ├── finance.routes.js
│   │   └── dashboard.routes.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── rbac.middleware.js
│   │   └── validate.middleware.js
│   ├── validators/
│   │   └── schemas.js
│   └── app.js
├── server.js
├── package.json
├── .env.example
├── api-docs.md
└── README.md
```

---

## 🏗️ System Design & Architecture

Client (Postman / Frontend)  
↓  
Express.js Server (Node.js)  
↓  
Middleware (JWT Auth → RBAC → Zod Validation)  
↓  
Routes  
↓  
Controllers  
↓  
Mongoose Models  
↓  
MongoDB Atlas

### 🔹 Request Flow

- Client sends HTTP request with Bearer token
- Express parses body, query, and params
- JWT middleware verifies decodes token
- RBAC middleware checks role
- Zod validates payload
- Controller executes logic
- Mongoose interacts with DB
- Response returned

### 🔹 Layered Benefits

- Separation of concerns
- Maintainability
- Testability
- Scalability (stateless JWT)

### 🔹 Design Decisions

- MongoDB for flexible schema + aggregation
- JWT for stateless auth
- Soft delete for audit trail
- Zod for runtime validation
- RBAC for extensible permissions

---

## 🔌 API DOCUMENTATION

For detailed API documentation, see the `` file in the root folder.

**Base URLs**

- Local: `http://localhost:5000/api`
- Prod: `https://your-live-api.onrender.com/api`

**Authorization Header**

`Authorization: Bearer <JWT_TOKEN>`

### 🔐 Auth APIs

1. Register User  
    `POST /auth/register`  
    Body:
    ```json
    {
      "name": "Vamshi Kumar",
      "email": "vamshi@gmail.com",
      "password": "Vamshi@123",
      "role": "ADMIN"
    }
    ```
2. Login  
    `POST /auth/login`  
    Body:
    ```json
    {
      "email": "vamshi@gmail.com",
      "password": "Vamshi@123"
    }
    ```
    Success:
    ```json
    {
      "success": true,
      "message": "Login successful",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```

### 👤 User APIs (Admin Only)

- `GET /users` — list all users (pagination)
- `PATCH /users/:id/role` — update user role
- `PATCH /users/:id/status` — activate/deactivate user

### 💰 Finance APIs

- Create: `POST /finance`  
  Body:
  ```json
  {
     "amount": 5000,
     "type": "INCOME",
     "category": "Salary",
     "date": "2026-04-01",
     "description": "Monthly salary"
  }
  ```
- Read: `GET /finance?page=1&limit=10&category=Salary&startDate=2026-01-01&endDate=2026-04-03`
- Update: `PUT /finance/:id`
- Soft Delete: `DELETE /finance/:id`

### 📊 Dashboard API

- `GET /dashboard/summary`  
  Response:
  ```json
  {
     "success": true,
     "data": {
        "totalIncome": 28000,
        "totalExpense": 5000,
        "netBalance": 23000,
        "recordCount": 45
     }
  }
  ```

### 🔐 Access Control Matrix

| Endpoint                | Viewer | Analyst | Admin |
|-------------------------|--------|---------|-------|
| Dashboard Summary       | ✅     | ✅      | ✅    |
| Get Finance Records     | ❌     | ✅      | ✅    |
| Create Finance Record   | ❌     | ❌      | ✅    |
| Update Finance Record   | ❌     | ❌      | ✅    |
| Delete Finance Record   | ❌     | ❌      | ✅    |
| User Management         | ❌     | ❌      | ✅    |

---

## 🧮 Business Logic Highlights

- Soft delete: `isDeleted: true`
- Pagination: `skip = (page - 1) * limit`
- Filtering: category regex + date range
- Analytics: MongoDB `$group` + `$sum`

---

## ⚠️ Error Handling

Standard response:
```json
{
  "success": false,
  "message": "Invalid credentials",
  "error": "Detailed error (development only)"
}
```

---

## 🔒 Security Features

- bcrypt password hashing
- JWT token expiration
- Protected routes
- Role-based authorization
- Zod input validation
- No sensitive data in responses

---

## ⚙️ Setup & Installation

```bash
git clone https://github.com/your-username/finance-backend.git
cd finance-backend
npm install
cp .env.example .env
npm run dev
```

### Environment Variables (`.env`)

```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/financeDB
JWT_SECRET=your_very_strong_jwt_secret_key_here
JWT_EXPIRES_IN=7d
NODE_ENV=development
```

---

## 🧪 Testing

- Use Postman / Thunder Client
- Test Viewer, Analyst, Admin roles
- Verify pagination, filtering, dashboard calculations

---

## 📌 Assumptions & Decisions

- First Admin created manually
- Soft delete preferred for audit
- Backend-only project
- ISO date format

---

## 🏆 Conclusion

Clean, scalable, secure backend with separation of concerns, RBAC, and production-ready features.
