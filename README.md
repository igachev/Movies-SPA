# Movies-SPA

## Link to movies-spa website: https://test-movies-spa.onrender.com

## Link to movies-spa-API: https://test-movies-api.onrender.com

### Backend documentation for movies API:

 This is a backend application built with Node.js and Express.
 
 ### Requirements:
 
 - Node.js (v12 or later)
 - npm (v6 or later)
 - express
 - cors
 - mongoose
 - bcrypt
 - jsonwebtoken
 - nodemon
 - nodemailer
 - dotenv

### Installation:

1. Clone this repository: `git clone https://github.com/igachev/Movies-SPA.git`

2. Install dependencies: `npm install`
 
3. Go to folder server: `cd server`

4. Start the server: `npm start`

### Configuration:
This application uses a `.env` file to store configuration variables. You can create a `.env` file
in the root directory of the project and add the following variables:

DATABASE_URL = 

JWT_SECRET =

EMAIL =   

PASS =

DATABASE used is mongoDB

EMAIL must be your email.
PASS is your email password.

### Usage:

The server listens on port 5000 by default. You can send HTTP requests to the server using tools like Postman. Here are the endpoints:

- `POST /users/register` : Creates a new user
- `POST /users/login` : Sign in user with valid information
- `GET /users/logout` : Sign out user
- `POST /movies/create` : Add new movie
- `GET /movies` : return all movies
- `GET /movies/:movieId` : return a specific movie by ID
- `DELETE /movies/:movieId` : delete existing movie by ID
- `PUT /movies/:movieId` : update existing movie by ID
- `POST /comments/:movieId` : create a comment for a movie by ID
- `GET /comments/:movieId` : return all comments for a specific movie by ID
- `DELETE /comments/:movieId` : delete a comment for movie by ID
- `POST /subscribe` : send an email to the subscribed user
