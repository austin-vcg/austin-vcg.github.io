import React, { useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Navbar, Footer, ContactInfoBar } from "../components";
import { home_bg } from "../images";
import { color_theme, text_theme } from "../theme";

const HomePage = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  transition: 0.5s;
`;

const Header = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${home_bg}) center;
  background-size: cover;
`;

const AnimatedDiv = styled.div`
  animation: fade-in 4s both;
  height: 80vh;
  display: flex;
  flex-direction: column;
  @keyframes fade-in {
    from {
      background-color: rgba(0, 0, 0, 1);
    }
    to {
      background-color: rgba(0, 0, 0, 0);
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
  padding: 0px 10%;
  transition: 0.5s;
`;

const PageTitleText = styled.span`
  margin-bottom: 3vh;
  font-size: 55px;
  text-align: center;
  font-family: ${text_theme.header.font};

  @media screen and (max-width: 600px), (max-height: 600px) {
    font-size: 40px;
  }

  @media screen and (min-width: 900px) {
    overflow: hidden;
    white-space: nowrap;
    animation: typing 2s steps(28, end) 1s 1 normal both;
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
  border: white 3px double;
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

  background-color: white;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh 10vw;
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

const SectionHeaderText = styled.span`
  font-size: 30px;
  margin-bottom: 25px;
  text-align: center;
  font-family: ${text_theme.header.font};
  color: rgb(${color_theme.primary});
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

const Home = () => {
  return (
    <HomePage>
      <Header>
        <AnimatedDiv>
          <Navbar />
          <PageTitle>
            <PageTitleText>Texas Venture Capital Group</PageTitleText>
            <SignUpButton
              onClick={() => window.open("http://google.com", "_blank")}
            >
              Sign Up
            </SignUpButton>
          </PageTitle>
        </AnimatedDiv>
      </Header>

      <Body>
        <Section>
          <SectionIcon icon={["fas", "hand-holding-usd"]} />
          <SectionHeaderText>
            UT Austin's student-led organization on venture capital and startup
            funding.
          </SectionHeaderText>
          <SectionText>
            Austin is home to one of the world's fastest growing startup
            ecosystems. We hope to bring more awareness to venture capital at
            Austin and its university to build smart, socially-responsible
            investors who can continue to fuel the boom of new startups far into
            the future.
          </SectionText>
        </Section>
        <Line />
        <Section>
          <SectionHeaderText>Our Mission Statement</SectionHeaderText>
          <SectionText>
            We aim to create a close-knit organization focused education and
            careers on venture capital and startup financing that supports{" "}
            <b>exploration and learning</b>, <b>networks and community</b>, and{" "}
            <b>professionalism</b>.
          </SectionText>
          <SectionGrid>
            <GridItem>
              <SectionIcon icon={["fas", "search"]} />
              <SectionHeaderText>Discover</SectionHeaderText>
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
              <SectionHeaderText>Connect</SectionHeaderText>
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
              <SectionHeaderText>Prepare</SectionHeaderText>
              <SectionText>
                Through our activities and events, we hope to build in our
                members a clear understanding of the industry's work and the
                practical, real-life skills essential for the field. We aim to
                foster analytical minds that can think with depth and clarity to
                capture opportunities in the startup world, while building
                involved individuals that see startup as not only investments
                and opportunities, but partners and teammates willing to face
                hardships and uncertainty together.
              </SectionText>
            </GridItem>
          </SectionGrid>
        </Section>
      </Body>

      <Footer />
    </HomePage>
  );
};

export default Home;
