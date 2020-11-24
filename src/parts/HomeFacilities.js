import React from "react";
import styled from "styled-components";
import ImageTypeTwo from "../components/ImageTypeTwo";
// import Img1 from "../assets/facilimg1.png";
// import Img2 from "../assets/facilimg2.png";
// import Img3 from "../assets/facilimg3.png";
import Toptitle from "../components/Toptitle";
import Intro from "../components/Intro";

const Wrap = styled.section`
  padding: var(--padding);
  display: flex;
  justify-content: space-between;

  > .write-up {
    width: 50%;
  }
`;

function HomeFacilities(props) {
  let first = props.img1;
  let second = props.img2;
  let third = props.img3;
  let fourth = props.title;
  let main = props.main;
  let sub = props.sub;
  let other = props.other;

  return (
    <Wrap>
      <div className="write-up">
        <Toptitle>{fourth}</Toptitle>
        <Intro main={main} sub={sub} other={other} />
      </div>
      <ImageTypeTwo img1={first} img2={second} img3={third} />
    </Wrap>
  );
}

export default HomeFacilities;
