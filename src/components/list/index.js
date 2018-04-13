import React from 'react';
import cn from "classnames";

import './_index.css';

const List = ({ data }) => {
  console.log(data); // eslint-disable-line
  const outputClassName = cn('List');
  return (
    <ul className={outputClassName}>
      {!data
      ?
        <li>
          <a href="mailto:wylie@dukeofcheese.com">
            wylie@dukeofcheese.com
          </a>
        </li>
      :
        data.map((item, index) => (
          <li key={index}>
            <a href={item.url} target="_blank">
              {item.text}
            </a>
          </li>
        ))
      }
    </ul>
  );
}

List.displayName = "List";

export default List;
