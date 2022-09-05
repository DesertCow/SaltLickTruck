<div align="center">
<h1>Salt Lick Food Truck Demo</h1>
<h4>A Food truck ordering and management system</h4>
</div>
  
  ---

## Table-of-Contents

* [Deployment](#deployment)
* [Description](#description)
* [Features](#features)
* [Installation](#installation)
* [Wireframe](#wireframe)
* [Technology](#Technology)
* [Demo](#demo)

  <br>
  <br>

## [Deployment](#table-of-contents)
  ----

  <div align="center">
  <h3> Hosted by Heroku</h3>
  <a href="https://saltlicktruck.herokuapp.com/">https://saltlicktruck.herokuapp.com/</a>
  </div>
  <br>
  <br>
  <br>


## [Description](#table-of-contents)

---
  Food truck management application with a customer facing ordering App with a backend Kitchen management and display application that utilizes MongoDB, Express, React, and NodeJS (MERN Stack).
<br>
<br>

## [Features](#table-of-contents)

---
* Order Tracking System
<br>
- User (Auth0)
  - Sign Up
  - Sign-In
  - Password Recovery
<br>
- Database
  - Login (Auth0)
  - User Profile
  - Order Data
  - Analytics
<br>
- Kitchen View
  - Display Orders
  - Est Wait Times
  - Real Time Order Change
  - Order Close Out Tool
<br>
- Payment System (Stripe)
  - save payment to user profile
<br>
- Admin
  - TBD

<br>
<br>

## [Wireframe](#table-of-contents)

 ----

<p align="center">
  <img src="./Dev_Docs/Home_Page.png" height="550" alt="Main Screen Wireframe")
</p>
<h5 align="center">Home Screen</h5>

<br>
<br>
<br>

<p align="center">
  <img src="./Dev_Docs/Login_1.png" height="550" alt="Login Screen Wireframe")
</p>
<h5 align="center">Login Screen</h5>
<br>
<br>
<br>

<p align="center">
  <img src="./Dev_Docs/SignUp_1.png" height="550" alt="Sign Up Wireframe")
</p>
<h5 align="center">Sign Up Page</h5>

<br>
<br>
<br>

<p align="center">
  <img src="./Dev_Docs/Main_Menu_1.png" height="550" alt="Settings Wireframe")
</p>
<h5 align="center">Menu</h5>

<br>
<br>

## [Installation](#table-of-contents)

----

````
npm init
 
npm install

## Configure Database Connection via Babble-Exchange/.env
## Expected Database Name = babble_DB
## CLEARDB_DATABASE_URL = "mysql://root:password@localhost/babble_DB"

npm run deploy

npm start


````

<br>
<br>

## [Technology](#table-of-contents)

  ----

* Packages
  * Node.js (16.15.1)
  * Express.js (4.18.1)
  * Bootstrap (5.2.0-beta1)
  * Bcrypt (5.0.1)
  * dotenv (16.0.1)
    <br>
* New Packages
  * socket-io (4.5.1)
  * cors (2.8.5)
  * react-icons (4.4.0)
  * react-toastify (9.0.7)

<br>
<br>


## [Demo](#table-of-contents)

  ----

 <p align="center">
  <img src="./public/src/img/Demo1.gif" width="774" height="486" alt="Demo 1")
</p>
<h5 align="center">Demo</h5>
<br>
<br>

