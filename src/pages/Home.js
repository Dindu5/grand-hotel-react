import React from "react";
import Landing from "../components/Landing";
import bg from "../assets/bg2.jpg";


function Home() {
  return (
    <div>
     <Landing 
      img={bg} 
      title='Its not perfect' 
      secondTitle='Its Paradise' 
      subtitle='You"re welcome to Grand Hotel Nova'
      />
    </div>
  );
}

export default Home;
