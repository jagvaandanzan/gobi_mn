import React from "react";
import { data } from "../../constants/data";
import { Button, Text } from "../styles/Global.style";
import { StyledAbout } from "./About.style";

export default function About() {
  return (
    <StyledAbout>
      <img src={data.aboutImg} alt="bg" />
      <div>
        <Text font="Lato" weight="500" size="34px" color="#1f1f1f">
          ABOUT US
        </Text>
        <Text font="Lato" size="16px" color="#1f1f1f">
          {data.aboutUs}
        </Text>
        <Button bgColor="#272727" w="170px" r="10px" color="white" h="56px" size="18px">
          READ MORE
        </Button>
      </div>
    </StyledAbout>
  );
}
