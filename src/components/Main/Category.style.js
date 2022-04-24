import styled from "styled-components";

export const StyledCategories = styled.div`
  display: flex;
  position: relative;
  margin: 100px 0 200px 0;
  .cat-name {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1;
  }
  div + div {
    margin-left: 5px;
  }

  > {
    &:nth-child(3) {
      position: relative;
      top: 110px;
    }
  }

  @media (max-width: 767px) {
    margin: 60px 0;
    > {
      .cat-name {
        font-size: 22px;
        top: -15%;
      }
      &:nth-child(3) {
        position: relative;
        top: 0px;
      }
      &:nth-child(4) {
        display: none;
      }
    }
  }
`;

export const StyledImage = styled.div`
  display: flex;
  position: relative;
  img {
    width: 100%;
  }

  p {
    position: absolute;
    bottom: 0;
    margin: 25px;
  }

  button {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0 25px 40px 0;
  }

  @media (max-width: 767px) {
    p {
      font-size: 14px;
      margin: 5px;
    }
    button {
      margin: 5px 0 10px 0;
    }
  }
`;
