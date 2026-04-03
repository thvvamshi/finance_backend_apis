# 💰 Finance Backend API Documentation

> Production-ready backend system with JWT authentication, RBAC, financial data management, and dashboard analytics.

## 🔗 Quick Links

- **Live API**: [Link](https://finance-backend-apis-8l3w.onrender.com/)  
- **Swagger Docs**: [Api_doc_link](https://finance-backend-apis-8l3w.onrender.com/api-docs)  
- **GitHub**: https://github.com/thvvamshi/finance_backend_apis  

---

## 🧱 Tech Stack

Node.js • Express.js • MongoDB • Mongoose • JWT • bcrypt • Zod • Swagger

---

## 🔐 Authentication APIs

### Register User
```http
POST /api/auth/register
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass@123",
  "role": "ANALYST"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "_id": "user_id",
    "email": "john@example.com",
    "role": "ANALYST"
  }
}
```

---

### Login User
```http
POST /api/auth/login
```

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "SecurePass@123"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

---

## 👤 User Management APIs (Admin Only)

### Get All Users
```http
GET /api/users
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "_id": "user_id",
      "name": "John",
      "email": "john@example.com",
      "role": "ANALYST",
      "isActive": true
    }
  ]
}
```

---

### Update User Role
```http
PATCH /api/users/:id/role
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "role": "ADMIN"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "User role updated successfully"
}
```

---

### Update User Status
```http
PATCH /api/users/:id/status
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "isActive": false
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "User status updated successfully"
}
```

---

## 💰 Finance Record APIs

### Create Record
```http
POST /api/finance
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "amount": 5000,
  "type": "INCOME",
  "category": "Salary",
  "date": "2026-04-01",
  "note": "Monthly salary"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Record created successfully",
  "data": {
    "_id": "record_id",
    "amount": 5000,
    "type": "INCOME",
    "category": "Salary",
    "date": "2026-04-01",
    "createdAt": "2026-03-15T10:30:00Z"
  }
}
```

---

### Get All Records
```http
GET /api/finance?page=1&limit=10&type=INCOME&category=Salary
Authorization: Bearer <token>
```

**Query Parameters:**
- `page` (number): Page number (default: 1)
- `limit` (number): Records per page (default: 10)
- `type` (string): INCOME or EXPENSE
- `category` (string): Filter by category
- `startDate` (date): YYYY-MM-DD
- `endDate` (date): YYYY-MM-DD

**Response (200):**
```json
{
  "success": true,
  "total": 50,
  "page": 1,
  "totalPages": 5,
  "data": [
    {
      "_id": "record_id",
      "amount": 5000,
      "type": "INCOME",
      "category": "Salary",
      "date": "2026-04-01",
      "note": "Monthly salary"
    }
  ]
}
```

---

### Update Record
```http
PUT /api/finance/:id
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "amount": 6000,
  "category": "Bonus"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Record updated successfully"
}
```

---

### Delete Record (Soft Delete)
```http
DELETE /api/finance/:id
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "success": true,
  "message": "Record deleted successfully"
}
```

---

## 📊 Dashboard API

### Get Summary
```http
GET /api/dashboard/summary
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "totalIncome": 50000,
    "totalExpense": 15000,
    "netBalance": 35000
  }
}
```

---

## 🔐 Access Control Matrix

| Endpoint | Viewer | Analyst | Admin |
|----------|--------|---------|-------|
| Dashboard | ✅ | ✅ | ✅ |
| Finance Read | ❌ | ✅ | ✅ |
| Finance Write | ❌ | ❌ | ✅ |
| User Mgmt | ❌ | ❌ | ✅ |

---

## ⚠️ Error Response

```json
{
  "success": false,
  "message": "Error description"
}
```

**Common Status Codes:**
- `200` - OK
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Server Error

---

## 🔒 Authentication

Use JWT token in request headers:
```
Authorization: Bearer <your_jwt_token>
```

---

## ⚙️ Setup

```bash
git clone https://github.com/thvvamshi/finance_backend_apis
cd finance_backend_apis
npm install
npm run dev
```

---

## 🌍 Environment Variables

```
PORT=5000
MONGO_URI=mongodb+srv://...
JWT_SECRET=your_secret_key
BASE_URL=https://your-api.com/api
```
