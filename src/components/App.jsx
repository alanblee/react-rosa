import React from "react";
import Header from "./header/header";
import HeroSection from "./hero-section/hero-section";
import DiscoverSection from "./discover-section/discover-section";
import TastefulSection from "./tasteful-recipes-section/tasteful-recipes";
import DiscoverMenuSection from "./discover-menu/discover-menu";
import BlendSection from "./blend-section/blend-section";
import CulinarySection from "./culinary-section/culinary-section";
import FooterSection from "./footer/footer";

function App() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <DiscoverSection />
      <TastefulSection />
      <DiscoverMenuSection />
      <BlendSection />
      <CulinarySection />
      <FooterSection />
    </div>
  );
}

export default App;
