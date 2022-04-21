import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => props.w};
  height: ${(props) => props.h || "24px"};
  border-radius: ${(props) => props.r};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  font-size: ${(props) => props.color || "12px"};
  border: 0;
  justify-content: center;
  font-family: "Roboto";
  &:hover {
    cursor: pointer;
  }
`;
