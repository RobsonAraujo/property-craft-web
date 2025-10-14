import React from "react";
import { Header, Hero, Process, ServiceAreas, Stats } from "./components";
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
      <ServiceAreas />
      {/* <CTABanner /> */}
      <Stats />
      <AssetTypes />

      <Footer />
    </div>
  );
};

export default HomePage;
