import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import { Container, Button, Text } from "../styles/Global.style";
import { StyledNavbarTop, StyledBackground } from "./NavbarTop.style";

export default function NavbarTop() {
  return (
    <StyledBackground>
      <Container>
        <StyledNavbarTop>
          <div>
            <LanguageIcon fontSize="small" />
            <Text size="12px">Global - English</Text>
          </div>
          <div className="nav-middle">
            <Text>RETURNING AN ORDER?</Text>
            <a href="*">Click for more info</a>
          </div>
          <div spacing="10px">
            <Button color="white" bgColor="transparent">
              SIGN IN
            </Button>
            <Button color="white" bgColor="transparent">
              SIGN UP
            </Button>
          </div>
        </StyledNavbarTop>
      </Container>
    </StyledBackground>
  );
}
