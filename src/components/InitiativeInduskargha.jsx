import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import OurProductSlider from "./sharedPages/OurProductPage";
import "../asstes/styles/initiative.scss";
import VisionAndPurpose from "../asstes/images/Initiative/vision-purpose.png";
import FarmersArtisans from "../asstes/images/Initiative/FarmersArtisans.jpg";
import SustainablePractices from "../asstes/images/Initiative/SustainablePractices.jpg";

function InitiativeInduskargha() {
  const [visibleCharacters, setVisibleCharacters] = useState(0);

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
    "Induskargha is a unique platform celebrating India’s rich cultural heritage, traditional arts, and crafts while promoting a sustainable and healthy lifestyle.";

  return (
    <div className="exce-about-us">
      <section className="page-banner banner initiative-banner-three banner-two">
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
                Induskargha
              </li>
            </ol>
          </nav>
          <Row>
            <Col xs={12} md={8} lg={8} className="me-auto">
              <div className="about-banner-content">
                <span className="sub-title">Induskargha Initiative</span>
                <h1 className="banner-title">
                  Preserving Heritage, Empowering Artisans
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
      <section className="bh-vision pd-common bg-dark-b">
        <Container>
          <div className="header-toolbar mb-5 exce-vison-purpose">
            <div className="title-sec exce-mision-vision-outer">
              <h2 className="title-heading text-white exce-mision-vision-heading">Vision and Purpose</h2>
            </div>
            <div className="btn-toolbar">
              <button
                type="buttton"
                className="btn btn-default btn-checkout bh-btn-white"
              >
                Know More
              </button>
            </div>
          </div>
          <Row className="gy-3 align-items-center exce-vison-box">
            <Col xs={12} lg={4} md={5} xl={4} className="exce-vision-inner">
              <div className="vision-card-list">
                <div className="vision-card">
                  <span className="vision-no">1</span>
                  <div className="purpose-dt">
                    <h3 className="purpose-title">A Bridge of Artistry</h3>
                    <p>
                      Induskargha connects Indian weavers, embroiderers, and
                      craftsmen with modern consumers who value authenticity and
                      quality.
                    </p>
                  </div>
                </div>
                <div className="vision-card">
                  <span className="vision-no">2</span>
                  <div className="purpose-dt">
                    <h3 className="purpose-title">Empowering Local Artisans</h3>
                    <p>
                      The initiative provides artisans with a platform to
                      showcase their talents to a global audience, ensuring they
                      gain recognition and support.
                    </p>
                  </div>
                </div>
                <div className="vision-card">
                  <span className="vision-no">3</span>
                  <div className="purpose-dt">
                    <h3 className="purpose-title">A Bridge of Artistry</h3>
                    <p>
                      Deeply rooted in a love for Indian culture, Induskargha
                      promotes products that are healthy, toxin-free, &
                      environmentally friendly.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={8} md={7} xl={8} className="exce-vision-img-div">
              <div className="vision-banner">
                <img src={VisionAndPurpose} alt="Vision and Purpose" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bh-collaboratio pd-common bg-white">
        <Container>
          <div className="title-sec text-center mb-5">
            <h2 className="title-heading text-black banner-title-2">
              Collaborations and Impact
            </h2>
          </div>
          <Row className="gy-3">
            <Col xs={12} md={6} lg={6}>
              <div className="event-card">
                <div className="event-image">
                  <img src={FarmersArtisans} alt="Farmers and Artisans" />
                  <div className="event-desc-img">
                    <h3 className="event-sub-title">Farmers and Artisans</h3>
                    <p>
                      Induskargha works closely with farmers and artisans to
                      bring their creations to urban markets.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <div className="event-card">
                <div className="event-image">
                  <img src={SustainablePractices} alt="Sustainable Practices" />
                  <div className="event-desc-img">
                    <h3 className="event-sub-title">Sustainable Practices</h3>
                    <p>
                      By promoting eco-friendly and toxin-free products, the
                      initiative supports a healthier planet and lifestyle.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="our-philosophy pd-common bg-white">
        <div className="heading-full-view">
          <div className="title-sec text-center">
            <h2 className="title-heading text-black marquee-wrapper">
              <div className="marquee">
                <span>Our Philosophy and Mission - </span>
                <span>Our Philosophy and Mission&nbsp;&nbsp;&nbsp;</span>
              </div>
            </h2>
          </div>
        </div>
        <Container>
          <div className="mission-card-list">
            <div className="mission-card">
              <Row className="gy-3">
                <Col xs={12} md={6} lg={5} className="me-auto">
                  <div className="mission-view-block">
                    <img src={FarmersArtisans} alt="Farmers and Artisans" />
                    <div className="mission-tag">
                      <span className="tag-philosophy">
                        Redefining Wellness
                      </span>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  <div className="bh-mission">
                    <h3>
                      Induskargha promotes wellness through pure, healthy, and
                      organic products crafted with innovative traditions.
                    </h3>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="mission-card">
              <Row className="gy-3">
                <Col xs={12} md={6} lg={5} className="me-auto">
                  <div className="mission-view-block">
                    <img src={FarmersArtisans} alt="Farmers and Artisans" />
                    <div className="mission-tag">
                      <span className="tag-philosophy">
                        For a Better Tomorrow
                      </span>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  <div className="bh-mission">
                    <h3>
                      By merging tradition with sustainability, Induskargha aims to create a harmonious balance between culture, health, and the environment.
                    </h3>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
      <section className="bh-our-product pd-common bg-dark-b exce-our-product-div">
        <OurProductSlider />
      </section>
    </div>
  );
}

export default InitiativeInduskargha;
