import React from "react";
import statsImg from "../imgs/stats.jpg";

const Header = () => {
  return (
    <>
      <header id="home" className="header">
        <div className="overlay"></div>
        <div className="content-wrapper">
          <div className="header-content container">
            <h1 className="header-title">
              Simplify Your Financial Life, Today!
            </h1>
            <p className="header-subtitle">
              Manage your finances effortlessly with our intuitive platform.
              Track your balance, monitor income, and control your expenses all
              in one place.
            </p>
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
