import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import GetStarted from "components/cta/GetStartedLight.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";




export default () => {
    const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    const imageCss = tw`rounded-4xl`;
  
  return (
    <AnimationRevealPage>
    <Hero
      heading={<>Building the Future of Digital Asset <HighlightedText> Insurance</HighlightedText></>}
      description={<>A decentralized P2P insurance marketplace with easy claims and instant payouts. Powered by Binance Smart Chain.<br/><br/><h4>KRIGS SMART CONTRACT</h4><a href="https://bscscan.com/token/0xfa90a78e63e9bfe95c1270d8be0cc36c2fe6c2c7"><small>0xfa90a78e63e9bfe95c1270d8be0cc36c2fe6c2c7</small></a></>}
      imageSrc="https://finrocks.com/images/blockchain/hero-img.svg"
      imageCss={imageCss}
      imageDecoratorBlob={true}
      primaryButtonText="Join Krigs Token ICO"
      primaryButtonUrl="https://krigs.network"
      primaryButtonTarget="blank"
    />
        <FeatureWithSteps
        subheading={<Subheading>Make your move and to join the Binance Community Program and Enjoy maximum benefits</Subheading>}
        heading={
          <>
            Join KRIGS <HighlightedText>in 3 Steps</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
         <FeatureStats/>
     <FAQ
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      subheading="FAQs"
      heading={
        <>
          Do you have <span tw="text-primary-500">Questions ?</span>
        </>
      }
    />
     <GetStarted/>
      <Footer />
    </AnimationRevealPage>
    
  );
  
}

