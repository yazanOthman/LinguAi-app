import styled from "styled-components";

const mdScreenSize = "765px";

const StyledFeatureItem = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: ${mdScreenSize}) {
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
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
