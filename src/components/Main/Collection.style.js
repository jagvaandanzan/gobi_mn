import styled from "styled-components";

export const StyledCollection = styled.div`
  display: flex;
  height: 580px;
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    background: linear-gradient(0deg, #f7f8fb, #f7f8fb), #fdf4ed;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  * + * {
    margin-top: 30px;
  }

  @media (max-width: 767px) {
    width: 100%;
    align-items: center;
    text-align: center;
    * {
      margin-top: 30px;
      &:first-child {
        font-size: 30px;
        width: 300px;
      }
    }
    p {
      font-size: 12px;
      width: 200px;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  width: 50%;

  > {
    &:first-child {
      object-fit: cover;
      object-position: 30%;
      width: 59%;
      height: 100%;
    }
  }

  img {
    object-fit: cover;
    object-position: top;
    width: 39%;
    height: 49%;
    margin-top: 5px;
  }

  @media (max-width: 1023px) {
    height: 80%;
    img {
      object-fit: cover;
      height: 50%;
      margin: 0;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 60%;
    img {
      object-fit: cover;
      height: 50%;
      margin: 0;
    }
  }
`;
