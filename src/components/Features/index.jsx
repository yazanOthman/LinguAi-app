import React from "react";
import FeatureItem from "./Feature";
import styled from "styled-components";

const FEATURES = [
  {
    title: "Automated Financial Analysis",
    description:
      "Let FinAI analyze your financial data and provide you with clear, actionable insights to optimize your spending and saving.",
  },
  {
    title: "Expense Categorization",
    description:
      "Our advanced NLP technology categorizes your expenses automatically, giving you a detailed breakdown of where your money goes.",
  },
  {
    title: "Predictive Budgeting",
    description:
      "Set realistic budgets with our predictive models that forecast your future expenses based on past trends.",
  },
  {
    title: "Savings Recommendations",
    description:
      "Receive AI-driven tips on how to save more effectively, tailored to your unique spending patterns.",
  },
  {
    title: "Chatbot Assistance",
    description:
      "Get instant answers to your financial questions and personalized support through our AI-powered chatbot.",
  },
  {
    title: "Personalized Financial Plans",
    description:
      "Achieve your financial goals with custom plans created just for you, based on your financial situation and objectives.",
  },
];

const StyledFeaturesList = styled.section`
  padding: 0 5rem;
`;

const Features = () => {
  return (
    <StyledFeaturesList id="features" className="features">
      <div className="container">
        <h2 className="section-title">
          Smart Features for Smarter Financial Decisions
        </h2>

        <div className="feature-list">
          {FEATURES.map((feature, index) => (
            <FeatureItem
              odd={index % 2}
              key={feature.title}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </StyledFeaturesList>
  );
};

export default Features;
