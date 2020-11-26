import React from "react";
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";

// Parts

import Subscription from "../parts/Subscription";
import Home1 from "../parts/Home1";
import Needs from "../parts/Needs";
import RoomsPreviews from "../parts/RoomsPreviews";
import HomeFacilities from "../parts/HomeFacilities";
import Testimonial from "../parts/Testimonial";
import BlogArticles from "../parts/BlogArticles";

// Assets

import bg from "../assets/bg2.jpg";
import Img1 from "../assets/fac12.png";
import Img2 from "../assets/fac13.png";
import Img3 from "../assets/fac14.png";

// Components
import Landing from "../components/Landing";
import Clients from "../components/Clients";
import Navigation from "../components/Navigation";

function Home() {
  let screen = useRef(null);
  let body = useRef(null);
  useEffect(() => {
    var tl = new TimelineMax();
    tl.to(screen, {
      duration: 1.2,
      width: "100%",
      left: "0%",
      ease: Power3.easeInOut,
    });
    tl.to(screen, {
      duration: 1,
      left: "100%",
      ease: Power3.easeInOut,
      delay: 0.5,
    });
    tl.set(screen, { left: "-100%" });
    TweenMax.to(body, 0.3, {
      css: {
        opacity: "1",
        pointerEvents: "auto",
        ease: Power4.easeInOut,
      },
    }).delay(3);
    return () => {
      TweenMax.to(body, 0.5, {
        css: {
          opacity: "0",
          pointerEvents: "none",
        },
      });
    };
  });

  return (
    <div>
      <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)}></div>
      </div>

      <div ref={(el) => (body = el)} className="Headd">
        <Navigation />
        <Landing
          img={bg}
          title="Its not perfect"
          secondTitle="Its Paradise"
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
          name="View Facilities"
          title="Facilities"
          main="We are well equipped with the Modern Facilities"
          sub="Come explore our wide range of odern, top-notch and neat facilities"
          other="Whether you would love to catch a few swings with your old pals or go swimming with family, never a  dull moment because we've got you."
        />
        <Testimonial />
        <BlogArticles />
        <Subscription />
      </div>
    </div>
  );
}

export default Home;
