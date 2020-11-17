import styled from "styled-components";
import { device } from "../utilities/breakpoint";

const ToogleBtn = styled.div`
  position: absolute;
  z-index: 3;
  cursor: pointer;
  right: 4rem;
  top: 1.5rem;
  display: none;

  @media ${device.mobileS} {
    display: block;
  }

  div {
    width: 2rem;
    height: 0.3rem;
    background: var(--active-blue);
    transition: all 0.6s ease-out;
    margin-bottom: 0.3rem;
  }

  &.close {
    div:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    div:nth-child(2) {
      transform: translateX(10px);
      opacity: 0;
    }
    div:nth-child(3) {
      transform: rotate(-45deg) translate(5px, 5px);
    }
  }
`;

export default ToogleBtn;
