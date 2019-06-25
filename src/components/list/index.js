import React from 'react';
import PropTypes from "prop-types";
import cn from "classnames";

import './_index.css';

const List = ({ data, type, email }) => {
  const outputClassName = cn('List', {
    [`List_${type}`]: type
  });
  return (
    <ul className={outputClassName}>
      {!data
      ?
        <li>
          <a href={`mailto:${email}`}>
            {email}
          </a>
        </li>
      :
        data.map((item, index) => (
          <li key={index}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.text}
            </a>
          </li>
        ))
      }
    </ul>
  );
}

List.displayName = "List";

List.propTypes = {
  type: PropTypes.oneOf(["email", "links"]),
  email: PropTypes.string
};

List.defaultProps = {
  email: ""
};


export default List;
