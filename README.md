# Movies-SPA

### Initial loading of website might take up to 1 minute because it is free tier

## Link to movies-spa website: https://test-movies-spa.onrender.com

## Link to movies-spa-API: https://test-movies-api.onrender.com/movies

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

2. Go to folder server: `cd server`
 
3. Install dependencies: `npm install`

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


### Frontend documentation for Single Page Application Movies-SPA
This application is built with JavaScript,HTML,CSS.Using this application you can:
 - Browse through  movie / tv show collection and find out your next movie to watch
 - Like and Dislike movie
 - Add comments to movies
 - Add,Edit,Delete Movies
 - To Subscribe 

### Requirements:
- lit-html
- page
- lite-server

### Installation:
1. Make sure you completed the above mentioned installation
2. Go to folder client: `cd client`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`


### Unit Tests:
1. Go to folder client: `cd client`
2. Run command: `npx jasmine-browser-runner serve`

<p align="center">
 
 ![movies-tests](https://github.com/igachev/Movies-SPA/assets/102420254/d7f1097d-48f7-41be-9e94-dd2bf87f655f)

</p>

### Folder structure:
- `views` : Contains HTML templates for different views of the application.
- `services` : Contains functions for making API requests to the server.
- `middlewares` : Contains middleware functions used by the application.
- `app.js` : Entry point of the application, which sets up routes using Page.js and imports middleware and view modules.

### Routes:
The application uses Page.js for client-side routing. Here are the available routes:
- `/` : Homepage view
- `/register` : User registration view
- `/login` : User login view
- `/logout` : User logout view
- `/movies` : Movies listing view
- `/movies/create` : Movie creation view
- `/movies/:movieId/details` : Movie details view
- `/movies/:movieId/delete` : Movie deletion view
- `/movies/:movieId/edit` : Movie editing view
- `/comments/:movieId/add` : Comment addition view


### Images:

<p align="center">
Home Page
 
 ![movies-home](https://github.com/igachev/Movies-SPA/assets/102420254/8a5abcbc-be92-4fb0-95c6-ab628790e57f)

</p>

<p align="center">
 Register Page

![movies-register](https://github.com/igachev/Movies-SPA/assets/102420254/68f11b85-ece7-464e-b2de-4a7df4adc851)

</p>

<p align="center">
 Login Page

 ![movies-login](https://github.com/igachev/Movies-SPA/assets/102420254/69e8580f-28d4-408c-ba2b-572f18bbcfd7)

</p>

<p align="center">
 All Movies Page.Pagination is used.

 ![movies-movies](https://github.com/igachev/Movies-SPA/assets/102420254/aabdeea3-828c-46bb-a876-5d93dcfb3eff)

</p>

<p align="center">
 Guest User Movie Details

 ![movies-guestDetails](https://github.com/igachev/Movies-SPA/assets/102420254/a8f67128-7f8d-49f1-a7b6-99c3bbec258e)

</p>

<p align="center">
 Logged In User Movie Details

 ![movies-loggedUser](https://github.com/igachev/Movies-SPA/assets/102420254/4fd267be-5427-4bc3-8117-1962d53a8b6c)

</p>

<p align="center">
 Owner User Movie Details

 ![movies-ownerDetails](https://github.com/igachev/Movies-SPA/assets/102420254/1912a634-660b-4cc9-9e78-5c513a60b9f6)

</p>

<p align="center">
 Create Movie Page

 ![movies-create](https://github.com/igachev/Movies-SPA/assets/102420254/b023e969-6fc6-4ec8-a292-7d665e987762)

</p>

<p align="center">
 Post comment for specific movie

 ![movies-postComment](https://github.com/igachev/Movies-SPA/assets/102420254/ca49358e-3dfa-4e8b-8ca9-7d1a67ee6670)

</p>
