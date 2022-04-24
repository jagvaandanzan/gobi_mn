import styled from "styled-components";
import backgroundImg from "../../assets/images/IMG_0668.png";

export const NavbarMenu = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 820px;
  align-items: baseline;
  padding: 20px 0 0 0;
`;

export const NavbarBg = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;

  @media (max-width: 767px) {
    background-position: 30%;
    background-size: cover;
  }

  @media (min-width: 1440px) {
    background-size: cover;
  }
`;

export const NavLeft = styled.div`
  display: none;
  height: 44px;
  align-items: center;
  button + button {
    margin-left: 30px;
  }
  button {
    &:focus {
      border-bottom: 2px solid #f68a90;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const NavMiddle = styled.div`
  div {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  img + img {
    margin-top: 5px;
  }

  @media (max-width: 1023px) {
    img {
      transform: scale(0.8);
      transform: translateY(-8px);
    }
    img + img {
      margin-top: 3px;
    }
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  color: ${(props) => props.theme.colors.fontColor.white};
  * + * {
    margin-left: 30px;
  }

  .nav-input {
    display: none;
    position: relative;
    align-items: center;
  }

  #nav-close {
    position: absolute;
    right: 5%;
  }

  @media (min-width: 1024px) {
    .nav-input {
      display: flex;
    }
  }
`;

export const NavMobile = styled.div`
  display: flex;
  align-items: center;
  button {
    padding: 0;
  }
  button + button {
    margin-left: 20px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
