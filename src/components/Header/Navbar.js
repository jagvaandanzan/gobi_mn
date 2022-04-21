import React from "react";
import { Container } from "../styles/Container.style";
import { NavbarMenu, NavbarBg, NavMiddle, NavRight } from "../styles/Navbar.style";
import { data } from "../../constants/data";
import { Button } from "../styles/Button.style";
import gobi from "../../assets/images/GOBI.svg";
import cashmere from "../../assets/images/cashmere for all.svg";

export default function Navbar() {
  return (
    <NavbarBg>
      <Container>
        <NavbarMenu>
          <div>
            {data.navbarButtons.map((item, index) => (
              <Button key={index} bgColor="transparent" color="white" size="13px">
                {item}
              </Button>
            ))}
          </div>
          <NavMiddle>
            <img src={gobi} />
            <img src={cashmere} />
          </NavMiddle>
          <NavRight>as</NavRight>
        </NavbarMenu>
      </Container>
    </NavbarBg>
  );
}
