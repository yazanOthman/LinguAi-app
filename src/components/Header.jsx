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
            Take Control of Your Finances with AI-Powered Insights!
            </h1>
            <p className="header-subtitle">
            Meet FinAI – Your Personal Finance Coach, Here to Help You Save More and Spend Smarter.
            </p>
            <button>Join the Waitlist!</button>
            {/* <p className="description">Discover the future of personal finance management. 
              FinAI analyzes your spending habits, predicts future expenses, 
              and offers personalized advice to help you achieve your financial goals.</p> */}
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
