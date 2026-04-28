import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../asstes/styles/initiative.scss";
import ObjectiveFoundation from "./sharedPages/FoundationSlider";
import EmpowermentInitiatives from "../asstes/images/Initiative/Empowerment-Initiatives.jpg";
import EducationalDevelopment from "../asstes/images/Initiative/EducationalDevelopment.jpg";
import SpiritualGrowth from "../asstes/images/Initiative/SpiritualGrowth.jpg";


function InitiativeSoulFoundation() {
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("Empowerment Initiatives");

  // Images for each tab
  const images = {
    "Empowerment Initiatives": EmpowermentInitiatives,
    "Educational Development": EducationalDevelopment,
    "Spiritual Growth": SpiritualGrowth,
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(scrollTop / maxScroll, 1);
      const totalCharacters = text.length; // Total number of characters in the text
      setVisibleCharacters(Math.floor(scrollProgress * totalCharacters));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const text =
    "Transformation toward a better world for all. Together, we can inspire change, foster kindness, and create a community where everyone thrives. Let's embrace positivity and work hand in hand to build a brighter future.";

  return (
    <div className="exce-about-us">
      <section className="page-banner banner initiative-banner banner-two">
        <Container>
          <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/">Initiative</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Soul Foundation
              </li>
            </ol>
          </nav>
          <Row>
            <Col xs={12} md={8} lg={8} className="me-auto">
              <div className="about-banner-content">
                <span className="sub-title">Soul Foundation Initiative</span>
                <h1 className="banner-title">
                  Serving Selflessly, Transforming Lives
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-white pd-common typing-heading-effect">
        <Container>
          <Row>
            <Col xs={12} md={10} lg={10} className="mx-auto">
              <div className="title-sec">
                <h2 className="title-heading text-left banner-title-2">
                  {text.split("").map((char, index) => (
                    <span
                      key={index}
                      style={{
                        color: index < visibleCharacters ? "black" : "grey",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bh-objective pd-common bg-dark-b">
        <Container>
          <Row>
            <Col xs={12} md={8} lg={6} className="mx-auto">
              <div className="title-sec mb-5">
                <h2 className="title-heading text-white exce-objective-foundation-heading">
                  Objective of the Foundation
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="foundation-slider">
          <ObjectiveFoundation />
          <div className="btn-toolbar justify-content-center exce-initiave-slider-btn">
            <button
              type="buttton"
              className="btn btn-default btn-checkout bh-btn-white"
            >
              Know More
            </button>
          </div>
        </div>
      </section>
      <section className="bh-area-focus pd-common bg-white">
        <Container>
          <Row>
            <Col xs={12} md={8} lg={6} className="mx-auto">
              <div className="title-sec mb-5">
                <h2 className="title-heading exce-area-of-focus">Areas of Focus</h2>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center gy-3">
            <Col xs={12} md={7} lg={5}>
              <div className="key-point">
                <ul className="key-point-list">
                  {/* Empowerment Initiatives Tab */}
                  <li
                    className={`key-point-item ${activeTab === "Empowerment Initiatives" ? "active-menu" : ""
                      }`}
                    onClick={() => setActiveTab("Empowerment Initiatives")}
                  >
                    <h3 className="key-point-title">Empowerment Initiatives</h3>
                    <ul className="key-sub-point">
                      <li>Enhancing skills and performance management.</li>
                      <li>Improving disaster management practices.</li>
                      <li>Managing natural resources sustainably.</li>
                    </ul>
                  </li>

                  {/* Educational Development Tab */}
                  <li
                    className={`key-point-item ${activeTab === "Educational Development" ? "active-menu" : ""
                      }`}
                    onClick={() => setActiveTab("Educational Development")}
                  >
                    <h3 className="key-point-title">Educational Development</h3>
                    <ul className="key-sub-point">
                      <li>Improving literacy and education standards.</li>
                      <li>Providing access to learning resources.</li>
                      <li>Encouraging lifelong learning opportunities.</li>
                    </ul>
                  </li>

                  {/* Spiritual Growth Tab */}
                  <li
                    className={`key-point-item ${activeTab === "Spiritual Growth" ? "active-menu" : ""
                      }`}
                    onClick={() => setActiveTab("Spiritual Growth")}
                  >
                    <h3 className="key-point-title">Spiritual Growth</h3>
                    <ul className="key-sub-point">
                      <li>Promoting mindfulness and meditation.</li>
                      <li>Encouraging community involvement.</li>
                      <li>Fostering inner peace and balance.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={5} lg={5} className="mx-auto">
              <div className="key-point-image-tab">
                <div className="key-image">
                  <img
                    src={images[activeTab]} // Dynamically updates the image based on activeTab
                    alt={activeTab}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default InitiativeSoulFoundation;
