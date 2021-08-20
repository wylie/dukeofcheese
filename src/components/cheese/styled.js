import styled, { css } from "styled-components";

export const BigCheese = styled.img`
  width: 100%;
  ${props =>
    props.position === "top" &&
      css`
        margin: -350px 0 0;
    `};
  ${props =>
    props.position === "bottom" &&
      css`
        transform: rotate(180deg);
        margin-top: 20px;
    `};
`;
