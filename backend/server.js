//importing the express framework
const express = require("express");
//importing all the required libraries
const bodyParser = require("body-parser");
const cors = require("cors");
//setting the environment variable. By default port is 8080
const PORT = process.env.PORT || 8080;

// importing of the routes
const bookingRouter = require("./Routes/bookingRoutes");

// importing the database
const connectDb = require("./database/database");

// initializing the app
const app = express();

// all of the required middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// all of the booking routes
app.use("/api", bookingRouter);

// connecting to the database and starting up of the server
connectDb(() => app.listen(PORT, () => console.log("server is listening")));
