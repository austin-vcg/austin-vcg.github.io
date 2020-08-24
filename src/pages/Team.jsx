import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Navbar, Footer } from "../components";
import { color_theme, text_theme } from "../theme";

const HomePage = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background-size: cover;
  background: transparent;
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
  font-weight: normal;
  color: rgb(${color_theme.primary});
  @media screen and (max-width: 600px), (max-height: 600px) {
    margin-bottom: 10px;
    font-size: 25px;
  }
`;

const SectionH2 = styled.span`
  font-size: 25px;
  margin-bottom: 20px;
  text-align: center;
  font-family: ${text_theme.default.font};
  color: rgb(${color_theme.secondary});
  font-weight: normal;
  @media screen and (max-width: 600px), (max-height: 600px) {
    margin-bottom: 10px;
    font-size: 20px;
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

const ProfileSection = styled(Section)`
  padding: 2vh 1vw;
`;

const ProfileGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

const Profile = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 20px;

  @media screen and (max-width: 600px) {
    width: 175px;
    padding: 10px 10px;
  }

  @media screen and (max-width: 1200px) {
    width: 250px;
  }
`;

const ProfileImg = styled.div`
  width: 180px;
  height: 250px;

  background: url(${(props) => props.src}) center center no-repeat;
  background-size: cover;
  padding: 15px;
  margin-bottom: 15px;
  transition: 0.25s;

  @media screen and (max-width: 600px) {
    width: 140px;
    height: 200px;
    padding: 10px;
  }

  @media screen and (max-width: 1200px) {
    width: 160px;
    height: 225px;
  }
`;

const ProfileText = styled.span`
  font-size: 17px;
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

const Team = () => {
  const profiles = [
    {
      name: "Arthur Ji",
      role: "President",
      major: "Business Honors, Comp. Sci. Honors, Finance",
      picture: "../images/officers/arthur_ji.jpg",
      bio: (
        <ProfileText>
          Arthur is a UT Austin freshman majoring in Comp. Sci. Honors and
          Canfield Business Honors as part of the CSB Honors program. He is from
          the Bay Area, California, and, from growing up in Silicon Valley, has
          a profound interest in finance, software, and entrepreneurship. In his
          free time, he enjoys cooking (especially baking!) and reading up on
          politics.
        </ProfileText>
      ),
    },
    {
      name: "Zain Sunesara",
      role: "Director of Operations",
      major: "Finance, Economics",
      picture: "../images/officers/zain_sunesara.jpg",
      bio: (
        <ProfileText>
          Zain is a freshman Finance and Economics major from Houston, Texas.
          This summer, he completed an internship at a start-up tech company
          called Dive Chat. Outside of UT, Zain likes to workout, eat
          Chick-fil-A and visit new places.
        </ProfileText>
      ),
    },
    {
      name: "Shubhi Dhanuka",
      role: "Director of Marketing & Outreach",
      major: "Finance",
      picture: "../images/officers/shubhi_dhanuka.jpg",
      bio: (
        <ProfileText>
          Shubhi is a Finance major from Houston, TX. She spent this summer
          working as a Sales Representative for Vector Marketing and studying
          for her Texas Real Estate License. Outside of VCG, Shubhi loves music
          festivals, traveling, volunteering, and exploring the outdoors.
        </ProfileText>
      ),
    },
    {
      name: "Sharan Tatineni",
      role: "Director of Finances",
      major: "Finance",
      picture: "../images/officers/sharan_tatineni.jpg",
      bio: (
        <ProfileText>
          Sharan is a freshman at UT Austin studying Finance from Plano, Texas.
          This summer, he completed economic research and data analysis at a
          COVID-19 non-profit organization. Outside of UT VCG, Sharan enjoys
          following football, eating at his favorite places (Taco Bell), and
          spending time with his family.
        </ProfileText>
      ),
    },
  ];

  return (
    <HomePage>
      <Header>
        <Navbar solid={true} />
      </Header>

      <Body>
        <Section>
          <SectionIcon icon={["fas", "users"]} />
          <SectionH1>Our Team</SectionH1>
          <SectionText>
            As an organization, we strive to bring as many students as possible
            exposure into the world of venture capital. We've built a team of
            able leaders to lead the organization towards this goal.
          </SectionText>
          <Line />
        </Section>

        <ProfileSection>
          <ProfileGrid>
            {profiles.map((profile) => (
              <Profile>
                <SectionH1>{profile.name}</SectionH1>
                <ProfileImg
                  src={
                    profile.picture === undefined
                      ? "../images/officers/missing_profile.png"
                      : profile.picture
                  }
                  alt={profile.name}
                />
                <SectionH2>{profile.role}</SectionH2>
                <SectionText>
                  <i>{profile.major}</i>
                </SectionText>
                {profile.bio}
              </Profile>
            ))}
          </ProfileGrid>
        </ProfileSection>
      </Body>

      <Footer />
    </HomePage>
  );
};

export default Team;
