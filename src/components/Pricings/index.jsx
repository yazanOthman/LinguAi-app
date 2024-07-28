import React from "react";
import styled from "styled-components";
import PriceItems from "./PriceItems";
import {
  StyledSection,
  StyledSectionTitle,
  StyledSectionSubtitle,
} from "../shared";

const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Footnote = styled.p`
  text-align: center;
  color: #888;
  font-size: 12px;
  margin-top: 20px;
`;

const plans = [
  {
    planLabel: "Limited",
    planTitle: "Basic Plan",
    price: "free",
    features: [
      {
        label: "Basic chat",
        isDisabled: false,
      },
      {
        label: "10 minute daily limit",
        isDisabled: false,
      },
      {
        label: "Roleplay & modes",
        isDisabled: true,
      },
      {
        label: "Personalized learning",
        isDisabled: true,
      },
      {
        label: "Advanced voices",
        isDisabled: true,
      },
      {
        label: "Ads free",
        isDisabled: true,
      },
    ],
    buttonLabel: "Basic Plan",
    showDiscount: false,
  },
  {
    planLabel: "14 Days Free",
    planTitle: "Premium 1 Month",
    price: "$11.99 / month",
    features: [
      {
        label: "Unlimited practice",
        isDisabled: false,
      },
      {
        label: "Roleplay & modes",
        isDisabled: false,
      },
      {
        label: "Personalized learning",
        isDisabled: false,
      },
      {
        label: "Advanced voices",
        isDisabled: false,
      },
      {
        label: "Ads free",
        isDisabled: false,
      },
    ],
    buttonLabel: "Free trial",
    showDiscount: false,
  },
  {
    planLabel: "14 Days Free",
    planTitle: "Premium 12 Month",
    price: "$5.99 / month",
    features: [
      {
        label: "Unlimited practice",
        isDisabled: false,
      },
      {
        label: "Roleplay & modes",
        isDisabled: false,
      },
      {
        label: "Personalized learning",
        isDisabled: false,
      },
      {
        label: "Advanced voices",
        isDisabled: false,
      },
      {
        label: "Ads free",
        isDisabled: false,
      },
    ],
    buttonLabel: "Free trial",
    showDiscount: true,
  },
];

const PricingPlans = () => {
  return (
    <StyledSection>
      <StyledSectionTitle>CHOOSE THE RIGHT PLAN FOR YOU</StyledSectionTitle>
      <StyledSectionSubtitle>START YOUR FREE TRIAL TODAY</StyledSectionSubtitle>
      <PricingContainer>
        {plans.map((plan) => {
          return <PriceItems key={plan.planTitle} plan={plan} />;
        })}
      </PricingContainer>
      <Footnote>
        *Prices & currencies may vary depending on your location
      </Footnote>
    </StyledSection>
  );
};

export default PricingPlans;
