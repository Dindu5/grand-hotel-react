import React from "react";
import Landing from "../components/Landing";
import bg from "../assets/bg2.jpg";
import Subscription from "../parts/Subscription";
import Clients from "../components/Clients";
import Home1 from "../parts/Home1";
import Needs from "../parts/Needs";
import RoomsPreviews from "../parts/RoomsPreviews";
import HomeFacilities from "../parts/HomeFacilities";

import Img1 from "../assets/facilimg1.png";
import Img2 from "../assets/facilimg2.png";
import Img3 from "../assets/facilimg3.png";
import Testimonial from "../parts/Testimonial";
import BlogArticles from "../parts/BlogArticles";



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
      <HomeFacilities 
      img1={Img1}
      img2={Img2}
      img3={Img3}
      title='Facilities'
      main='We are well equipped with the Modern Facilities'
      sub='Come explore our wide range of odern, top-notch and neat facilities'
      other="Whether you would love to catch a few swings with your old pals or go swimming with family, never a  dull moment because we've got you."
      />
      <Testimonial />
      <BlogArticles />
      <Subscription />
    </div>
  );
}

export default Home;
