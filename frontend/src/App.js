import "./App.css";
//importing useState, useEffect
import { useState, useEffect } from "react";
//importing different components of the App
import ContentContainer from "./components/ui/ContentContainer";
import Slots from "./components/Slots";
import data from "./components/data/data";
import LastBooking from "./components/LastBooking";
import { Seats } from "./components/Seats";

//loader imported
import LoadingSpinner from "./components/ui/LoadingSpinner";

function App() {
  // initial state of our app 
  const [movieData, setmovieData] = useState({
    movie: "",
    timeSlot: "",
    seat: [],
  });

  //this state will save the fetched data
  const [fetchedData, setfetchedData] = useState([]);

  //state for the loader
  const [isLoading, setLoading] = useState(false)

  // requiring the data provided to select from
  const { movies, slots, seats } = data;

  // this function collects the seats data and updates the state
  const handleSeats = (seatData) => {
    const findSeat = movieData.seat.findIndex(
      (el) => el.seatName === seatData.seatName
    );

    if (findSeat !== -1) {
      const newSeatData = [...movieData.seat];
      newSeatData[findSeat] = seatData;
      setmovieData((prev) => {
        return {
          ...prev,
          seat: newSeatData,
        };
      });
    } else {
      setmovieData((prev) => {
        return {
          ...prev,
          seat: [...prev.seat, seatData],
        };
      });
    }
  };
  

  // this function fetches the last booking and update the state for displaying of it
  const getData = async () => {
    return fetch("https://bms-fullstack.onrender.com/api/booking")
      .then((data) => data.json())
      .then((data) => setfetchedData(data))
      .catch((err) => console.log(err));
  };

  // this function sends the collected state to the db and updates it further gives a response of the last booking
  const handelPost = async (data) => {
    return fetch("https://bms-fullstack.onrender.com/api/booking", {
      method: "no-cors",
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        return res.json();
      })

      .then((data) => {
        return setfetchedData(data);
      })

      .then((data) => {
        return setLoading(false);
      })

      .catch((err) => console.log(err));
      
  }

  // this will run when the component will mount and update the state ultimately setting up the state to show the last booking
  useEffect(() => {
    getData();
  }, []);

  // these functions update the state of the movie data
  const handleMovie = (selectedMovie) => {
    setmovieData((prev) => {
      return {
        ...prev,
        movie: selectedMovie,
      };
    });
  };

  const handleTime = (selectedTime) => {
    setmovieData((prev) => {
      return {
        ...prev,
        timeSlot: selectedTime,
      };
    });
  };
  // ///////////////////////////////////
  // this function handle the submit event which will send data to the server
  const handleSubmit = () => {
    
    const { movie, seat, timeSlot } = movieData;
    if (movie === "" || timeSlot === "" || seat.length <= 0) {
      alert("Please select every field to continue further");
      return;
    } else setLoading(true)

    return handelPost(movieData);
  };

  return (
    <div className="app-container">
      <div className="app-content">
        <div className="left">
          <ContentContainer label={"Select A Movie"}>
            {movies.map((el, i) => (
              <Slots
                label={el}
                key={i}
                cb={handleMovie}
                movieData={movieData.movie}
              />
            ))}
          </ContentContainer>

          <ContentContainer label={"Select a Time Slot"}>
            {slots.map((el, i) => (
              <Slots
                label={el}
                key={i}
                movieData={movieData.timeSlot}
                cb={handleTime}
              />
            ))}
          </ContentContainer>

          <ContentContainer label={"Select the Seats"}>
            <Seats seats={seats} cb={handleSeats} data={fetchedData} />
          </ContentContainer>

          <div className="submit-btn">
            <button onClick={handleSubmit}><b>Submit!</b></button>

          </div>
        </div>
        <div className="right">
        {
          isLoading ? 
          <LoadingSpinner />
          : 
          <LastBooking data={fetchedData} />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
