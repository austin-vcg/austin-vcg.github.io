import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Navbar, Footer } from "../components";
import { color_theme, text_theme } from "../theme";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useState } from "react";

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
  transition: 0.5s;
`;

const DropDownButton = styled.div`
  display: flex;
  width: 50vw;
  height: 40px;
  margin: 5px;
  margin-bottom: 15px;
  background-color: transparent;
  align-content: center;
  justify-content: center;
  border-radius: 25px;
  transition: 0.5s;

  &:hover {
    background-color: rgb(${color_theme.secondary});
    & > * {
      color: white;
    }
  }
`;

const ButtonIcon = styled(FontAwesomeIcon)`
  font-size: 40px;
  color: black;
  margin-bottom: 20px;
  color: rgb(${color_theme.secondary});
  @media screen and (max-width: 600px), (max-height: 600px) {
    margin-bottom: 10px;
    font-size: 35px;
  }
  transition: 0.5s;
`;

const MemberResourcesFrame = styled.iframe`
  width: 60vw;
  height: ${(props) => (props.expanded ? `70vh` : `0vh`)};
  border: ${(props) => (props.expanded ? `2px ${color_theme.primary}` : `0`)};
  transition: 0.5s;
`;

const ForMembers = () => {
  const [viewFiles, setViewFiles] = useState(false);
  const [viewCalendar, setViewCalendar] = useState(true);

  const openFiles = () => {
    setViewFiles(!viewFiles);
  };

  const openCalendar = () => {
    setViewCalendar(!viewCalendar);
  };

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
          <SectionText>
            Here's a list of upcoming events for Texas VCG Members.
          </SectionText>
          <DropDownButton onClick={() => openCalendar()}>
            {viewCalendar ? (
              <ButtonIcon icon={["fas", "chevron-up"]} />
            ) : (
              <ButtonIcon icon={["fas", "chevron-down"]} />
            )}
          </DropDownButton>
          <CalendarSection
            src="https://calendar.google.com/calendar/embed?src=21j1cj1b2h7ank71t9lsc6msps%40group.calendar.google.com&ctz=America%2FLos_Angeles"
            title="Upcoming Events"
            width={width > 500 ? width * 0.75 : 433}
            height={viewCalendar ? height * 0.75 : 0}
            frameborder="0"
            scrolling="no"
          />
        </Section>

        <Line />

        <Section>
          <SectionIcon icon={["far", "lightbulb"]} />
          <SectionH1>Member Resources</SectionH1>
          <SectionText>
            Click below for documents that are available to everyone to build up
            their own skills in venture capital. Feel free to contact us if
            there is anything you'd like to add.
          </SectionText>
          <DropDownButton onClick={() => openFiles()}>
            {viewFiles ? (
              <ButtonIcon icon={["fas", "chevron-up"]} />
            ) : (
              <ButtonIcon icon={["fas", "chevron-down"]} />
            )}
          </DropDownButton>

          <MemberResourcesFrame
            expanded={viewFiles}
            title="Member Resources"
            src="https://drive.google.com/embeddedfolderview?id=1hlI65ivWTPlee_UYBYHWXRRIg9b87dTT#list"
          ></MemberResourcesFrame>
          {/* <SectionText>Check later for new resources!</SectionText> */}
        </Section>
      </Body>

      <Footer />
    </HomePage>
  );
};

export default ForMembers;
