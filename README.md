
---

# Casa de Fabiano - Backend

Welcome to the backend repository of the **Casa de Fabiano** project! This repository contains the logic, validations, and essential functionalities for the backend of the application.

## 🛠️ Technologies Used

- **Language:** JavaScript
- **Database:** MySQL

#📚 Libraries and Frameworks
This project utilizes the following key libraries and frameworks:

Express: A web framework for building RESTful APIs and managing HTTP requests and middleware.

MySQL2: A library for interacting with MySQL databases, supporting promises and prepared statements.

JSON Web Token (jsonwebtoken): Used for creating and verifying JWTs, essential for secure authentication and authorization.

CORS: Middleware to enable Cross-Origin Resource Sharing, allowing API access from different origins.

Dotenv: Loads environment variables from a .env file for secure configuration.

Development Tools
Nodemon: Automatically restarts the server during development when file changes are detected.

These tools and libraries form the backbone of the backend application, facilitating database interactions, secure authentication, efficient routing, and seamless development.


## 📖 About the Project

The **Casa de Fabiano** project is an application that (briefly describe the purpose of the project. Example: provides a donation management system, connects volunteers, etc.).

This repository covers the backend of the application, including:

- Data input validations.
- Business rules.
- Database communication.
- API routes and endpoints.

## 🚀 How to Run the Project

### Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (minimum recommended version: 20.17.0 or +)
- [Git](https://git-scm.com/)
- [MySQL](https://dev.mysql.com/downloads/workbench/)

### Step-by-Step Guide

1. Clone this repository:

   ```bash
   git clone https://github.com/casa-de-Fabiano/casa-de-fabiano---backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd casa-de-fabiano---backend
   ```

3. Install the dependencies:

   ```bash
   npm i
   ```

4. Configure the environment variables. Create a `.env` file in the root directory with the following variables:

   ```
   env
    porta=

    mysql_host=
    mysql_user=
    mysql_pass=
    mysql_db=
    key=
   ```

5. Start the server:

   ```
   bash
     npm start
   ```

6. The local server will be available at:

   ```
   http://localhost:8080
   ```



(Add information if you have a specific testing setup, such as using Jest, Mocha, etc.)

## 📂 Project Structure

```plaintext
src/
├── app.js             # Entry point of the application
├── auth/              # Handles authentication-related logic
├── controller/        # Contains controller logic for handling requests
├── repository/        # Manages data access and database interactions
├── routes.js          # Defines the API routes of the application
├── services/          # Contains business logic and service layer functions
└── validation/        # Handles validation logic for input data
```




