# Book My Show Clone
    ## A Full Stack Capstone Project

A book my show clone that displays the Last booking details

An end-to-end web application capable of taking a movie booking consisting of details- Movie Name, Timings, Seat Slots and storing the data in a database, then displaying the last booked movie.

This project contains two folders- Frontend and Backend.

An express server is created for the backend. The same API endpoint is used for both GET and POST request. The express server is then connected with the MongoDB database to fetch the booking details. Our Express server uses Mongoose to connect to the database and to enforce a Schema from the beginning since a Mongoose schema maps directly to a MongoDB collection.

The Routers for GET and POST method are created that fetch and append the data to and from the database.

The Backend is hosted on Render Hosting and frontend on GitHub Pages.

Frontend is created using React.js. A hardcoded list of Movie names, timings and seat slots is rendered from where the user will select their preference. 

The Frontend with the API end points communicates with the server which then goes into the database and fetches the data as a response to the Frontend which is then updated in the UI part. 
This complex project has taught me many aspects of the handling of the complete Frontend and Backend and has given me a brief introduction to how the complete web works. Also how the errors work that we get and how to handle them.

Technologies Used- MongoDB, Express.js, React and Node.js

The complete app link :-https://sahilwadhwaa.github.io/BMS-Frontend/ 
The API end point :- https://bms-fullstack.onrender.com/api/booking
Video Link- https://youtu.be/8Yohldfr9FQ

The API endpoint is the same for POST and GET method.
