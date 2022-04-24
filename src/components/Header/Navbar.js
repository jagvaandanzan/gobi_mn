import React from "react";
import { Container, Button, Input } from "../styles/Global.style";
import { NavbarMenu, NavbarBg, NavLeft, NavMiddle, NavRight, NavMobile } from "./Navbar.style";
import { data } from "../../constants/data";
import gobi from "../../assets/images/GOBI.svg";
import cashmere from "../../assets/images/cashmere for all.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Sale from "./Sale";

export default function Navbar() {
  return (
    <>
      <NavbarBg>
        <Container>
          <NavbarMenu>
            <NavMobile>
              <Button bgColor="transparent" color="white">
                <MenuIcon />
              </Button>
              <Button bgColor="transparent" color="white">
                <SearchIcon />
              </Button>
            </NavMobile>
            <NavLeft>
              {data.navbarButtons.map((item, index) => (
                <Button key={index} bgColor="transparent" color="white" size="13px">
                  {item}
                </Button>
              ))}
            </NavLeft>
            <NavMiddle>
              <div>
                <img src={gobi} alt="img1" />
                <img src={cashmere} alt="img2" />
              </div>
            </NavMiddle>
            <NavRight>
              <div class="nav-input">
                <Input placeholder="Search" type="text" />
                <Button id="nav-close" bgColor="transparent">
                  <CloseIcon fontSize="small" />
                </Button>
              </div>
              <Button bgColor="transparent" color="white" w="30px">
                <FavoriteBorderIcon />
              </Button>
              <Button bgColor="transparent" color="white" w="30px">
                <ShoppingBagIcon />
              </Button>
            </NavRight>
          </NavbarMenu>
        </Container>
      </NavbarBg>
      <Sale />
    </>
  );
}
