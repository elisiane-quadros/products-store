import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25rem 1.25rem 1.25rem 0;
  width: 390px;
  height: 95px;
  border-radius: 8px;
  background: ${props => props.theme.white};
  margin-right: 12px;

  @media (max-width: 599px) {
    width: 250px;
    height: 220px;
    padding: 0 1.25rem 1rem 0;
  }

  & button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
    line-height: 1;
    position: relative;
    top: -45px;
    left: 380px;
    cursor: pointer;

    @media (max-width: 599px) {
      top: -80px;
      left: 220px;
      background: ${props => props.theme.white};
      color: ${props => props.theme.black};
      font-size: 1.75rem;
      font-weight: 400;
    }
  }

  .gridContainer {
    display: flex;
    align-items: center;
    @media (max-width: 599px) {
      
    }
  }
  .imageContainer {
    @media (max-width: 599px) {
      display: flex;
      justify-content: center;
      padding-top: 20px;
    }
  }
  .imageProduct {
    @media (max-width: 599px) {
      width: 90px !important;
      height: 90px !important;
    }
  }
  .nameContainer {
    @media (max-width: 599px) {
      height: 40px;
      padding-top: 0;
      display: flex;
      align-items: flex-end;
    }
  }
  .qtdContainer {
    @media (max-width: 599px) {
      padding-top: 10px;
    }
  }
  .qtdText {
    font-size: 0.5rem;
    margin-bottom: 0.375rem;
  }
  .priceContainer {
    color: ${props => props.theme.black};
    font-weight: 700;
    font-size: 0.875rem;
    @media (max-width: 599px) {
      padding-top: 10px;
      display: flex;
      justify-content: flex-end;
    }
  }
  .productPrice {
    background: ${props => props.theme.gray600};
    border-radius: 5px;
    padding: 0.25rem 0.375rem;
    font-weight: 700;
    font-size: 0.875rem;
    height: 1.625rem;
    color: ${props => props.theme.white};
  }
`;

export const CountBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 24px;
  width: 62px;
  border: 1px solid ${props => props.theme.gray500};
  border-radius: 4px;
  color: ${props => props.theme.black};
  margin-bottom: 0.875rem;

  @media (max-width: 599px) {
    height: 32px;
    width: 102px;
  }

  .lessBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 100%;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 400;
    padding-bottom: 0.125rem;

    @media (max-width: 599px) {
      font-size: 1.25rem;
      padding-left: 4px;
    }
  }
  .qtdBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 100%;
    font-size: 0.75rem;
    font-weight: 400;

    @media (max-width: 599px) {
      font-size: 1rem;
    }
  }
  .plusBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 100%;
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: 400;

    @media (max-width: 599px) {
      font-size: 1rem;
    }
  }
  .divider {
    width: 1px;
    height: 16px;
    background: ${props => props.theme.gray500};;
  }
`;
