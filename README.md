# CourseNinja

Installation Instructions:

1. Install Node.js and MySQL
2. Clone project from Github: https://github.com/C-Deics/courseninja
3. Use npm to install dependencies recorded in package.json file, currently:

   npm i express ejs body-parser mysql express-session bcrypt -s

4. replace connection info with the following for local database:
   host: "localhost",
   user: "ninjamaster",
   password: "Ninya123!",
   database: "courseninja"

5. Open MySQL command line and run the source.sql file to create database
6. use database and run seed.sql to inject test data
7. In command line use 'node index.js' to start the server
8. Application should now be running at localhost:3000
