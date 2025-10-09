import React from "react";
import { Header, Hero, Process } from "./components";
import ProcessPart2 from "./components/ProcessPart2";
import Footer from "../../app/components/Footer";
import BlueBanner from "../../components/BlueBanner";
import AssetTypes from "../../components/AssetTypes";

const HomePage = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <Process />
      <ProcessPart2 />
      <BlueBanner />
      <AssetTypes />
      <Footer />
    </div>
  );
};

export default HomePage;
