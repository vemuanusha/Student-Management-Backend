# Student Management API

A RESTful API built using **Node.js, Express.js, and MongoDB** for managing student records with secure authentication and production-level backend features.

## Features

* User Registration & Login
* JWT Authentication & Refresh Tokens
* Role-Based Access Control (RBAC)
* Student CRUD Operations
* Search, Filtering, Sorting & Pagination
* File Uploads with Multer
* Relationships & Populate
* Aggregation & Indexing
* Global Error Handling
* Transactions
* MongoDB Atlas Integration

## Tech Stack

* Node.js
* Express.js
* MongoDB & Mongoose
* JWT
* bcrypt
* Multer
* dotenv

## API Endpoints

### Authentication

* `POST /users/register`
* `POST /users/login`
* `POST /users/refresh-token`

### Students

* `GET /students`
* `GET /students/:id`
* `POST /students`
* `PUT /students/:id`
* `DELETE /students/:id`
* `POST /students/upload`

## Installation

```bash
npm install
npm start
```


## Live Demo

**Render URL:** `https://student-management-backend-i297.onrender.com`

## Author

**Anusha Vemu**
GitHub: https://github.com/vemuanusha
