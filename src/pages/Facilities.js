import React from "react";
import Landing from "../components/Landing";
import bg from "../assets/bg.jpg";

function Facilities() {
  return (
    <div>
      <Landing 
        img={bg} 
        title='Top-Notch Facilities'
        secondTitle='From sports to sightseeing'
        subtitle='We have it all'

      />
    </div>
  );
}

export default Facilities;
