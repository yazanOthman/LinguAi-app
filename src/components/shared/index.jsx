import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${(props) => props.bg || "#000"};
  color: ${(props) => props.color || "#fff"};
  padding: 40px 20px;
  font-family: Arial, sans-serif;
`;

export const StyledSectionTitle = styled.h1`
  text-align: center;
  font-size: 28px;
  margin-bottom: 10px;
`;

export const StyledSectionSubtitle = styled.p`
  text-align: center;
  color: ${(props) => props.color || "#fff"};
  font-size: 16px;
  margin-bottom: 40px;
`;
