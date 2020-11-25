import React from "react";
import Landing from "../components/Landing";
import bg from "../assets/bg1.jpg";
import Subscription from "../parts/Subscription";
import RoomsDescription from "../parts/RoomsDescription";

// Assets
import room1 from "../assets/room1.png";
import room2 from "../assets/room2.png";
import room3 from "../assets/room3.png";
import room4 from "../assets/room4.png";
import room5 from "../assets/room5.png";
import room6 from "../assets/room6.png";
import room7 from "../assets/room7.png";
import room8 from "../assets/room8.png";
import room9 from "../assets/suite1.png";
import room10 from "../assets/suite2.png";
import room11 from "../assets/suite3.png";
import room12 from "../assets/suite4.png";
import room13 from "../assets/suite5.png";
import room14 from "../assets/suite6.png";
import room15 from "../assets/suite7.png";
import room16 from "../assets/suite8.png";
import ExecutiveRoom from "../parts/ExecutiveRoom";

function Rooms() {
  return (
    <div>
      <Landing
        img={bg}
        title="Our Rooms are"
        secondTitle="Neat and Affordable"
        subtitle="Choose from our list of amazing accomodation"
      />
      <RoomsDescription
        img1={room1}
        img2={room2}
        img3={room3}
        img4={room4}
        title="Book Now"
        price="250"
        name="Standard Twin Room"
        details="Max 2 Adults, StandardTwin Room 67m2 balcony with mini bar and free wifi"
      />
      <RoomsDescription
        img1={room5}
        img2={room6}
        img3={room7}
        img4={room8}
        title="Book Now"
        price="300"
        name="Business Class Suite"
        alternate="alternate"
        details="Max 2 Adults, StandardTwin Room 67m2 balcony with mini bar, mini office and free wifi"
      />
      <RoomsDescription
        img1={room9}
        img2={room10}
        img3={room11}
        img4={room12}
        title="Book Now"
        price="1000"
        name="Executive Terrace"
        details="Max 2 Adults, 109m2 terrace, VIP standard, free mini bar, seaside balcony with fantastic view, free club pass, mini office with PC"
      />
      <RoomsDescription
        img1={room13}
        img2={room14}
        img3={room15}
        img4={room16}
        title="Book Now"
        price="2000"
        name="Prenium Family Suite"
        alternate="alternate"
        details="Max 4 Adults, 5 kids 1000m2 rooms for the family, VIP standard, free mini-bar, seaside balcony with fantastic view, free desserts, mini office with PC"
      />
      <RoomsDescription
        img1={room5}
        img2={room6}
        img3={room7}
        img4={room8}
        title="Book Now"
        price="2000"
        name="Nova Single Deluxe"
        details="Max 2 Adults, 5 kids 300m2 rooms, VIP standard, free mini-bar, champaign, free club pass, seaside balcony with fantastic view, free dessert, mini-office with PC"
      />
      <ExecutiveRoom />
      <Subscription />
    </div>
  );
}

export default Rooms;
