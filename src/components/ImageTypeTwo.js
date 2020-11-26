import React from "react";
import styled from "styled-components";
import { device } from "../utilities/breakpoint";

const ImgWrapper = styled.div`
  position: relative;
  width: 40%;
  margin-bottom: -3rem;

  @media ${device.mobileL} {
    width: 80%;
    margin: auto;
    margin-bottom: -3rem;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  > div {
    display: flex;
    width: 105%;
    transform: translateY(-50%) translateX(-5%);

    .img-container {
      width: 52%;
    }

    .img-container:nth-child(1) {
      z-index: 1;
      transform: scale(1.2) translateY(20px) translateX(15px);
    }

    .img-container:nth-child(2) {
      z-index: 4;
      transform: translateY(-5%) translateX(9px);
    }
  }
`;

function ImageTypeTwo(props) {
  return (
    <ImgWrapper>
      <img src={props.img1} alt="Hotel" />
      <div>
        <div className="img-container">
          <img src={props.img2} alt="Hotel Sub" />
        </div>
        <div className="img-container">
          <img src={props.img3} alt="Hotel Sub" />
        </div>
      </div>
    </ImgWrapper>
  );
}

export default ImageTypeTwo;
