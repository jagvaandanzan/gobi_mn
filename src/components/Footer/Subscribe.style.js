import styled from "styled-components";

export const StyledSubscribe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;

  div {
    display: flex;
    align-items: center;
  }
  button {
    margin: 0;
    position: relative;
    right: 15px;
  }

  * + * {
    margin-top: 20px;
  }

  @media (max-width: 1023px) {
    input {
      width: 50vw;
    }
  }
`;
