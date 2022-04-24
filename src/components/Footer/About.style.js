import styled from "styled-components";

export const StyledAbout = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f5f7f6;
  img {
    object-fit: contain;
    width: 60%;
    height: 100%;
    margin-top: 5px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 50px;
    * + * {
      margin-top: 50px;
    }
  }

  @media (max-width: 1023px) {
    flex-direction: column;
    img {
      width: 100%;
    }
    div {
      align-items: center;
      margin: 50px 10px;
      text-align: center;
    }
    button {
      font-size: 14px;
    }
  }
`;
