import styled from "styled-components";

export const StyledSale = styled.div`
  position: absolute;
  top: 30%;
  right: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p + div {
    margin-top: 60px;
  }

  button {
    margin-top: 30px;
  }

  .sale {
    position: absolute;
    top: 15%;
    transform: rotate(-8.99deg);
  }

  @media (max-width: 1023px) {
    top: 10%;
    right: 5%;
    transform: scale(0.7);
  }

  @media (max-width: 767px) {
    position: relative;
    width: 90%;
    height: 400px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(238, 243, 255, 0.8) 100%);
    backdrop-filter: blur(50px);
    border-radius: 9px;

    button {
      color: white;
      background-color: #272727;
      transform: scale(0.8);
      margin: 0;
    }

    .sale {
      font-size: 70px;
      top: 10%;
    }
    > {
      &:first-child {
        color: black;
        font-size: 50px;
      }
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .align {
    position: relative;
    top: 20px;
  }

  > {
    &:last-child {
      position: relative;
      top: 35px;
    }
    &:first-child {
      margin-right: 20px;
    }
  }

  @media (max-width: 767px) {
    transform: scale(0.7);
    p {
      color: black;
    }
  }
`;
