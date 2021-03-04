import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import macHeroScreenshotImageSrc from "images/krigs-logo.png";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
    <Hero
      heading={<>Building the Future of Digital Asset <HighlightedText> Insurance</HighlightedText></>}
      description="A decentralized P2P insurance marketplace with easy claims and instant payouts. Powered by Polkadot."
      imageSrc="https://tbcclubinternational.com/images/insured-hero-image.svg"
      imageCss={imageCss}
      imageDecoratorBlob={true}
      primaryButtonText="Join Community"
    />
      <FeatureWithSteps
        subheading={<Subheading>GET WHITELISTED WITH THE FOLLOWING STEP</Subheading>}
        heading={
          <>
            How to <HighlightedText>BUY KRIGS TOKEN.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
    </AnimationRevealPage>
    
  );
}
