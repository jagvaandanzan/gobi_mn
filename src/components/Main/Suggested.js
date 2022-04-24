import React from "react";
import { data } from "../../constants/data";
import { Button, Text } from "../styles/Global.style";
import { Circle, StyledItemContainer, SuggestedItems } from "./Suggested.style";

export default function Suggested() {
  return (
    <StyledItemContainer>
      <Text className="topic" font="Lato" color="#4f5255" size="36px" weight="900">
        TO GET and TO GIFT
      </Text>
      {data.suggestedItems.map((item, index) => (
        <SuggestedItems key={index}>
          <img src={item.picture} alt="img" />
          <Text font="Lato" color="#212121">
            {item.name}
          </Text>
          <Text font="Lato" color="#212121">
            +{item.colors.length} colors
          </Text>
          <ul>
            {item.colors.map((color, i) => (
              <li key={i}>
                <Button bgColor="transparent">
                  <Circle color={color}></Circle>
                </Button>
              </li>
            ))}
          </ul>
          <div className="price">
            <Text font="Lato" weight="700" color="#212121">
              ${item.price}
            </Text>
            {item.discountedPrice && (
              <Text font="Lato" weight="700" color="#B00020">
                ${item.discountedPrice}
              </Text>
            )}
          </div>
        </SuggestedItems>
      ))}
    </StyledItemContainer>
  );
}
