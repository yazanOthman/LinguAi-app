import React from "react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2 className="section-title">How FinAI Works</h2>
        <div className="steps">
          <div className="step-item">
            <h3>Step 1: Connect Your Accounts</h3>
            <p>Securely link your bank accounts and credit cards to FinAI for comprehensive financial tracking.</p>
          </div>
          <div className="step-item">
            <h3>Step 2: Analyze and Categorize</h3>
            <p>Our AI analyzes your transactions, categorizes your expenses, and identifies spending trends.</p>
          </div>
          <div className="step-item">
            <h3>Step 3: Get Personalized Insights</h3>
            <p>Receive tailored advice and recommendations to help you manage your finances better and reach your goals.</p>
          </div>
          <div className="step-item">
            <h3>Step 4: Chat with FinAI</h3>
            <p>Use our AI chatbot to get real-time financial advice and answers to your questions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
