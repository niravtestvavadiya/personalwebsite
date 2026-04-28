import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../asstes/styles/training.scss";
import BhupendraTrainingV1 from "../asstes/images/training/get-in-touch.png";
import AboutCorporateTrainings from "../asstes/images/training/about-training-corporate.png";
import TrainerProfileView from "../asstes/images/training/trainer-profile.png";
import philosopher from "../asstes/images/about/philosopher.png";
import NewsLetter from "./ReusableComponent/NewsLetter";
import HomePageUpcomingEventSection from "../components/ReusableComponent/HomePageUpcomingEventSection";

// -------------------------------------------------------

function TrainingV2Page() {

  return (
    <div className="exce-training-corporate-page">
      <section className="page-banner banner training-v2 banner-two">
        <Container>
          <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/">Training</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Institutions
              </li>
            </ol>
          </nav>
          <Row>
            <Col xs={12} md={8} lg={8} className="me-auto exce-training-corporate-heading">
              <div className="about-banner-content">
                <span className="sub-title">
                  Bhupendra’s Institutions Trainings
                </span>
                <h1 className="banner-title">
                  A Spiritual Intellectual Summit
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bh-about-training pd-common bg-dark-b">
        <Container>
          <div className="about-trainer-header">
            <div className="title-sec">
              <h2 className="title-heading text-white text-start">
                The Philosophy Behind Meta Awakening
              </h2>
            </div>
            <div className="about-trainer-header-img">
              <img
                src={AboutCorporateTrainings}
                alt="About Corporate Trainings"
              />
            </div>
          </div>
          <div className="about-trainer-berif">
            <div className="trainer-profile">
              <img src={TrainerProfileView} alt="Trainer Profile" />
            </div>
            <p>Bhupendra Chaudhary envisions every individual as a unique book, with their 'Real Self' hidden beneath layers of deeds, desires, and emotions. This metaphor of a book symbolizes the richness and depth of human existence.</p>
          </div>
        </Container>
      </section>

      {/* Upcoming Events  */}
      <HomePageUpcomingEventSection />

      <section className="meet-philosopher-sec training-philosopher pd-common bg-white">
        <Container>
          <Row className="gy-3 exce-institute-phil-row">
            <Col xs={12} md={6} lg={7} className="exce-institute-phil-col">
              <div className="title-sec mb-5">
                <h2 className="title-heading text-black title-left">
                  Meet Philosopher - Scientist, Sri Bhupendra
                </h2>
              </div>
              <div className="philosopher-img">
                <img src={philosopher} alt="philosopher" />
              </div>
            </Col>
            <Col xs={12} md={5} lg={4} className="mx-auto exce-institute-phil-detail">
              <div className="training-philosopher-grid">
                <div className="philosopher-book-list">
                  <span className="philosopher__no">01</span>
                  <h3 className="philosopher__title text-black">
                    A Bridge of Artistry
                  </h3>
                  <p className="philosopher__desc">
                    Discover your REAL-SELF and Expanded Consciousness to create a life you would love, in the quantum field of 'Ultimate Bliss & Celebration'.
                  </p>
                </div>
                <div className="philosopher-book-list">
                  <span className="philosopher__no">02</span>
                  <h3 className="philosopher__title text-black">
                    Empowering Local Artisans
                  </h3>
                  <p className="philosopher__desc">
                    Regenerate your paradigms after demolishing your limiting beliefs by connecting with your REAL-SELF and experiencing the PURE CONSCIOUSNESS.
                  </p>
                </div>
                <div className="philosopher-book-list">
                  <span className="philosopher__no">03</span>
                  <h3 className="philosopher__title text-black">
                    A Bridge of Artistry
                  </h3>
                  <p className="philosopher__desc">
                    Discover your REAL-SELF and Expanded Consciousness to create a life you would love, in the quantum field of 'Ultimate Bliss & Celebration'.
                  </p>
                </div>
              </div>

            </Col>
          </Row>
        </Container>
      </section>

      <section className="bh-collaboratio pd-common bg-dark-b corporate-training">
        <Container className="exce-training-corporate-get-in-touch">
          <Row className="gy-3 exce-get-in-inner-row">
            <Col xs={12} md={12} lg={12} className="exce-get-in-inner-col">
              <div className="event-card corporate-box">
                <div className="event-image">
                  <img
                    src={BhupendraTrainingV1}
                    alt="Bhupendra’s Corporate Trainings"
                  />
                  <div className="event-desc-img">
                    <h3 className="event-sub-title">
                      Why Choose Bhupendra’s Corporate Trainings ?
                    </h3>
                    <p>
                      Through his presence, Bhupendra channels an energy that
                      participants often describe as life-changing. Beyond
                      professional success, these trainings inspire:
                    </p>
                    <div className="btn-toolbar">
                      <button
                        type="buttton"
                        className="btn btn-default btn-checkout bh-btn-white"
                      >
                        Get in Touch
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <NewsLetter />
    </div>
  );
}

export default TrainingV2Page;
