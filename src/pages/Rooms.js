import React from "react";
import Landing from "../components/Landing";
import bg from "../assets/bg1.jpg";

function Rooms() {
  return (
    <div>
      <Landing img={bg} 
        title='Our Rooms are'
        secondTitle='Neat and Affordable'
        subtitle='Choose from our list of amazing accomodation'/>
    </div>
  );
}

export default Rooms;
