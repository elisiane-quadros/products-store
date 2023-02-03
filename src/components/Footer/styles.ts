import styled from "styled-components";

export const FooterArea = styled.footer`
  background: ${props => props.theme.gray200};
  color: ${props => props.theme.black};
  height: 34px;
  bottom: 0;
  position: fixed;
  width: 100%;
  text-align: center;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
