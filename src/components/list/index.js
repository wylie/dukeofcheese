import React from 'react';

import { Anchor, Ul, Li } from "./styled.js";

const List = ({ data, type, email }) => {
  return (
    <Ul type={type}>
      {!data
      ?
        <Li>
          <Anchor href={`mailto:${email}`}>
            {email}
          </Anchor>
        </Li>
      :
        data.map((item, index) => (
          <Li key={index}>
            <Anchor href={item.url} rel="noopener noreferrer" target="_blank">
              {item.text}
            </Anchor>
          </Li>
        ))
      }
    </Ul>
  );
}

export default List;
