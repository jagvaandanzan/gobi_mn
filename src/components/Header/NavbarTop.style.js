import styled from "styled-components";

export const StyledNavbarTop = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  div,
  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.fontColor.white};
  }

  * + * {
    margin-left: 15px;
  }

  .nav-middle {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    height: 41px;
    .nav-middle {
      display: flex;
    }
  }
`;

export const StyledBackground = styled.div`
  background-color: ${(props) => props.theme.colors.bgColor.secondary};
`;
