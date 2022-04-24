import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 50px;
  height: 350px;
  background: linear-gradient(0deg, #f5f7f6, #f5f7f6), #ffffff;

  @media (max-width: 1023px) {
    .followUs {
      display: none;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    flex-wrap: nowrap;

    .copyright {
      margin-top: 250px;
    }
  }
`;

export const StyledFooter = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  height: 80%;
  img {
    position: absolute;
    left: 5%;
    transform: translateY(800%);
  }
  p {
    margin: 30px 0;
  }

  @media (max-width: 1023px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    height: 100%;
    width: 100%;

    flex-direction: column;
    margin: 50px 0;
    img {
      display: none;
    }
  }
`;

export const StyledLinks = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: #5f5f5f;
    font-size: 14px;
    text-decoration: none;
  }

  a + a {
    margin-top: 5px;
  }

  @media (max-width: 767px) {
    width: 200px;
    position: relative;
    left: 30px;
    top: 150px;
  }
`;

export const FollowUs = styled.div`
  display: flex;
  height: 80%;
  margin-left: 40px;
  flex-direction: column;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    p {
      margin-right: 5px;
    }
  }
`;
