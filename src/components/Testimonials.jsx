import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Users Are Saying</h2>
        <div className="testimonials-list">
          <div className="testimonial-item">
            <p>"FinAI has revolutionized the way I manage my money. The personalized insights are spot on!"</p>
            <h4>Sarah M., Freelance Designer</h4>
          </div>
          <div className="testimonial-item">
            <p>"The predictive budgeting feature has helped me save more every month. I highly recommend FinAI!"</p>
            <h4>John D., Marketing Specialist</h4>
          </div>
          <div className="testimonial-item">
            <p>"Having a personal finance coach in my pocket is a game-changer. FinAI's chatbot is super helpful!"</p>
            <h4>Emma R., Software Engineer</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
