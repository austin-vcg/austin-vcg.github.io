import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import { color_theme, text_theme } from "../theme";

const Bar = styled.div`
  background-color: rgba(${color_theme.primary}, 0.5);
  display: flex;
  flex-direction: row;
  color: white;
  height: 8vh;
  align-items: stretch;
  padding: 10px 20px;
  transition: 0.5s;

  font-family: ${text_theme.header.font};

  @media screen and (max-width: 600px) {
    padding: 5px 10px;
  }
`;

const ItemList = styled.div`
  background: transparent;
  transition: 0.5s;
  align-self: right;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const ItemLink = styled(Link)`
  background: transparent;
  transition: 0.5s;
  align-self: right;
  margin-right: 10px;
  color: white;
  text-decoration: none;
  font-size: 20px;
  align-items: center;
  display: flex;
  padding: 0px 10px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  @media screen and (max-width: 600px) {
    font-size: 15px;
    padding: 0px 5px;
    margin-right: 3px;
  }
`;

const ItemGoTo = styled.div`
  background: transparent;
  transition: 0.5s;
  align-self: right;
  margin-right: 10px;
  color: white;
  text-decoration: none;
  font-size: 20px;
  align-items: center;
  display: flex;
  padding: 0px 10px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  @media screen and (max-width: 600px) {
    font-size: 15px;
    padding: 0px 5px;
    margin-right: 3px;
  }
`;

const TitleLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 30px;
  transition: 0.5s;
  align-items: center;
  display: flex;

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const Navbar = ({ contactRef }) => {
  const { pathname } = useLocation();

  return (
    <Bar>
      <TitleLink to="/" replace={pathname === "/"}>
        Austin VCG
      </TitleLink>
      <ItemList>
        <ItemLink to="/about" replace={pathname === "/about"}>
          About
        </ItemLink>
        <ItemLink to="/team" replace={pathname === "/team"}>
          Team
        </ItemLink>
        <ItemLink to="/resources" replace={pathname === "/resources"}>
          Resources
        </ItemLink>
        <ItemGoTo
          onClick={() => window.scrollTo(0, document.body.scrollHeight)}
        >
          Contact
        </ItemGoTo>
      </ItemList>
    </Bar>
  );
};
export default Navbar;
