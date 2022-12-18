// requiring the mongoose package
const mongoose = require("mongoose");

// mongodb connection url
const connectionString = `mongodb+srv://sahilwadhwaa:qazplm007@bookings.v7bwv5b.mongodb.net/?retryWrites=true&w=majority`;

// function to connect the mongodb database
const connectDb = (server) => {
  // connecting to the database using the connection string provided by the MongoDB Atlas cluster
  //after that the server callback function is passed which will be called and will connect the app to server
  mongoose
    .connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => console.log("db-connected"))
    .then(() => server())
    .catch((err) => console.log(err));
};

// exporting the connect db method to the app for usage
module.exports = connectDb;
