import React from "react";
import styled from "styled-components";
import Blog from "../components/Blog";
import Intro from "../components/Intro";
import Toptitle from "../components/Toptitle";
import img1 from "../assets/article1.png";
import img2 from "../assets/article2.png";
import img3 from "../assets/article3.png";
import Button from "../components/Button";

const BlogArticleWrapper = styled.section`
  padding: 2rem var(--padding);
  display: flex;
  justify-content: space-between;
  > div {
    width: 48%;
  }
`;

function BlogArticles() {
  return (
    <BlogArticleWrapper>
      <div>
        <Blog
          img={img1}
          title="Building a Workout routine"
          article="A workout should be developed around person's age, goals"
          author="Larry Smith"
        />
        <Blog
          img={img2}
          title="Top 5 Hotel Spa In Italy"
          article="A workout should be developed around person's age, goals"
          author="Larry Smith"
        />
        <Blog
          img={img3}
          title="Building a Workout routine"
          article="A workout should be developed around person's age, goals"
          author="Larry Smith"
        />
      </div>

      <div>
        <Toptitle>Recent News and Articles</Toptitle>
        <Intro
          main="Browse Through our Blogs and Announcements."
          sub="Browse through our blogs and announcements for timely and inspiational stories and news from us."
        />
        <Button title="Visit Blog" />
      </div>
    </BlogArticleWrapper>
  );
}

export default BlogArticles;
