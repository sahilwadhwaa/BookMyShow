const express = require("express");
const bookingRouter = express.Router();
// importing the DB Schema
const bookingsModel = require("../model/bookings");

// router for get request
bookingRouter.get("/booking", (req, res, next) => {
  // getting all the booking data from the db but sending only the last booking
  // sending an empty array as response if it is empty 
  bookingsModel
    .find()
    .then((result) => {
      if (result.length === 0 || !result) {
        return res.send([]);
      } else {
        return res.send(result[result.length - 1]);
      }
    })
    //catch block for any encountred errors 
    .catch((err) => console.log(err));
});

// router for post request
bookingRouter.post("/booking", (req, res, next) => {
  // storing the user data entered in the frontend
  const data = req.body;

  const movie = data.movie;
  const slot = data.timeSlot;
  const seats = data.seat;

  // creating a new model withh the data fetched from the frontend
  const movieBooking = new bookingsModel({ movie, slot, seats });

  // saving the user data in the database and then fetching the last booking 
  //result and sending it back to the frontend as a response
  movieBooking
    .save()
    .then(() =>
      bookingsModel
        .find()
        .then((result) =>
          res.status(200).send(JSON.stringify(result[result.length - 1]))
        )
    )
    //catch block for any encountred errors 
    .catch((err) => console.log(err));
});

module.exports = bookingRouter;
