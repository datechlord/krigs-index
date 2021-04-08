import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import GetStarted from "components/cta/GetStartedLight.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import { Chrono } from "react-chrono";


export default () => {
    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    const imageCss = tw`rounded-4xl`;

    const items = [{
      title: "Q4 2020",
      cardTitle: "Equity Funding",
      cardDetailedText: "Equity Funding, Going Public, Token-Private Sale",
    },
    {
      title: "Q1 2021",
      cardTitle: "PR and Community Building",
      cardDetailedText: "PR and Community Building, Token Launch, Listing on Exchanges, Product Development, Testing, First Beta Desktop Version",
    },
    {
      title: "Q2 2021",
      cardTitle: "Beta to Live Version Desktop",
      cardDetailedText: "Beta to Live Version Desktop, Beta App IOS, Extended Structured Products, Beta Rating System",
    },
    {
      title: "Q3 2021",
      cardTitle: "Multi-Collateral Escrow",
      cardDetailedText: "Multi-Collateral Escrow, Shift to DAO Governance, Fixed Liquidity Provider Structure",
    },
    {
      title: "Q4 2021",
      cardTitle: "Enough Instant Liquidity for major assets",
      cardDetailedText: "Enough Instant Liquidity for major assets, P2P Insurance for Re-Insurance",
    },
    {
      title: "Q1 2022",
      cardTitle: "Liquidity Mining, Live Protocol Rating System",
      cardDetailedText: "Liquidity Mining, Live Protocol Rating System, Live Exchange Rating System, Live User Rating System.",
    },

    {
      title: "Q2 2022",
      cardTitle: "System Integration with Exchanges",
      cardDetailedText: "System Integration with Exchanges, System Integration with Trading Terminals",
    },

    {
      title: "Q3 2022",
      cardTitle: "Safe and Krigs Purchase of Crypto Assets",
      cardDetailedText: "Safe and krigs Purchase of Crypto Assets with Fiat, Insured Crypto Debit Card",
    },

    {
      title: "Q4 2022",
      cardTitle: "Safe and Insured Purchase of Crypto Assets with Fiat",
      cardDetailedText: "Safe and Insured Purchase of Crypto Assets with Fiat, Insured Crypto Debit Card",
    },
    ];
  
  return (
    <AnimationRevealPage>
    <Hero
      heading={<>Building the Future of Digital Asset <HighlightedText> Insurance</HighlightedText></>}
      description={<>A decentralized P2P insurance marketplace with easy claims and instant payouts. Powered by Binance Smart Chain.<br/><br/><h4>KRIGS SMART CONTRACT</h4><a href="https://bscscan.com/token/0xfa90a78e63e9bfe95c1270d8be0cc36c2fe6c2c7"><small>0xfa90a78e63e9bfe95c1270d8be0cc36c2fe6c2c7</small></a></>}
      imageSrc="https://finrocks.com/images/blockchain/hero-img.svg"
      imageCss={imageCss}
      imageDecoratorBlob={true}
      primaryButtonText="Buy Krigs on Presale"
      primaryButtonUrl="https://krigs.network"
      primaryButtonTarget="blank"
    />
        <MainFeature />
         <FeatureStats/>
         
         <div id="roadmap">
        <Chrono 
        items={items}
        scrollable mode="VERTICAL_ALTERNATING"
        />
        </div>
    

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

