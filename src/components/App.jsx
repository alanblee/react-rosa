import React from "react";
import Header from "./header/header";
import HeroSection from "./hero-section/hero-section";
import DiscoverSection from "./discover-section/discover-section";
import TastefulSection from "./tasteful-recipes-section/tasteful-recipes";
import DiscoverMenuSection from "./discover-menu/discover-menu";
import BlendSection from "./blend-section/blend-section";

function App() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <DiscoverSection />
      <TastefulSection />
      <DiscoverMenuSection />
      <BlendSection />
    </div>
  );
}

export default App;
