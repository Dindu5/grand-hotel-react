import React from "react";
import styled, { css } from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;

  img {
    width: 100%;
    height: auto;
  }

  .image-boxes {
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 70%;
    left: 1rem;
    width: 100%;
    ${(props) =>
      props.alternate &&
      css`
        right: 1rem;
        left: auto;
      `}

    .image-box {
      width: 30%;
    }
  }
`;

function ImageTypeOne(props) {
  return (
    <ImageContainer alternate={props.alternate}>
      <img src={props.img1} alt="Room" />

      <div className="image-boxes">
        <div className="image-box">
          <img src={props.img2} alt="Hotel View" />
        </div>
        <div className="image-box">
          <img src={props.img3} alt="Hotel View" />
        </div>
        <div className="image-box">
          <img src={props.img3} alt="Hotel View" />
        </div>
      </div>
    </ImageContainer>
  );
}

export default ImageTypeOne;
