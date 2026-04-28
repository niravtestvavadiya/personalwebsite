import React, { useState, useEffect } from "react";
import Tab1 from "../../asstes/images/Initiative/COCH.jpeg";
import Tab2 from "../../asstes/images/Initiative/Soul_Foundation_Banner.jpeg";
import Tab3 from "../../asstes/images/Home_Initiatives_Induskargha.png";
import "../../asstes/styles/tab.scss";
import { Link } from "react-router-dom";
const InitiativesTab = () => {
  const [activeTab, setActiveTab] = useState(0); // State to track the current active tab
  const resetProgress = false // To reset progress animation

  const tabData = [
    {
      no: "01.",
      title: "Soul Foundation",
      desc: "It unites artisans, designers, and conscious consumers to preserve heritage, promote sustainable craft, and weave culture with consciousness.",
      imgSrc: Tab2,
      link: "/soul-foundation",
      isExternal: false
    },
    {
      no: "02.",
      title: "Circle of Consciousness & Happiness",
      desc: "A global community founded by Bhupendra, having clubs worldwide—a free platform for seekers to share, learn, and grow. It fosters awakened living and collective evolution through the harmony of consciousness.",
      imgSrc: Tab1,
      link: "http://circleofconsciousness.org/",
      isExternal: true
    },
    {
      no: "03.",
      title: "Induskargha",
      desc: "A revivalist movement that connects farmers, conscious consumers, and communities to promote healthy, organic food and preserve the agricultural wisdom of a region.",
      imgSrc: Tab3,
      link: "https://induskargha.com/",
      isExternal: true
    },
  ];

  // Automatically switch tabs when progress completes
  useEffect(() => {
    if (resetProgress) return; // Prevent progress reset during manual interaction

    const timer = setTimeout(() => {
      setActiveTab((prevTab) => (prevTab + 1) % tabData.length); // Move to the next tab
    }, 5000); // Match the progress bar duration (5 seconds)

    return () => clearTimeout(timer); // Cleanup timer on unmount or when activeTab changes
  }, [activeTab, resetProgress, tabData.length]);

  // Handle manual tab click
  // const handleTabClick = (index) => {
  //   setActiveTab(index); // Activate the clicked tab
  //   setResetProgress(true); // Reset progress
  //   setTimeout(() => setResetProgress(false), 0); // Re-enable progress for the new tab
  // };
  return (
    <div className="initiatives-view-tab">
      {tabData.map((tab, index) => (
        <Link to={tab?.link} key={index} target={tab.isExternal ? "_blank" : "_self"} className={`initiatives-view-tab-item ${index === activeTab ? "current-tab-active" : ""
          }`}>
          <div className="tab-content-top">
            <span className="tab-no">0{index + 1}.</span>
            <h3 className="tab-title">{tab.title}</h3>
            <p className="tab-desc">{tab.desc}</p>
          </div>
          <div className="tab-image-block">
            <img src={tab.imgSrc} alt={tab.title} />
          </div>
          {/* Progress Bar */}
          {index === activeTab && (
            <div className="card_fill-vertical">
              <div
                className="progress-bar"
                style={{
                  animation: resetProgress ? "none" : "progress-fill 5s linear",
                }}
              ></div>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default InitiativesTab;
