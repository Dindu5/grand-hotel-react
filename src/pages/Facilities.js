import React from "react";
import styled from "styled-components";

// Parts
import Subscription from "../parts/Subscription";
import HomeFacilities from "../parts/HomeFacilities";
import FacilityIcons from "../parts/FacilityIcons";

// Components
import Landing from "../components/Landing";
import Navigation from "../components/Navigation";
import DarkPageWrap from "../components/DarkPageWrap";

// Assets
import bg from "../assets/bg.jpg";
import img1 from "../assets/fac1.png";
import img2 from "../assets/fac2.png";
import img3 from "../assets/fac3.png";
import img4 from "../assets/fac4.png";
import img5 from "../assets/fac5.png";
import img6 from "../assets/fac6.png";
import img7 from "../assets/fac7.png";
import img8 from "../assets/fac8.png";
import img9 from "../assets/facilimg1.png";
import img10 from "../assets/facilimg2.png";
import img11 from "../assets/facilimg3.png";
import img12 from "../assets/fac9.png";
import img13 from "../assets/fac10.png";
import img14 from "../assets/fac11.png";
import img15 from "../assets/fac15.png";
import img16 from "../assets/fac16.png";
import img17 from "../assets/fac17.png";
import bg2 from "../assets/deco.png";

const Bg = styled.section`
  background-image: url(${bg2});
  background-position: bottom;
  background-size: cover;
`;

function Facilities() {
  return (
    <div>
      <Navigation />
      <Landing
        img={bg}
        title="Top-Notch Facilities"
        secondTitle="From sports to sightseeing"
        subtitle="We have it all"
      />
      <FacilityIcons />

      <HomeFacilities
        img1={img1}
        img3={img2}
        name="Book Now"
        title="Gymnasium"
        main="Stay Fit and Healthy"
        sub="Come explore our wide range of modern, top-notch and neat facilities"
        other="Whether you would love to catch a few swings with your old pals or go swimming with family, never a  dull moment because we've got you."
      />
      <DarkPageWrap>
        <HomeFacilities
          none="none"
          alternate="alternate"
          img1={img3}
          img2={img4}
          img3={img5}
          secondary="secondary"
          bottom="bottom"
          color="white"
          name="Book Now"
          title="Casino and Lounge"
          main="When You're Feeling Lucky!!"
          sub="Take advantage of our seasonal specials. From sports to sightseeing, we have it all"
        />
        <HomeFacilities
          none="none"
          img1={img6}
          img2={img7}
          img3={img8}
          secondary="secondary"
          color="white"
          name="Book Now"
          title="Nova Exotic Resturant"
          main="Enjoy Jolly, Delightful Meals"
          sub="We present a plethora of delicious meals, prepared by the best chefs in the country. Get lovable local and continential dishes. All you could eat"
        />
      </DarkPageWrap>
      <Bg>
        <HomeFacilities
          alternate="alternate"
          img1={img9}
          img2={img10}
          img3={img11}
          name="Book Now"
          title="Nova Lounge and Bar"
          main="Raise The Booze, Mate!"
          sub="Get sensational or Relax and unwind with friends and family on evenings, in our exotic Nova Lounge"
        />
        <HomeFacilities
          img1={img12}
          img2={img13}
          img3={img14}
          partial="partial"
          name="Book Now"
          title="Conference Rooms and Halls"
          main="Make Your Even Memorable"
          sub="Book our fully equipped conference halls for your business meetings, reception partie, meet-and-greet ...."
        />
        <HomeFacilities
          alternate="alternate"
          img1={img15}
          img2={img16}
          img3={img17}
          partial="partial"
          name="Book Now"
          title="Grand Nova Spa"
          main="Wellness, Relax and Spa."
          sub="Give Yourself a moment to relax. We have a fully equipped spa with with a relaxing ambiance and experienced staff"
        />
      </Bg>
      <Subscription />
    </div>
  );
}

export default Facilities;
