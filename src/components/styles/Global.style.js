import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: #fff;
        font-family: 'Roboto',  sans-serif;
        margin: 0
    }
`;

export const Button = styled.button`
  width: ${(props) => props.w};
  height: ${(props) => props.h || "24px"};
  border-radius: ${(props) => props.r};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size || "12px"};
  font-family: ${(props) => props.font || "Roboto"};
  font-weight: ${(props) => props.fw || "400"};
  border: 0;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: ${(props) => props.w || "250px"};
  height: ${(props) => props.h || "44px"};
  border-radius: ${(props) => props.r || "8px"};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  font-size: ${(props) => props.color || "12px"};
  border: 0;
  justify-content: center;
  font-family: "Roboto";
  padding-left: 15px;

  ::placeholder {
    color: ${(props) => props.color || props.theme.colors.fontColor.black};
  }
`;

export const Text = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap");
  margin: 0;
  color: ${({ color }) => color || "white"};
  font-family: ${({ font }) => font || "Roboto"};
  font-size: ${({ size }) => size || "12px"};
  font-weight: ${({ weight }) => weight};
  font-style: normal;
  justify-self: flex-end;
`;

export const Container = styled.div`
  width: calc(100% - 5%);
  max-width: 100%;
  margin: 0 auto;
`;
