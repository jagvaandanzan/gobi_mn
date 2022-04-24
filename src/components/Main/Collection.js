import React from "react";
import { data } from "../../constants/data";
import { Container, Button, Text } from "../styles/Global.style";
import { Column, ImageContainer, StyledCollection } from "./Collection.style";
import img1 from "../../assets/images/IMG_0668.png";
import img2 from "../../assets/images/8 49072.png";
import img3 from "../../assets/images/IMG_7915.png";

export default function Collection() {
  return (
    <Container>
      <StyledCollection>
        <Column>
          <Text size="46px" font="Lato" weight="700" color="black">
            {data.collectionName}
          </Text>
          <Text size="22px" color="#636363">
            {data.collectionDisc}
          </Text>
          <Button bgColor="#272727" r="10px" color="white" w="180px" h="56px" size="18px">
            SHOP NOW
          </Button>
        </Column>
        <ImageContainer>
          <img src={img1} alt="img1" />
          <img src={img2} alt="img2" />
          <img src={img3} alt="img3" />
        </ImageContainer>
      </StyledCollection>
    </Container>
  );
}
