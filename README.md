# Node.js Project: Login and Signup using DiskDB

This project is a simple Node.js application that implements user authentication functionalities (login and signup) using the `diskdb` package as the database solution. It stores user data locally in JSON files.

## Features

- **User Signup:**
  - Allows new users to register with an email and password.
  - Validates if the email already exists.
  
- **User Login:**
  - Authenticates existing users based on their email and password.
  - Provides error messages for incorrect login credentials.

- **DiskDB Integration:**
  - Stores user data in JSON format locally.
  - Facilitates easy data retrieval and persistence without a full database setup.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/3laaElsadany/node_diskdb.git
   cd node_diskdb
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   node app.js
   ```

4. The server will start, and you can interact with it via API endpoints.

## API Endpoints

### 1. **Signup**
   - **Endpoint:** `POST /signup`


### 2. **Login**
   - **Endpoint:** `POST /login`
