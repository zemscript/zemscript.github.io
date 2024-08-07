// eslint-disable-next-line no-unused-vars
import React from "react";
import { Hdr, Nav, NavList, ListItem, ItemLink } from "./HeaderStyle";

function Header() {
  return (
    <Hdr>
      <Nav>
        <NavList>
          <ListItem>
            <ItemLink href="/">Главная</ItemLink>
          </ListItem>
        </NavList>
      </Nav>
    </Hdr>
  );
}

export default Header;
