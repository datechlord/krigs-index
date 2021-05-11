import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container as ContainerBase, ContentWithPaddingXl } from "components/misc/Layouts";
import { SectionDescription } from "components/misc/Typography";

const Container = tw(ContainerBase)`my-8 lg:my-10 text-gray-100 -mx-8 px-8`;
const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)`sm:text-3xl bg-primary-800 md:text-4xl lg:text-5xl`;
const Subheading = tw(SubheadingBase)`text-primary-100 text-right`;
const Description = tw(SectionDescription)`text-primary-400 text-justify mx-auto max-w-screen-md`;

export default ({
  subheading = "Buy and Hold KRIGS",
  heading = "Frictionless Yield Generation. Hold and Earn.",
  description = "KRIGS works by applying a 1% fee to each transaction and instantly splitting that fee among all holders of the token. Holders do not need to stake or wait for fees to be delivered. Fees are awarded by the smart contract and are immediately reflected in the holders balance.",
 
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeadingContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
