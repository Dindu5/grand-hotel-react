import React from "react";
import Landing from "../components/Landing";
import bg from "../assets/bg.jpg";
import Subscription from "../parts/Subscription";

function Facilities() {
  return (
    <div>
      <Landing 
        img={bg} 
        title='Top-Notch Facilities'
        secondTitle='From sports to sightseeing'
        subtitle='We have it all'

      />
      <Subscription />
    </div>
  );
}

export default Facilities;
