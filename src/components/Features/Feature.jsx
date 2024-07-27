import styled from "styled-components";

const StyledFeatureItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ odd }) => odd && "flex-direction: row-reverse;"}
  margin-bottom: 2rem;
`;

const FeatureItem = ({ feature, odd }) => {
  return (
    <StyledFeatureItem odd={odd} className="feature-item">
      <div>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>

      <div>Image</div>
    </StyledFeatureItem>
  );
};

export default FeatureItem;
