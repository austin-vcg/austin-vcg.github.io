import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ContactInfoBar from "./ContactInfoBar";
import { color_theme, text_theme } from "../theme";

const FooterBar = styled.div`
  background-color: rgb(${color_theme.primary});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0px;
`;

const ItemList = styled.div`
  background: transparent;
  transition: 0.5s;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

const Item = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: transparent;
  font-size: 20px;
  transition: 0.5s;
  align-self: right;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  color: white;
  cursor: pointer;

  &:hover {
    background: white;
    color: rgb(${color_theme.primary});
  }
`;

const FooterText = styled.span`
  font-size: 15px;
  text-align: center;
  font-family: ${text_theme.header.font};
  color: white;
`;

const Icon = styled(FontAwesomeIcon)``;

const Footer = () => {
  return (
    <FooterBar>
      <ContactInfoBar />
      <ItemList>
        {/* <Item onClick={() => window.open("http://linkedin.com", "_blank")}>
          <Icon icon={["fab", "linkedin-in"]} />
        </Item>
        <Item onClick={() => window.open("http://facebook.com", "_blank")}>
          <Icon icon={["fab", "facebook"]} />
        </Item> */}
        <Item
          onClick={() =>
            window.open("https://www.instagram.com/texasvcg/", "_blank")
          }
        >
          <Icon icon={["fab", "instagram"]} />
        </Item>
      </ItemList>
      <FooterText>Texas Venture Capital Group &copy; 2020</FooterText>
    </FooterBar>
  );
};

export default Footer;
