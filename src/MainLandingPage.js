import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import GetStarted from "components/cta/GetStartedLight.js";
import { Chrono } from "react-chrono";


export default () => {
    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    const imageCss = tw`rounded-4xl`;
    const items = [{
      title: "Q1 2021",
      cardTitle: "Q1",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "Q2 2021",
      cardTitle: "Q2",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "Q3 2021",
      cardTitle: "Q3",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "Q4 2021",
      cardTitle: "Q4",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "Q5 2021",
      cardTitle: "Q5",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "Q6 2021",
      cardTitle: "Q6",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },

    {
      title: "Q7 2021",
      cardTitle: "Q7",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    ];
  
  return (
    <AnimationRevealPage>
    <Hero
      heading={<>Building the Future of Digital Asset <HighlightedText> Insurance</HighlightedText></>}
      description="A decentralized P2P insurance marketplace with easy claims and instant payouts. Powered by Binance Smart Chain."
      imageSrc="https://finrocks.com/images/blockchain/hero-img.svg"
      imageCss={imageCss}
      imageDecoratorBlob={true}
      primaryButtonText="Read The Docs"
    />
    <FeatureStats/>
        <MainFeature />
        <Chrono 
        subheading="krigs"
        heading="Roadmap"
        items={items}
        scrollable mode="VERTICAL_ALTERNATING"
        
        />
      <GetStarted/>
      <Footer />
    </AnimationRevealPage>
    
  );
  
}

