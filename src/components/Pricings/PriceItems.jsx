import React from "react";
import styled from "styled-components";

const PlanCard = styled.div`
  background-color: #1a1a1a;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 20px;
  width: 100%;
  position: relative;
  transition: transform 0.3s ease;
  @media (min-width: 1024px) {
    width: calc(33.333% - 20px);
  }
  &:hover {
    transform: scale(1.1); /* Scale up by 10% */
  }
`;

const PlanLabel = styled.p`
  color: #888;
  font-size: 14px;
  margin-bottom: 10px;
`;

const PlanTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 20px;
  color: #3f51b5;
  margin-bottom: 20px;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
`;

const Feature = styled.li`
  margin-bottom: 10px;
  color: ${(props) => (props.disabled ? "#555" : "#fff")};
  text-decoration: ${(props) => (props.disabled ? "line-through" : "none")};
  &::before {
    content: ${(props) => (props.disabled ? '"✕"' : '"✓"')};
    margin-right: 10px;
    color: ${(props) => (props.disabled ? "#555" : "#4CAF50")};
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${(props) => (props.primary ? "#3f51b5" : "transparent")};
  color: #fff;
  border: 2px solid #3f51b5;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.primary ? "#303f9f" : "rgba(63, 81, 181, 0.1)"};
  }
`;

const DiscountBadge = styled.span`
  background-color: #ff4081;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const PriceItems = ({ plan }) => {
  return (
    <PlanCard>
      {plan.showDiscount && <DiscountBadge>-50%</DiscountBadge>}
      <PlanLabel>{plan.planLabel}</PlanLabel>
      <PlanTitle>{plan.planTitle}</PlanTitle>
      <Price>{plan.price}</Price>
      <FeatureList>
        {plan.features.map((feature) => {
          return (
            <>
              <Feature disabled={feature.isDisabled}>{feature.label}</Feature>
            </>
          );
        })}
      </FeatureList>
      <Button>{plan.buttonLabel}</Button>
    </PlanCard>
  );
};

export default PriceItems;
