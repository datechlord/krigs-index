import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/krigs-logo.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as GithubIcon } from "../../images/github-icon.svg";


const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>KRIGS <br/>FINANCE</LogoText>
          </LogoContainer>
          <LinksContainer>
           </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com/krigsfinance">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://www.youtube.com/channel/UCuRHEVVbaNODx5EVlcUg8RQ">
              <YoutubeIcon />
            </SocialLink>
            <SocialLink href="https://github.com/krigsfinance">
              <GithubIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; 2021, Krigs Finance.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
