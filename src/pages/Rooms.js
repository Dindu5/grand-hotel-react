import React from "react";
import Landing from "../components/Landing";
import bg from "../assets/bg1.jpg";
import Subscription from "../parts/Subscription";

function Rooms() {
  return (
    <div>
      <Landing img={bg} 
        title='Our Rooms are'
        secondTitle='Neat and Affordable'
        subtitle='Choose from our list of amazing accomodation'
      />
      <Subscription />
    </div>
  );
}

export default Rooms;
