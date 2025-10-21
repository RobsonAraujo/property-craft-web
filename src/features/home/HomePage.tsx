import React from "react";
import {
  Header,
  Hero,
  Process,
  ServiceAreas,
  Stats,
  FinalCTA,
  CTABanner,
  CEOVideo,
} from "./components";
import Footer from "../../app/components/Footer";
import BlueBanner from "../../components/BlueBanner";
import AssetTypes from "../../components/AssetTypes";

const HomePage = () => {
  return (
    <div className="">
      <Header />
      <Hero />

      <Process />
      <BlueBanner />
      {/* <CTABanner /> */}
      <ServiceAreas />
      <AssetTypes />
      <Stats />

      {/* OPÇÃO RECOMENDADA: Entre Stats e FinalCTA - Reforça confiança antes do CTA final */}
      <CEOVideo />

      <FinalCTA />
      {/* <CTABanner /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
