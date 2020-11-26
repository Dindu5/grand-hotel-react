import React from "react";
import Landing from "../components/Landing";
import bg from "../assets/bg3.jpg";
import Navigation from "../components/Navigation";
import ContactBox from "../parts/ContactBox";

function Contact() {
  return (
    <div>
      <Navigation />
      <Landing img={bg} title="We Are always" secondTitle="Ready to help you" />
      <ContactBox />
    </div>
  );
}

export default Contact;
