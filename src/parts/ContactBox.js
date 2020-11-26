import React from "react";
import styled from "styled-components";

import contact from "../assets/contact.png";
import Form from "../components/Form";
import Intro from "../components/Intro";
import P from "../components/Paragraph";
import Toptitle from "../components/Toptitle";

const ContactWrap = styled.main`
  padding: 6rem var(--padding);
  .contact-items {
    position: relative;
  }
  .main {
    width: 70%;
    margin-left: auto;
    background-color: black;
    padding: 6rem 4rem;
    position: relative;
    padding-left: 18.5vw;
  }

  .aside {
    position: absolute;
    background-image: url(${contact});
    padding: 5rem 4rem;
    bottom: 50%;
    transform: translateY(50%);
    width: 45%;
    p {
      color: var(--white);
      span {
        display: block;
      }
    }
  }
`;

function ContactBox() {
  return (
    <ContactWrap>
      <div className="contact-items">
        <div className="main">
          <Form />
        </div>
        <div className="aside">
          <Toptitle white>Contact Us</Toptitle>
          <Intro
            main="We Are Listening"
            color="white"
            sub="Reach our ofices for enquires and questins about room and accommodation booking, hall rental or fees"
            other="There's always someone ready to listen"
          />
          <P>
            <span>Grand Hotel Nova</span>
            <span>Via Regina No. 8 - 22016</span>
            <span>Tremessina street, Lago di Como</span>
            <span>Italia</span>
          </P>
          <P>P.IVA 00348270133</P>
        </div>
      </div>
    </ContactWrap>
  );
}

export default ContactBox;
