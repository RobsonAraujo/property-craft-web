import React from "react";
import { Header, Hero, Process } from "./components";
import Footer from "../../app/components/Footer";
import BlueBanner from "../../components/BlueBanner";

const HomePage = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <Process />
      <BlueBanner />
      <Footer />
    </div>
  );
};

export default HomePage;
