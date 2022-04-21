import styled from "styled-components";

export const Text = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap");

  color: ${({ color }) => color};
  font-family: ${({ font }) => font};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
`;
