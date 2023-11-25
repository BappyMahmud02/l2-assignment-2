# Node.js Express TypeScript MongoDB Application

This is a sample Node.js Express application developed in TypeScript, integrated with MongoDB using Mongoose. It also includes data integrity through validation using Zod.

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

## Project Structure
Assignment-2/
│
├── src/
│   ├── controllers/
│   │   ├── userController.ts
│   │   └── orderController.ts
│   ├── models/
│   │   ├── user.ts
│   │   └── order.ts
│   ├── routes/
│   │   ├── userRoutes.ts
│   │   └── orderRoutes.ts
│   ├── utils/
│   │   └── validation.ts
│   ├── app.ts
│   └── server.ts
│
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

## API Endpoints

## User Routes
1. GET /api/users: Get all users
2. GET /api/users/:userId: Get a specific user by ID
3. POST /api/users: Create a new user
4. PUT /api/users/:userId: Update a user by ID
5. DELETE /api/users/:userId: Delete a user by ID

## Order Routes
1. GET /api/users/:userId/orders: Get all orders for a specific user
2. POST /api/users/:userId/orders: Create a new order for a specific user
3. GET /api/users/:userId/orders/total-price: Get the total price of all orders for a specific user

## Data Validation
Data validation is performed using the Zod library. Validation schemas are defined in src/utils/validation.ts.