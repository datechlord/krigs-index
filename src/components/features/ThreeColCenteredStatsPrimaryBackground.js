import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container as ContainerBase, ContentWithPaddingXl } from "components/misc/Layouts";
import { SectionDescription } from "components/misc/Typography";

const Container = tw(ContainerBase)`my-8 lg:my-10 bg-primary-900 text-gray-100 -mx-8 px-8`;
const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl`;
const Subheading = tw(SubheadingBase)`text-gray-100 text-center`;
const Description = tw(SectionDescription)`text-gray-400 text-center mx-auto max-w-screen-md`;

const StatsContainer = tw.div`mt-8 flex flex-col sm:flex-row items-center justify-center flex-wrap max-w-screen-md justify-between mx-auto`
const Stat = tw.div`flex flex-col text-center p-4 tracking-wide`
const StatKey = tw.div`text-xl font-medium`
const StatValue = tw.div`text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black`

export default ({
  subheading = "",
  heading = "Frictionless Yield Generation. Hold and Earn.",
  description = "KRIGS works by applying a 1% fee to each transaction and instantly splitting that fee among all holders of the token. Holders do not need to stake or wait for fees to be delivered. Fees are awarded by the smart contract and are immediately reflected in the holders balance.",
  stats = [
    {
      key: "Token Name",
      value: "Krigs Finance",
    },
    {
      key: "Ticker Symbol",
      value: "KRIGS",
    },
    {
      key: "Token Type",
      value: "BEP20",
    },

    {
      key: "Decimal",
      value: "18",
    },

    {
      key: "Token Supply",
      value: "120 Million",
    },

    {
      key: "Token Price in USD",
      value: "$0.50",
    },

    {
      key: "Token For Sale",
      value: "36 Million Tokens(30% of supply)",
    },
 
    {
      key: "Initial Market Cap",
      value: "$383,000",
    },

    {
      key: "Initial Circulating Supply",
      value: "4,475,000 KRIGS",
    },

    {
      key: "Token Hard Cap",
      value: "$1,870,000",
    },

    {
      key: "Fully Diluted Market Cap",
      value: "$9,600,000",
    },

  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <StatsContainer>
          {stats.map((stat, index) => (
            <Stat key={index}>
              <StatValue>{stat.value}</StatValue>
              <StatKey>{stat.key}</StatKey>
            </Stat>
          ))}
        </StatsContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
