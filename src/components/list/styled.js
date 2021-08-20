import styled, { css } from "styled-components";

export const Ul = styled.ul`
  list-style-type: none;
  margin: 5px 0;
  padding: 0;

  ${props =>
    props.type === "email" &&
      css`
        padding-bottom: 5px;
        border-bottom: 1px solid rgba(255,255,255,.1);
    `};
`;

export const Li = styled.li``;

export const Anchor = styled.a`
  color: #999;
  text-decoration: none;
  line-height: 1.75;
  &:hover {
    color: #777;
  }
`;