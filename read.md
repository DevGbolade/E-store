Messenger
A one-to-one realtime chat app.

Open in Gitpod

Initial Setup
Create the PostgreSQL database (these instructions may need to be adapted for your operating system):

psql
CREATE DATABASE messenger;
\q
Update db.js to connect with your local PostgreSQL set up. The Sequelize documentation can help with this.

Create a .env file in the server directory and add your session secret (this can be any string):

SESSION_SECRET = "your session secret"
In the server folder, install dependencies and then seed the database:

cd server
npm install
npm run seed
In the client folder, install dependencies:

cd client
npm install
Running the Application Locally
In one terminal, start the front end:

cd client
npm start
In a separate terminal, start the back end:

cd server
npm run dev
How to Run E2E Tests
Seed the database with npm run seed in server directory.
Start the backend server with npm run dev in server directory.
Start the frontend server with npm start in client directory.
Open Cypress dashboard with npx cypress open in client directory.
Click on the test suite to run (e.g. auth.spec.js).
Notes
You need to seed the database before each run. Because E2E test cases writes data to the actual database, re-seeding is necessary to assure consistent test results.
The E2E tests are not comprehensive. There is a test for the authentication pages that should pass with the starting code, and some tests for some of the functionality for some of the tickets you will be assigned.
When you push your changes to GitHub, E2E tests are automatically executed on GitHub Actions. You can find test results under Pull request > Checks > test > Cypress (see screenshots below).
image
