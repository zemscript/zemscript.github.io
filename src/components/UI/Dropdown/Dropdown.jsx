// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: var(--colorMain);
  color: white;
  padding: 0.75rem;
  font-size: 1.4rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 40rem;
  box-shadow: 0rem 0.8rem 1.6rem 0rem rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropdownItem = styled.a`
  color: black;
  padding: 1.2rem 1.6rem;
  text-decoration: none;
  display: block;
  font-size: 1.4rem;
`;

function Dropdown({ children, buttonText }) {
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setShowMenu(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleMenu}>{buttonText}</DropdownButton>
      <DropdownContent show={showMenu}>{children}</DropdownContent>
    </DropdownContainer>
  );
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Dropdown;
