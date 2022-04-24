import styled from "styled-components";

export const StyledItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  position: relative;
  left: 50%;
  transform: translate(-50%, 5%);
  .topic {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -200%);
  }

  @media (max-width: 1023px) {
    width: 95%;
    .topic {
      font-size: 36px;
      white-space: nowrap;
    }
  }
  @media (max-width: 767px) {
    width: 95%;
    .topic {
      font-size: 22px;
      white-space: nowrap;
    }
  }
`;
export const SuggestedItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 23%;
  .price {
    display: flex;
    margin-bottom: 30px;
    p {
      margin-right: 30px;
    }
    > {
      &:first-child {
        text-decoration: line-through;
      }
      &:only-child {
        text-decoration: none;
      }
    }
  }
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    li + li {
      margin-left: 10px;
    }
  }
  @media (max-width: 767px) {
    width: 48%;
  }
`;

export const Circle = styled.span`
  height: 15px;
  width: 15px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;

  &:hover {
    border: 1px solid black;
  }
`;
