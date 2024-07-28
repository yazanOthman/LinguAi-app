import React, { useState } from "react";
import lingoAI_chatbox from "../imgs/lingoAI_chatbox.png";
import Button from "@mui/joy/Button";
import Modal from "../components/Modal";

import styled from "styled-components";

const StyledHeader = styled.header`
  & .content-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    z-index: 10;

    &.img-container {
      position: relative;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 40px;
    }
  }
`;

const StyledImage = styled.img`
  height: auto;
  width: 90%;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      <StyledHeader id="home" className="header">
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
            <Button onClick={() => setModalOpen(true)}>
              Join the Waitlist!
            </Button>
          </div>
          <div className="img-container">
            <StyledImage
              height="150px"
              width={"150px"}
              className="stat-img"
              src={lingoAI_chatbox}
              alt=""
            />
          </div>
        </div>
        <div className="overlay"></div>
      </StyledHeader>
      {isModalOpen && <Modal onClose={handleClose} />}
    </>
  );
};

export default Header;
