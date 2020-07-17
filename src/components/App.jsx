import React, { Component, createRef } from "react";
import Header from "./header/header";
import HeroSection from "./hero-section/hero-section";
import DiscoverSection from "./discover-section/discover-section";
import TastefulSection from "./tasteful-recipes-section/tasteful-recipes";
import DiscoverMenuSection from "./discover-menu/discover-menu";
import BlendSection from "./blend-section/blend-section";
import CulinarySection from "./culinary-section/culinary-section";
import FooterSection from "./footer/footer";

class App extends Component {
  scrollDiv = createRef();
  scrollSmoothHandler = () => {
    this.scrollDiv.current.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <div className="">
        <Header />
        <HeroSection ref={this.scrollDiv} />
        <DiscoverSection />
        <TastefulSection />
        <DiscoverMenuSection />
        <BlendSection />
        <CulinarySection />
        <FooterSection handleScroll={this.scrollSmoothHandler} />
      </div>
    );
  }
  // const scrollDiv = createRef();
}

export default App;
