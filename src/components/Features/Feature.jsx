import styled from "styled-components";

const StyledFeatureItem = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const FeatureItem = ({ feature, odd }) => {
  return (
    <StyledFeatureItem odd={odd} className="feature-item">
      <div>
        <h3>
          <span className="feature-icon"> {feature?.icon}</span>
          {feature.title}
        </h3>
        <p>{feature.description}</p>
      </div>
    </StyledFeatureItem>
  );
};

export default FeatureItem;
