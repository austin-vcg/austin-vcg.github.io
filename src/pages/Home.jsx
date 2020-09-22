import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Navbar, Footer, Calendar } from "../components";
import { color_theme, text_theme } from "../theme";
import { GOOGLE_API_KEY, CALENDAR_ID, SIGNUP_LINK } from "../config";

const HomePage = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background: url("../images/home_bg.jpg") center;
  background-size: cover;
  margin-bottom: 2vh;
`;

const AnimatedDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  animation: bg-fade-in 4s both;
  @keyframes bg-fade-in {
    from {
      background-color: rgba(0, 0, 0, 0.25);
    }
    to {
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
`;

const PageTitle = styled.div`
  color: white;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 3vw;
  transition: 0.5s;
`;

const PageTitleText = styled.span`
  margin-bottom: 3vh;
  font-size: 55px;
  text-align: center;
  font-family: ${text_theme.header.font};
  animation: fade-in 2s;

  @media screen and (max-width: 600px), (max-height: 600px) {
    font-size: 40px;
  }

  @media screen and (max-width: 350px) {
    font-size: 34px;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const PageTitleSubtext = styled.span`
  margin-bottom: 3vh;
  font-size: 25px;
  text-align: center;
  font-family: ${text_theme.default.font};
  color: rgb(${color_theme.secondary});

  overflow: hidden;
  white-space: nowrap;
  letter-spacing: 3px;
  animation: typing 3.25s steps(55) 1.5s 1 normal both;

  @media screen and (max-width: 600px), (max-height: 600px) {
    letter-spacing: 1px;
    font-size: 20px;
    animation: typing 1.5s steps(22) 1.5s 1 normal both;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

const SignUpButton = styled.div`
  background-color: transparent;
  font-size: 35px;
  border: white 4px double;
  font-family: ${text_theme.header.font};
  margin: 5px;
  padding: 10px;
  transition: 0.5s;
  cursor: pointer;
  color: white;
  &:hover {
    padding: 15px;
    margin: 0px;
    background-color: rgba(255, 255, 255, 0.4);
  }
  @media screen and (max-width: 600px) {
    font-size: 25px;
  }
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

const SectionText = styled.span`
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  font-family: ${text_theme.default.font};

  b {
    color: rgb(${color_theme.primary});
    text-decoration: underline;
  }

  @media screen and (max-width: 600px), (max-height: 600px) {
    margin-bottom: 5px;
    font-size: 15px;
  }
`;

const Line = styled.hr`
  color: black;
  width: 80%;
`;

const GridArea = styled.div`
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

const Logo = styled.div`
  width: 60px;
  height: 60px;

  background: url(${(props) => props.src}) center center no-repeat;
  background-size: contain;
  padding: 5px;
  margin-bottom: 15px;
  transition: 0.5s;
  @media screen and (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`;

const Home = () => {
  return (
    <HomePage>
      <Header>
        <AnimatedDiv>
          <Navbar />
          <PageTitle>
            <PageTitleText>Texas Venture Capital Group</PageTitleText>
            <PageTitleSubtext>
              UT Austin <b style={{ color: "white" }}>x</b> Venture Capital
            </PageTitleSubtext>
            {SIGNUP_LINK === undefined ? undefined : (
              <SignUpButton onClick={() => window.open(SIGNUP_LINK, "_blank")}>
                Sign Up
              </SignUpButton>
            )}
          </PageTitle>
        </AnimatedDiv>
      </Header>

      <Body>
        <Section>
          <Logo src="../images/logo.png" />
          <SectionH1>
            The premier student-led organization on venture capital and startup
            investing at the University of Texas at Austin.
          </SectionH1>
          <SectionText>
            Austin is home to one of the world's fastest growing startup
            ecosystems. Entrepreneurship is one of the hottest career paths in
            the region. However, one side of entrepreneurship is often passed
            over or forgotten: venture capital. Venture capital, or VC, is the
            keystone to fueling innovators with investments and direct
            partnerships to help them get their products into the global
            spotlight. Although the field has traditionally been very selective
            and limited, recent changes in startup culture has offered a opening
            for a newer, more diverse generations of investors to get into the
            industry. We hope to bring more awareness to venture capital at
            Austin and its university to build smart, socially-responsible
            investors who can continue to fuel the boom of new startups far into
            the future.
          </SectionText>
        </Section>
        <Line />
        <Section>
          <SectionH1>Our Mission Statement</SectionH1>
          <SectionText>
            We aim to create a close-knit organization focused education and
            careers on venture capital and startup financing that supports{" "}
            <b>exploration and learning</b>, <b>networks and community</b>, and{" "}
            <b>professionalism</b>.
          </SectionText>
          <GridArea>
            <GridItem>
              <SectionIcon icon={["fas", "search"]} />
              <SectionH1>Discover</SectionH1>
              <SectionText>
                At Texas VCG, our primary goal is always to introduce our
                members to field of venture capital, an area all too often
                forgotten as an area of finance that seems beyond reach for the
                average person. We want to redefine this vision of the industry
                and help more people of the younger generations discover venture
                capital as a tool for immense impact.
              </SectionText>
            </GridItem>
            <GridItem>
              <SectionIcon icon={["far", "address-book"]} />
              <SectionH1>Connect</SectionH1>
              <SectionText>
                A core mission of our organization is to foster a community
                connected to the wider scene of venture capital and innovation.
                We hope to help the students at UT Austin build networks and
                meaning personal and professional connections with both the
                local Austin and the rest of the world's venture capital
                visionaries.
              </SectionText>
            </GridItem>
            <GridItem>
              <SectionIcon icon={["fas", "briefcase"]} />
              <SectionH1>Prepare</SectionH1>
              <SectionText>
                We aim to help members build a clear understanding of the
                industry's work and the practical, real-life skills essential
                for the field. We aim to foster analytical minds that can think
                with depth and creativity to find groundbreaking startups, while
                forming individuals that see startup as not only investments,
                but as teammates who can face hardships and uncertainty
                together.
              </SectionText>
            </GridItem>
          </GridArea>
        </Section>
        <Section>
          <SectionH1>Upcoming Events</SectionH1>
          <SectionText>
            Click for more info! All times are CST. Times are subject to change.
          </SectionText>
          <Calendar apiKey={GOOGLE_API_KEY} calendarId={CALENDAR_ID} />
        </Section>
      </Body>

      <Footer />
    </HomePage>
  );
};

export default Home;
