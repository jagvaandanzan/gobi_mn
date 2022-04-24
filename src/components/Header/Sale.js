import React from "react";
import { theme } from "../../constants/theme";
import { Button, Text } from "../styles/Global.style";
import { StyledSale, Row } from "./Sale.style";
import { data } from "../../constants/data";

export default function Sale() {
  return (
    <StyledSale>
      <Text size="90px" font="Lato" weight="700">
        SUMMER
      </Text>
      <Text className="sale" font="Mr Dafoe" size="82px" color={theme.colors.fontColor.red2}>
        Sale
      </Text>
      <Row>
        <Text size="32px" font="Lato" weight="700">
          UPTO
        </Text>
        <Text size="135px" font="Lato" weight="700">
          {data.salePercent}
        </Text>
        <Text className="align" size="80px" font="Lato" weight="700">
          %
        </Text>
        <Text size="40px" font="Lato" weight="700">
          FF
        </Text>
      </Row>
      <Button bgColor="white" w="190px" h="54px" r="10px" size="18px" color="black">
        SHOP NOW
      </Button>
    </StyledSale>
  );
}
