import React from "react";
import { TweenMax, TimelineMax, Power3, Power4, Power2 } from "gsap";
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
import logo from "../assets/logowhite.svg";

// Components
import Landing from "../components/Landing";
import Clients from "../components/Clients";
import Navigation from "../components/Navigation";
import Main from "../components/Body";
import PageLoad from "../components/PageLoad";

function Home() {
  let screen = useRef(null);
  let body = useRef(null);
  useEffect(() => {
    console.log(screen.children[1].firstElementChild);
    var tl = new TimelineMax();
    tl.to(screen, {
      duration: 1.2,
      width: "100%",
      left: "0%",
      ease: Power3.easeInOut,
    });
    tl.to(screen.children[1].firstElementChild, 0.1, {
      opacity: 1,
      ease: Power3.easeInOut,
    });
    tl.staggerFrom(
      [screen.children[0], screen.children[1]],
      0.8,
      { height: 0, ease: Power2.easeInOut },
      0.4
    );
    tl.staggerTo(
      [screen.children[0], screen.children[1]],
      0.6,
      { width: 0, ease: Power2.easeOut, delay: 0.5 },
      0.1
    );
    tl.to(screen, {
      duration: 1,
      left: "100%",
      ease: Power3.easeInOut,
      delay: -0.6,
    });
    tl.set(screen, { left: "-100%" });
    TweenMax.to(body, 0.3, {
      css: {
        opacity: "1",
        pointerEvents: "auto",
        transitionDelay: "0.8",
        ease: Power4.easeInOut,
      },
    }).delay(3);
    return () => {
      TweenMax.to(body, 0.5, {
        css: {
          opacity: "1",
          pointerEvents: "none",
        },
      });
    };
  });

  return (
    <div>
      <PageLoad>
        <div ref={(el) => (screen = el)}>
          <div className="img">
            <img src={logo} alt="Grand Hotel Nova" />
          </div>
          <div className="text">
            <h1>HOME</h1>
          </div>
        </div>
      </PageLoad>

      <Main ref={(el) => (body = el)}>
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
      </Main>
    </div>
  );
}

export default Home;
