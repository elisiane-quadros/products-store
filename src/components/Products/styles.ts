import styled from "styled-components";

export const ProductsContainer = styled.div`
background: ${props => props.theme.gray100};
display: flex;
justify-content: center;
align-items: center;
margin: 88px 0 64px 0;

.productsListContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 944px;
  gap: 1.5rem;
}

.notFoundProducts {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.gray700};
}
`;
