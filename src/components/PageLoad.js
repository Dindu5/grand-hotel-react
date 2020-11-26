import styled, { css } from "styled-components";

const PageLoad = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 10;
  pointer-events: none;

  ${(props) =>
    props.contact &&
    css`
      > div {
        position: relative;
        padding-top: 0px;
        padding-left: 0px;
        padding-right: 0px;
        background-color: #e4cb58;
        width: 100%;
        height: 0%;
      }
    `}
  > div {
    position: relative;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    background-color: #12343b;
    width: 0%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .img {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    overflow: hidden;
    height: 7vw;
    width: 14vw;

    img {
      height: 7vw;
    }
  }
  .text {
    overflow: hidden;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }
  h1 {
    font-size: 5vw;
    opacity: 0;
    font-family: var(--title-font);
    color: var(--brown);
  }
`;

export default PageLoad;
