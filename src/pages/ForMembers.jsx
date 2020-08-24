import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Navbar, Footer } from "../components";
import { color_theme, text_theme } from "../theme";
import useWindowDimensions from "../hooks/useWindowDimensions";

const HomePage = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background: transparent;
  background-size: cover;
  margin-bottom: 2vh;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  background-color: white;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vh 10vw;
  margin-bottom: 3vh;
`;

const SectionIcon = styled(FontAwesomeIcon)`
  font-size: 50px;
  color: black;
  margin-bottom: 20px;
  color: rgb(${color_theme.secondary});
  @media screen and (max-width: 600px), (max-height: 600px) {
    margin-bottom: 10px;
    font-size: 35px;
  }
`;

const SectionH1 = styled.span`
  font-size: 30px;
  margin-bottom: 25px;
  text-align: center;
  font-family: ${text_theme.header.font};
  color: rgb(${color_theme.primary});
  font-weight: normal;
  @media screen and (max-width: 600px), (max-height: 600px) {
    margin-bottom: 10px;
    font-size: 25px;
  }
`;

const SectionH2 = styled.span`
  font-size: 25px;
  margin-bottom: 20px;
  text-align: center;
  font-family: ${text_theme.header.font};
  color: rgb(${color_theme.tertiary});
  font-weight: normal;
  @media screen and (max-width: 600px), (max-height: 600px) {
    margin-bottom: 10px;
    font-size: 20px;
  }
`;

const SectionText = styled.span`
  font-size: 20px;
  text-align: center;
  font-family: ${text_theme.default.font};
  margin-bottom: 15px;

  b {
    color: rgb(${color_theme.primary});
    text-decoration: underline;
  }

  @media screen and (max-width: 600px), (max-height: 600px) {
    font-size: 15px;
  }
`;

const Line = styled.hr`
  color: black;
  width: 80%;
`;
const SectionGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

const GridItem = styled.div`
  width: 325px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 15px;

  @media screen and (max-width: 600px) {
    width: 175px;
    padding: 10px 10px;
  }

  @media screen and (max-width: 1200px) {
    width: 250px;
  }
`;

const CalendarSection = styled.iframe`
  border: 0;
`;

const ForMembers = () => {
  const { width, height } = useWindowDimensions();
  return (
    <HomePage>
      <Header>
        <Navbar solid={true} />
      </Header>

      <Body>
        <Section>
          <SectionIcon icon={["far", "calendar"]} />
          <SectionH1>Organization Calendar</SectionH1>
          <CalendarSection
            src="https://calendar.google.com/calendar/embed?src=21j1cj1b2h7ank71t9lsc6msps%40group.calendar.google.com&ctz=America%2FLos_Angeles"
            title="Upcoming Events"
            width={width > 500 ? width * 0.75 : 433}
            height={height * 0.75}
            frameborder="0"
            scrolling="no"
          />
        </Section>

        <Line />

        <Section>
          <SectionIcon icon={["far", "lightbulb"]} />
          <SectionH1>Member Resources</SectionH1>
          <SectionText>Check later for new resources!</SectionText>
        </Section>
      </Body>

      <Footer />
    </HomePage>
  );
};

export default ForMembers;
