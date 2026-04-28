import React from "react";
import "../asstes/styles/home.scss";
import HomePageHeroSection from "./ReusableComponent/HomePageHeroSection";
import HomePageTogetherSection from "./ReusableComponent/HomePageTogetherSection";
import HomePageBlogsSection from "./ReusableComponent/HomePageBlogsSection";
import HomePagePodcastSection from "./ReusableComponent/HomePagePodcastSection";
import HomePageAboutSection from "./ReusableComponent/HomePageAboutSection";
import HomePageInitiativeSection from "./ReusableComponent/HomePageInitiativeSection";
import HomePageUpcomingEventSection from "./ReusableComponent/HomePageUpcomingEventSection";
import HomePageTestimonialSection from "./ReusableComponent/HomePageTestimonialSection";
import MetaAwakeningContainer from "./MetaAwekingContainer";

// -------------------------------------------

function Home() {



  return (
    <div>


      {/* ---------------------- Home Page Hero Section ----------------------  */}
      <HomePageHeroSection />


      {/* ---------------------- About Bhupendra Section Start Here ----------------------*/}
      <HomePageAboutSection />



      {/* ---------------------- Together we are achieving great things Section Start ----------------------*/}
      <HomePageTogetherSection />


      {/* ---------------------- The Bhupendra Upcoming events Section Start ---------------------- */}
      <HomePageUpcomingEventSection />



      {/* ---------------------- The Meta Awakening Section Start ---------------------- */}
      <MetaAwakeningContainer />


      {/* ---------------------- Testimonials Section Start ---------------------- */}
      <HomePageTestimonialSection />


      {/* ---------------------- Our Initiatives Some Text Section Start ---------------------- */}
      <HomePageInitiativeSection />



      {/* ---------------------- Podcast Section Start ---------------------- */}
      <HomePagePodcastSection />



      {/* ----------------------  My Blog Section Start ----------------------  */}
      <HomePageBlogsSection />
    </div>
  );
}

export default Home;