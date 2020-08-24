import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Navbar, Footer } from "../components";
import { color_theme, text_theme } from "../theme";
import { SIGNUP_LINK } from "../config";

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

const SignUpButton = styled.div`
  background-color: transparent;
  font-size: 30px;
  border: rgb(${color_theme.primary}) 3px double;
  font-family: ${text_theme.header.font};
  margin: 5px;
  padding: 10px;
  transition: 0.5s;
  cursor: pointer;
  color: rgb(${color_theme.primary});
  &:hover {
    padding: 15px;
    margin: 0px;
    background-color: rgba(${color_theme.secondary}, 0.4);
  }
  @media screen and (max-width: 600px) {
    font-size: 20px;
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
const GridArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

const GridItem = styled.div`
  width: 300px;
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

const About = ({}) => {
  return (
    <HomePage>
      <Header>
        <Navbar solid={true} />
      </Header>

      <Body>
        <Section>
          <SectionIcon icon={["far", "lightbulb"]} />
          <SectionH1>Our History</SectionH1>
          <SectionText>
            The Texas Venture Capital Group, often shortened to Texas VCG or
            VCG, was created by our founder who saw that, while UT Austin had an
            immense organization ecosystem around entrepreneurship and startups,
            there was a lack of opportunities to learn about the financial side
            of the startup world that make it possible to bring novel ideas into
            the marketplace. Finding an overwhelming interest in this area from
            the UT community, he and a few other enthusiasts created Texas VCG
            to bring more students exposure to the world of venture capital.
          </SectionText>
        </Section>

        <Section>
          <SectionIcon icon={["fas", "chalkboard"]} />
          <SectionH1>What We Do</SectionH1>
          <SectionText>
            As an organization, we strive to provide education and insights into
            the venture capital industry. We hope to provide resources to our
            members and all students at UT Austin in various ways.
          </SectionText>
          <GridArea>
            <GridItem>
              <SectionH2>Discussions</SectionH2>
              <SectionText>
                During meeting, we plan to offer opportunities to have group
                lectures where we can learn some basic concepts in venture
                capital. We also plan to host discussions about the latest
                trends in the startup community, as well as notable companies
                that will help members practice skills and familiarize with
                taught topics.
              </SectionText>
            </GridItem>
            <GridItem>
              <SectionH2>Mock Pitches</SectionH2>
              <SectionText>
                As part of our meetings, we also plan to host small-scale
                startup pitches, where members form small teams to pitch various
                promising startups to the rest of the organization, who then
                will evaluate their proposal and analysis of said opportunity
                and vote for whether or not they would have invested in it given
                the resources. These excercises provide opportunities to build
                persuasion skills that will be handy both for an entrepreneur
                and analytical skills necessary as investors.
              </SectionText>
            </GridItem>
            <GridItem>
              <SectionH2>Speakers</SectionH2>
              <SectionText>
                As students, we often lack access to the invaluable experience
                and insight that are advantageous in any industry, especially in
                entrepreneurship and finance. That's why VCG plans to hold
                panels or single-person meetings, virtually or in-person, with
                leaders in the local Austin and greater startup and ventur
                capital community to hear their experience and advice to getting
                on the right path.
              </SectionText>
            </GridItem>
          </GridArea>
        </Section>

        <Section>
          <SectionIcon icon={["fas", "seedling"]} />
          <SectionH1>Why We Do It</SectionH1>
          <SectionText>
            <p>
              Austin is home to one of the world's fastest growing startup
              ecosystems, the "Silicon Hills". With over 5,500 startups, Austin
              has claimed its place as an epicenter for entrepreneurship. UT
              Austin itself has also greatly embraced this by providing many
              opportunities for students to aspire to build their own companies.
            </p>
            <p>
              However, we believe that there is a current lack of resources to
              learn about and enter the other side of entrepreneurship: venture
              capital. The boom in venture capital, from small funds to massive
              ones like Softbank's Vision Fun, are what made the global startup
              boom possible and so much more profound. We hope to bring more
              awareness to venture capital at UT by providing students
              opportunities to learn more about the industry and the work
              involved in it. We aim to build smart, socially-responsible
              investors who can continue to fuel the boom of new startups and
              innovative individuals far into the future.
            </p>
          </SectionText>
          <Line />
        </Section>

        <Section>
          <SectionH1>Join us today!</SectionH1>
          {SIGNUP_LINK === undefined ? (
            <SectionH2>
              <i>
                The sign-up for this semester has closed. Please come back when
                it opens next semester!
              </i>
            </SectionH2>
          ) : (
            <SignUpButton onClick={() => window.open(SIGNUP_LINK, "_blank")}>
              Sign Up
            </SignUpButton>
          )}
        </Section>
      </Body>

      <Footer />
    </HomePage>
  );
};

export default About;
