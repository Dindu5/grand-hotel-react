import React from "react";
import Landing from "../components/Landing";
import bg from "../assets/bg2.jpg";
import Subscription from "../parts/Subscription";
import Clients from "../components/Clients";
import Home1 from "../parts/Home1";
import Needs from "../parts/Needs";
import RoomsPreviews from "../parts/RoomsPreviews";


function Home() {
  return (
    <div>
     <Landing 
      img={bg} 
      title='Its not perfect' 
      secondTitle='Its Paradise' 
      subtitle='You"re welcome to Grand Hotel Nova'
      />
      <Clients />
      <Home1 />
      <Needs />
      <RoomsPreviews />
      <Subscription />
    </div>
  );
}

export default Home;
