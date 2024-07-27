import React from "react";

const FAQ = () => {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h3>Is my financial data secure with FinAI?</h3>
            <p>Absolutely. We use bank-level encryption to ensure your data is always safe and secure.</p>
          </div>
          <div className="faq-item">
            <h3>How does FinAI provide personalized advice?</h3>
            <p>FinAI uses advanced AI and machine learning algorithms to analyze your financial data and offer tailored recommendations based on your spending habits and financial goals.</p>
          </div>
          <div className="faq-item">
            <h3>Can I use FinAI for free?</h3>
            <p>Yes! FinAI offers a free version with essential features. You can also upgrade to our premium plan for additional benefits.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
