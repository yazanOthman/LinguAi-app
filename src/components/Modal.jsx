import React, { useState, useEffect } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; // Ensure it's on top of other content
`;

const ModalContainer = styled.div`
  background-color: white;
  width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #333;
  }
`;

const SaveButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#ccc" : "#111")};
  color: white;
  padding: 10px 0;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#333")};
  }
`;

const ContactModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const isNameValid = name.trim().length > 0;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isFormValid = isNameValid && isEmailValid;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormValid) {
      const credentials = {
        service_id: process.env.REACT_APP_SERVICE_ID,
        template_id: process.env.REACT_APP_TEMPLATE_ID,
        user_id: process.env.REACT_APP_PUBLIC_KEY,
      };

      const payload = {
        from_name: name,
        from_email: email,
        to_name: "LinguAI",
      };

      console.log(credentials, payload);

      try {
        const response = await emailjs.send(
          credentials.service_id,
          credentials.template_id,
          payload,
          credentials.user_id
        );
        console.log(response);
        if (response) {
          toast.success("Your email has been sent successfully!");
          setName("");
          setEmail("");
        }
      } catch (error) {
        console.log(error);

        toast.error("failed to send email, please try again later");
      }
      onClose();
    }
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <ModalHeader>
          <Title>Join our wait list</Title>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <SaveButton type="submit" disabled={!isFormValid}>
            Save Changes
          </SaveButton>
        </Form>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ContactModal;
