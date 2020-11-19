import React from "react"
import styled from "styled-components"
import logo from "../assets/logo.jpg"
import { NavLink } from "react-router-dom"
// import { device } from "../utilities/breakpoint";
import ToogleBtn from "./Toogle";

const NavWrapper = styled.div`
  position: sticky;
  top: 0;
  padding: 0.6rem var(--padding);
  display: flex;
  background: var(--white);
  z-index:4;

  .logo {
    width: fit-content;
    display: flex;
    align-items: center;
    img {
      width: 4rem;
    }
    h3 {
      font-family: var(--title-font);
      font-size: 1.3rem;
      margin-left: 0.5rem;
      color: var(--nav-blue);
    }
  }
  .nav {
    display: flex;
    margin-left: auto;
    align-items: center;

    a {
      margin-left: 3rem;
      font-size: var(--text-size);
      font-family: var(--text-font);
      font-weight: 700;
      text-decoration: none;
      color: var(--black);
      position: relative;
      padding: 0.5rem;

      &:before {
        content: "";
        position: absolute;
        z-index: -1;
        left: 51%;
        right: 51%;
        bottom: 0;
        background: var(--active-blue);
        border-radius: 3px;
        height: 2px;
        -webkit-transition-property: left, right;
        transition-property: left, right;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
      }
      &.selected:before {
        left: 0;
        right: 0;
      }

      &:hover:before,
      &.selected:before {
        left: 0;
        right: 0;
      }
    }
  }
`;

function Navigation() {
  return (
    <NavWrapper>
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Hotel Logo" />
        </NavLink>
        <h3>Grand Hotel Nova</h3>
      </div>
      <div className="nav">
        <NavLink activeClassName="selected" exact to="/">
          Home
        </NavLink>
        <NavLink activeClassName="selected" to="/rooms">
          Rooms
        </NavLink>
        <NavLink activeClassName="selected" to="/facilities">
          Facilities
        </NavLink>
        <NavLink activeClassName="selected" to="/contact">
          Contact{" "}
        </NavLink>
        <ToogleBtn>
          <div></div>
          <div></div>
          <div></div>
        </ToogleBtn>
      </div>
    </NavWrapper>
  );
}

export default Navigation;
