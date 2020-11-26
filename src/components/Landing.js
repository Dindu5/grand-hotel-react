import React from "react";
import styled from "styled-components";
import { device } from "../utilities/breakpoint";

const LandingWrapper = styled.div`
  height: 670px;
  width: 100%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  padding: var(--padding);

  div {
    transform: translateY(13rem);
    color: var(--white);
    @media ${device.mobileL} {
      transform: translateY(20rem);
    }

    h1 {
      font-size: var(--title-size);
      font-family: var(--heading-font);
      margin: 0.5rem 0.5rem;
      font-weight: 600;
    }

    p {
      font-size: 1.05rem;
      margin-left: 0.5rem;
      font-family: var(--heading-font);
    }
  }
`;

function Landing(props) {
  return (
    <LandingWrapper img={props.img}>
      <div>
        <h1>{props.title}</h1>
        <h1>{props.secondTitle}</h1>
        <p>{props.subtitle}</p>
      </div>
    </LandingWrapper>
  );
}

export default Landing;
