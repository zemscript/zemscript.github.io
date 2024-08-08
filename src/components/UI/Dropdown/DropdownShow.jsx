// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import Dropdown, { DropdownItem } from "./Dropdown";
import { ListItem, ListHref } from "../../../pages/MyProjects/ProjectsStyle";

function DropdownShow({ items }) {
  return (
    <div>
      {items.map((item) => (
        <ListItem key={item.key}>
          <Dropdown buttonText={item.title}>
            <DropdownItem>{item.text}</DropdownItem>
            <DropdownItem>
              <ListHref href={item.href}>Перейти</ListHref>
            </DropdownItem>
          </Dropdown>
        </ListItem>
      ))}
    </div>
  );
}

DropdownShow.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      href: PropTypes.string,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default DropdownShow;
