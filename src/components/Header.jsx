import React from "react";
import statsImg from "../imgs/stats.jpg";
import Button from "@mui/joy/Button";

const Header = () => {
  return (
    <>
      <header id="home" className="header">
        <div className="overlay"></div>
        <div className="content-wrapper">
          <div className="header-content container">
            <h1 className="header-title">
              Learn Languages Effortlessly with Lingu AI
            </h1>
            <p className="header-subtitle">
              Our AI-powered language learning app adapts to your needs,
              providing personalized lessons and conversational practice to help
              you become fluent faster.
            </p>
            <Button>Join the Waitlist!</Button>
          </div>
          <div className="image-container">
            <img className="stat-img" src={statsImg} alt="" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
