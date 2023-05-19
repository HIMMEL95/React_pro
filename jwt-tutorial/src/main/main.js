import React, { useState } from "react";
import logo from "./MZC.png";
import "./main.css";
import {
  faMagnifyingGlass,
  faBars,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Main = () => {
  const [show, setShow] = useState(false);
  const sideShow = () => setShow(!show);
  return (
    <div
      className="template"
      style={
        show
          ? { gridTemplateColumns: "0 100%" }
          : { gridTemplateColumns: "18% 82%" }
      }
    >
      <div
        className="sidebar"
        style={show ? { display: "none" } : { display: "" }}
      >
        <div className="sideHeader">
          <img className="logo" src={logo} alt="logo"></img>
          <br />
          <span>님, 반갑습니다</span>
        </div>
        <div className="sideMain"></div>
        <div className="sideFooter">
          <img className="logo" src={logo} alt="logo"></img>
          <br />
          <span>Copyright 2018 © MEGAZONE CLOUD Corp. All Right Reserved.</span>
        </div>
      </div>
      <div className="header">
        <nav className="navBar">
          <button className="sideBtn">
            <FontAwesomeIcon icon={faBars} onClick={() => sideShow()} />
          </button>
          <div>
            <select className="selectInput">
              <option defaultValue>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <input className="searchInput" type="search" placeholder="Search" />
            <button className="searchBtn">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <div>
            <Link to="/login" className="loginBtn">
              <FontAwesomeIcon icon={faRightToBracket} className="loginBtn" />
              Login
            </Link>
          </div>
        </nav>
      </div>
      <div className="main"></div>
    </div>
  );
};

export default Main;
