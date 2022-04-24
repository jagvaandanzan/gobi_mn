import React from "react";
import { Button, Container, Input, Text } from "../styles/Global.style";
import { StyledSubscribe } from "./Subscribe.style";

export default function Subscribe() {
  return (
    <Container>
      <StyledSubscribe>
        <Text font="Lato" weight="800" size="36px" color="#4f5255">
          Subscribe
        </Text>
        <Text font="Lato" color="#4f5255">
          Sign up for emails and receive early access to new arrivals, sales, events + more.
        </Text>
        <div>
          <Input w="640px" h="46px" bgColor="#F5F7F6" placeholder="Enter your email address" color="#4F5255" />
          <Button bgColor="#272727" w="158px" r="10px" color="white" h="50px" size="14px">
            SUBMIT
          </Button>
        </div>
        <Text font="Lato" size="10px" color="#4f5255">
          By signing up, you will receive Gobi Cashmere offers, promotions and other commercial messages. You are also agreeing to Gobi Cashmere's
          Privacy Policy. You may unsubscribe at any time.
        </Text>
      </StyledSubscribe>
    </Container>
  );
}
