import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { color_theme, text_theme } from "../theme";

const Bar = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  color: rgb(${color_theme.primary});
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  transition: 0.5s;

  font-family: ${text_theme.header.font};

  @media screen and (max-width: 600px) {
    height: 10vh;
    padding: 5px 10px;
  }
`;

const ContactItem = styled.div`
  padding: 5px;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: white 3px double;
  color: white;
  text-decoration: none;
  transition: 0.5s;
  margin-bottom: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const ContactIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  margin-right: 10px;
`;

const ContactInfoBar = () => {
  return (
    <Bar>
      <ContactItem
        onClick={() =>
          window.open("mailto:utventurecapital@gmail.com", "_blank")
        }
      >
        <ContactIcon icon={["far", "envelope"]} />
        Contact Us: utventurecapital@gmail.com
      </ContactItem>
    </Bar>
  );
};
export default ContactInfoBar;
