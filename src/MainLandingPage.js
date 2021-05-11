import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import MainFeature from "components/features/TwoColWithButton.js";
import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";
import krigsmap from "images/krigs-map.png";
import communitydriven from "images/community-driven.svg";
import Features from "components/features/ThreeColSimple.js";


export default () => {
    const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    const Description = tw.span`inline-block mt-8`;
    const imageCss = tw`rounded-4xl`;
   
  return (
    <AnimationRevealPage>
    <Hero
      heading={<>Building the Future of Digital Asset <HighlightedText> Insurance </HighlightedText></>}
      description={<>A decentralized P2P insurance marketplace with easy claims and instant payouts. Powered by Binance Smart Chain.<br/><br/><h4>KRIGS SMART CONTRACT</h4><a href="https://bscscan.com/token/0xfa90a78e63e9bfe95c1270d8be0cc36c2fe6c2c7"><small>0xfa90a78e63e9bfe95c1270d8be0cc36c2fe6c2c7</small></a></>}
      imageSrc={krigsmap}
      imageCss={imageCss}
      imageDecoratorBlob={true}
      primaryButtonText="Live Chart"
      primaryButtonUrl="https://dex.guru/token/0xfa90a78e63e9bfe95c1270d8be0cc36c2fe6c2c7-bsc"
      primaryButtonTarget="blank"
      SecondaryButtonText="Buy Now"
      SecondaryButtonUrl="#"
    />
<FeatureStats/>
<Features
        heading={
          <>
            Why Choose <HighlightedText>KRIGS.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "Instant Payouts",
            description: "In both the traditional finance industry and existing crypto insurance solutions, payout methods are complicated. It often takes months for compensation to arrive, if it arrives. Krigs Finance smart contracts ensure that payouts are made immediately after an event has occurred.",
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Fully Collateralized",
            description: "Krigs Finance coverage is underpinned by collateral which ensures that users can be compensated instantly if an adverse event occurs.",
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Benefit from Market-Based Pricing",
            description: "In the traditional finance industry, you are dealing with a counterparty who is rewarded if you overpay. With Krigs Finance, you are dealing with a wide marketplace who are competing to give you the best terms on your insurance.",
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />

    <MainFeature
        subheading={<Subheading> A Blockchain-Based P2P Insurance Marketplace</Subheading>}
        heading={
          <>
            Making Blockchain
            <wbr /> <HighlightedText>and Insurance Better.</HighlightedText>
          </>
        }
        description={
          <Description>
           Underpinned by the Binance Smart Chain network, Krigs Finance is a P2P insurance marketplace. Market participants can easily request or provide coverage on a wide variety of cryptocurrency assets. Claims are fully collateralized and payouts are instant.<br />
            <br />
            <script defer src="https://www.livecoinwatch.com/static/lcw-widget.js"></script> <div class="livecoinwatch-widget-6" lcw-coin="BTC" lcw-base="USD" lcw-period="d" lcw-color-tx="#ffffff" lcw-color-bg="#1f2434" lcw-border-w="1" ></div>
            <br />
            <h1><b>Community-Driven P2P Marketplace</b></h1>
            <hr />
            Krigs Finance is not an insurance company. The marketplace is operated entirely by its members and underpinned by the governance token KRIGS. Any user can request insurance and anyone can provide coverage. Krigs Finance is the first marketplace that allows users to specify their own coverage.
            <br />
            <br />
            <h1><b>Cryptocurrency Holdings and Exchange Cover</b></h1>
            <hr />
            Hundreds of million in USD value has been lost due to exchange hacks. Krigs Finance users can insure their holdings on a cryptocurrency exchange. If the exchange is hacked or experiences bankruptcy, users with coverage are compensated.
            <br />
            <br />
            <h1><b>Cryptocurrency Holdings and Exchange Cover</b></h1>
            <hr />
            The stablecoin market has grown to over $25 billion. Stablecoins remain exposed to a variety of risks like security lapses and issuer bankruptcy. Krigs Finance users can protect against stablecoin failure.
            <br />
            <br />
            <h1><b>Smart Contract Coverage</b></h1>
            <hr />
            Protect against bugs and smart contract exploits. Tens of millions in USD value has evaporated at the hands of smart contract attacks. Krigs Finance users can protect against such events.
            <br />
            <br />
            <h1><b>Rug Pull Cover</b></h1>
            <hr />
            Hedge DeFi Positions by covering Rug Pull possibilities. If a rug pull happens, Krigs Finance users are covered.
           </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Trade KRIGS"
        primaryButtonURL="https://dex.guru/token/0xfa90a78e63e9bfe95c1270d8be0cc36c2fe6c2c7-bsc"
        imageSrc={communitydriven}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
         
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
      <Footer />
    </AnimationRevealPage>
    
  );
  
}

