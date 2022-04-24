import React from "react";
import { data } from "../../constants/data";
import { Container, Text, Button } from "../styles/Global.style";
import { FollowUs, FooterContainer, StyledFooter, StyledLinks } from "./Footer.style";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";

export default function Footer() {
  return (
    <FooterContainer>
      <StyledFooter>
        {data.footerLinks.map((item, index) => (
          <StyledLinks key={index}>
            <Text size="14px" color="black">
              {item.header}
            </Text>
            {item.links.map((link, i) => (
              <a href="*" key={i}>
                {link}
              </a>
            ))}
          </StyledLinks>
        ))}
        <img src={data.payments} alt="img" />
      </StyledFooter>

      <FollowUs className="followUs">
        <Text size="14px" color="black">
          FOLLOW US
        </Text>
        <Button bgColor="transparent" w="fit-content">
          <FacebookIcon />
        </Button>
        <Button bgColor="transparent" w="fit-content">
          <InstagramIcon />
        </Button>
        <Button bgColor="transparent" w="fit-content">
          <TwitterIcon />
        </Button>
        <Button bgColor="transparent" w="fit-content">
          <YouTubeIcon />
        </Button>
        <div>
          <Text color="#5F5F5F">Global - English</Text>
          <LanguageIcon />
        </div>
      </FollowUs>
      <Container>
        <Text className="copyright" color="#575F61">
          All content Copyright © 2020 GOBI Cashmere
        </Text>
      </Container>
    </FooterContainer>
  );
}
