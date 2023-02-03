import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 486px;
  height: calc(100vh - 97px);
  padding: 2.5rem 3rem;
  background: ${props => props.theme.blue500};

  @media (max-width: 599px) {
    width: 330px;
    padding: 1.5rem;
  }

  .headerContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: ${props => props.theme.white};
    font-weight: 700;

    & button {
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${props => props.theme.black};
      color: ${props => props.theme.white};
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 0;
    }
  }
  .totalContainer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: ${props => props.theme.white};
    font-weight: 700;
    font-size: 1.75rem;
  }
  .cartItemContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    gap: 1.5rem;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    overflow-y: auto;

    @media (max-width: 599px) {
      gap: 0.625rem;
    }
  }
`;

export const ButtonFinished = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
  font-weight: 700;
  font-size: 1.75rem;
  width: 100%;
  height: 97px;
  cursor: pointer;
`;
