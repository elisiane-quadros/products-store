import styled from "styled-components";

export const ProductItemArea = styled.div`
  background: ${props => props.theme.white};
  width: 218px;
  height: 285px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .productContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    height: 100%;
  }
  .imageContainer {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .nameAndPriceContainer {
    display: flex;
    justify-content: space-between;
  }
  .productName {
    color: ${props => props.theme.gray700}
  }
  .productPrice {
    background: ${props => props.theme.gray600};
    border-radius: 5px;
    padding: 0.25rem 0.375rem;
    font-weight: 700;
    font-size: 0.875rem;
    height: 1.625rem;
  }
  .productDescription {
    font-size: 0.625rem;
    font-weight: 300;
    line-height: 1.2;
    color: ${props => props.theme.gray700};
    height: 1.625rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const BuyButton = styled.button`
  background: ${props => props.theme.blue500};
  color: ${props => props.theme.white};
  width: 100%;
  height: 2.3rem;
  border: none;
  border-radius: 0px 0px 8px 8px;
  font-size:0.875rem;
  font-weight:600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor:pointer;
  &:hover {
    background: ${props => props.theme.blue300};
  }
`;

export const InCartButton = styled.button`
  background: ${props => props.theme.gray500};
  color: ${props => props.theme.white};
  width: 100%;
  height: 2.3rem;
  border: none;
  border-radius: 0px 0px 8px 8px;
  font-size:0.875rem;
  font-weight:600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
