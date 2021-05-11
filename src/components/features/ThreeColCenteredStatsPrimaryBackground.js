import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container as ContainerBase, ContentWithPaddingXl } from "components/misc/Layouts";
import { SectionDescription } from "components/misc/Typography";

const Container = tw(ContainerBase)`my-8 lg:my-10 bg-primary-800 text-gray-100 -mx-8 px-8`;
const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl`;
const Subheading = tw(SubheadingBase)`text-gray-100 text-center`;
const Description = tw(SectionDescription)`text-gray-400 text-center mx-auto max-w-screen-md`;

export default ({
  subheading = "Passive income in KRIGS Community",
  heading = "Enhanced ROI",
  description = "Innovations in the krigs.finance smart contract allow certain addresses, like the Uniswap pool or exchange wallets, to be blocked from earning fees. Because of this, 100% of the fees generated go to holders of the token. The percentage of fees you earn is calculated by the percentage of KRIGS that you own among holders. This generates a much higher yield than would be possible otherwise.",
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
