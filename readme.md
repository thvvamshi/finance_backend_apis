# 💰 Finance Management API

A production-ready backend system designed for managing financial records, user access control, and business analytics through secure REST APIs.

---

## About The Project

I built this project to explore how modern financial platforms manage sensitive data, enforce role-based permissions, and generate actionable insights from financial transactions.

The system provides secure authentication, financial record management, user administration, and dashboard analytics through a structured REST API architecture.

Beyond CRUD operations, this project focuses on production-ready backend engineering practices including authentication, authorization, validation, API documentation, security hardening, and scalable API design.

---

## Features

### 🔐 Authentication & Security

* JWT Authentication
* Password Hashing with bcrypt
* Secure Login & Registration
* Protected API Endpoints
* Role-Based Access Control (RBAC)

### 👥 User Management

* User Registration
* User Authentication
* Role Management
* Account Activation & Deactivation
* Admin User Controls

### 💰 Financial Records

* Create Financial Records
* Update Financial Records
* Soft Delete Support
* Categorization
* Income & Expense Tracking
* Date-Based Filtering

### 📊 Dashboard Analytics

* Total Income
* Total Expenses
* Net Balance
* Financial Overview Metrics

### 📖 Developer Experience

* Swagger API Documentation
* Request Validation with Zod
* Consistent API Responses
* Production-Ready Architecture

---

## Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JWT
* bcrypt

### Validation & Documentation

* Zod
* Swagger

---

## Architecture

```text
Client
   │
   ▼
REST API
   │
   ▼
Express.js
   │
   ├── Authentication Layer
   ├── Authorization Layer
   ├── Validation Layer
   ├── Business Logic
   └── Analytics Layer
   │
   ▼
MongoDB
```

---

## API Capabilities

### Authentication

* Register Users
* Login Users
* Generate JWT Tokens

### User Management

* View Users
* Update Roles
* Manage User Status

### Finance Management

* Create Records
* View Records
* Update Records
* Soft Delete Records
* Filter Records

### Dashboard

* Income Summary
* Expense Summary
* Net Balance Analytics

---

## Access Control Matrix

| Endpoint        | Viewer | Analyst | Admin |
| --------------- | ------ | ------- | ----- |
| Dashboard       | ✅      | ✅       | ✅     |
| Finance Read    | ❌      | ✅       | ✅     |
| Finance Write   | ❌      | ❌       | ✅     |
| User Management | ❌      | ❌       | ✅     |

---

## API Documentation

Interactive Swagger documentation is available at:

```text
/api-docs
```

The documentation includes:

* Request Schemas
* Response Schemas
* Authentication Requirements
* Error Responses
* Example Requests

---

## Environment Variables

```env
PORT=5000

MONGO_URI=mongodb+srv://...

JWT_SECRET=your_secret_key

BASE_URL=https://your-api.com/api
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/thvvamshi/finance_backend_apis

cd finance_backend_apis
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

---

## Core Engineering Concepts Demonstrated

* REST API Development
* Authentication & Authorization
* Role-Based Access Control
* Financial Data Modeling
* Dashboard Analytics
* API Documentation
* Request Validation
* Backend Security
* Production Deployment
* Scalable Backend Design

---

## Future Improvements

* Multi-Currency Support
* Budget Planning
* Financial Forecasting
* CSV Export
* Scheduled Reports
* Email Notifications
* Audit Logging
* Advanced Analytics

---

## Learning Outcomes

This project helped me gain hands-on experience with:

* Secure backend development
* Financial data management
* JWT authentication workflows
* Role-based authorization systems
* MongoDB data modeling
* API documentation best practices
* Production-ready Express.js applications

---

## Author

**Vamshi Kumar**

Software Developer | Backend Engineer | System Design Enthusiast

LinkedIn: https://www.linkedin.com/in/bodavamshikumar

---

## License

MIT License
