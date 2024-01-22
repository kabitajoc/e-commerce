import React from "react";
import Nav from "../navbar/nav";
import Hero from "../hero/Hero";
import HeroCards from "../hero-cards/HeroCards";
import NewArrival from "../newArrival/NewArrival";
import BigSavingZone from "../savingZone/BigSavingZone";
import MensCategory from "../menCategory/MenCategory";
import WomensCategory from "../womenCategory/WomenCategory";
import TopBrands from "../brands/TopBrands";
import Limelight from "../limeLight/Limelight";
import Feedback from "../feedBack/Feedback";
import Footer from "../footer/Footer";
import CompanyQuote from "../companyQuote/CompanyQuote";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <HeroCards />
      <NewArrival />
      <BigSavingZone />
      <CompanyQuote />
      <MensCategory />
      <WomensCategory />
      <TopBrands />
      <Limelight />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Home;
