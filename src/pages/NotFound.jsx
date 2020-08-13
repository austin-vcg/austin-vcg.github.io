import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Navbar, Footer, ContactInfoBar } from "../components";
import { color_theme, text_theme } from "../theme";

const HomePage = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  transition: 0.5s;
`;

const Header = styled.div`
  background: transparent;
  background-size: cover;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: white;
`;

const ErrorSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh 10vw;
`;

const ErrorIcon = styled(FontAwesomeIcon)`
  font-size: 100px;
  color: black;
  margin-bottom: 20px;
  color: rgba(${color_theme.secondary}, 0.75);
  @media screen and (max-width: 600px), (max-height: 600px) {
    margin-bottom: 10px;
    font-size: 75px;
  }
`;

const ErrorHeaderText = styled.span`
  font-size: 50px;
  margin-bottom: 25px;
  text-align: center;
  font-family: ${text_theme.header.font};
  color: rgb(${color_theme.tertiary});
  @media screen and (max-width: 600px), (max-height: 600px) {
    margin-bottom: 10px;
    font-size: 40px;
  }
`;

const ErrorText = styled.span`
  font-size: 25px;
  margin-bottom: 20px;
  text-align: center;
  font-family: ${text_theme.default.font};

  b {
    color: rgb(${color_theme.primary});
    text-decoration: underline;
  }

  @media screen and (max-width: 600px), (max-height: 600px) {
    margin-bottom: 5px;
    font-size: 20px;
  }
`;

const NotFound = () => {
  return (
    <HomePage>
      <Header>
        <Navbar solid={true} />
      </Header>

      <Body>
        <ErrorSection>
          <ErrorIcon icon={["far", "surprise"]} />
          <ErrorHeaderText>Page Not Found</ErrorHeaderText>
          <ErrorText>
            Oops! It seems you stumbled onto a page that either doesn't exist or
            is under construction. Our dearest apologies if there was a problem
            with our website. Please navigate back to the main pages via the
            navigation bar on top.
          </ErrorText>
        </ErrorSection>
      </Body>

      <Footer />
    </HomePage>
  );
};

export default NotFound;
