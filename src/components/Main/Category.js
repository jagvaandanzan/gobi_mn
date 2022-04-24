import React from "react";
import { Container, Button, Text } from "../styles/Global.style";
import { StyledCategories, StyledImage } from "./Category.style";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Category({ pictures }) {
  return (
    <Container>
      <StyledCategories>
        <Text className="cat-name" font="Lato" size="50px" weight="900" color="black">
          {pictures.categoryName}
        </Text>
        {pictures.items.map((item, index) => (
          <StyledImage key={index}>
            <img src={item} alt="pic" />
            <Text size="30px">CARDIGANS</Text>
            <Button color="white" bgColor="transparent">
              <ArrowForwardIcon fontSize="large" />
            </Button>
          </StyledImage>
        ))}
      </StyledCategories>
    </Container>
  );
}
