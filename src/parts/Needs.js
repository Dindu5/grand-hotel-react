import React from "react";
import Intro from "../components/Intro";
import styled from "styled-components";
import img1 from "../assets/needimg1.png";
import img2 from "../assets/needimg2.png";
import img3 from "../assets/needimg3.png";
import { device } from "../utilities/breakpoint";

const NeedWrap = styled.section`
  display: flex;
  padding: var(--padding);
  justify-content: space-between;
  padding-top: 0;
  align-items: center;

  @media ${device.mobileL} {
    flex-direction: column-reverse;
  }

  > div {
    width: 48%;
    @media ${device.mobileL} {
      width: 90%;
    }
  }

  .need-images {
    display: flex;
    justify-content: space-between;

    .img-contain {
      width: 30%;
      height: max-content;

      img {
        width: 100%;
        height: auto;
      }
    }

    .img-contain:nth-child(2) {
      margin-top: 2rem;
    }

    .img-contain:nth-child(3) {
      margin-top: 4rem;
    }
  }
`;

function Needs() {
  return (
    <NeedWrap>
      <div className="need-images">
        <div className="img-contain">
          <img src={img1} alt="Home" />
        </div>
        <div className="img-contain">
          <img src={img2} alt="Home" />
        </div>
        <div className="img-contain">
          <img src={img3} alt="Home" />
        </div>
      </div>
      <div>
        <Intro
          main="Best-in-class Service"
          sub="Welcome to Grand Hotel Nova We offer class, comfort, hospitality and excitement. Welcome to paradise"
          other="Welcome to Grand Hotel Nova We offer class, comfort, hospitality and excitement. Welcome to paradise"
        />
      </div>
    </NeedWrap>
  );
}

export default Needs;
