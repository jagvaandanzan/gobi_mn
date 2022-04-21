import styled from "styled-components";
import backgroundImg from "../../assets/images/IMG_0668.png";

export const NavbarMenu = styled.div`
  display: flex;
  width: 100%;
  height: 820px;
  /* justify-content: space-between; */
  align-items: baseline;
  padding: 20px 0;
  button + button {
    margin-left: 30px;
  }

  button {
    &:focus {
      border-bottom: 2px solid #f68a90;
    }
  }
`;

export const NavbarBg = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
`;

export const NavMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-self: center;
  img + img {
    margin-top: 5px;
  }
`;

export const NavRight = styled.div`
  display: flex;
  justify-self: flex-end;
`;
