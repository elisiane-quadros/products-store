import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme.blue500};
  color: ${props => props.theme.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 2rem;

  .title {
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;
  }
  .title h1 {
    font-size: 2.5rem;
    font-weight: 600;
  }
  .title span {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    font-weight: 300;
  }
  .cartCount {
    background: ${props => props.theme.white};
    display: flex;
    justify-content: space-evenly;
    align-items:center;
    height: 45px;
    width: 90px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background: ${props => props.theme.gray100};
      transition: 0.5s;
    }
  }
  .cartCount span {
    color: ${props => props.theme.black};
    font-size: 1.125rem;
    font-weight: bold;
  }
`