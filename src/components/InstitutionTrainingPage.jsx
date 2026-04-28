import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../asstes/styles/training.scss";
import BhupendraTrainingV1 from "../asstes/images/training/get-in-touch.png";
import EmotionalPhysicalHealing from "../asstes/images/training/EmotionalPhysicalHealing.png";
import StrongerRelationships from "../asstes/images/training/StrongerRelationships.png";
import Happiness from "../asstes/images/training/Happiness.png";
import TeamBuildingCollaboration from "../asstes/images/training/Team-Building-Collaboration.png";
import AboutCorporateTrainings from "../asstes/images/training/about-training-corporate.png";
import TrainerProfileView from "../asstes/images/training/trainer-profile.png";
import StackData from "../data/stackCardData";

// -----------------------------------------

const InstitutionTraining = () => {

  const bgColors = ["#7B7B7B", "#595959", "#444444", "#343434", "#262626"];

  return (
    <>

      <div className="exce-training-corporate-page">

        {/* Banner  */}
        <section className="page-banner banner training-banner-1 banner-two">
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
                  Institution
                </li>
              </ol>
            </nav>
            <Row>
              <Col xs={12} md={8} lg={8} className="me-auto exce-training-corporate-heading">
                <div className="about-banner-content">
                  <span className="sub-title">
                    Bhupendra’s Institution Trainings
                  </span>
                  <h1 className="banner-title">
                    Unlocking Excellence, Strengthening Teams
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* About Corporate  */}
        <section className="bh-about-training pd-common bg-dark-b">
          <Container>
            <div className="about-trainer-header">
              <div className="title-sec">
                <h2 className="title-heading text-white text-start">
                  About Corporate Trainings
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
              <p>Experience a remarkable journey with Bhupendra’s corporate training programs, designed to ignite unparalleled connectivity, inspire motivation, and enhance leadership. These sessions are tailored to help individuals and teams achieve higher levels of happiness, peace, and productivity in today’s dynamic corporate environment.</p>
            </div>
          </Container>
        </section>

        {/* Stack Section  */}
        <section className="exce-training-sec pd-common bg-dark-b">
          <div className="exce-training-sec__inner">
            <div className="title-sec mb-5">
              <h2 className="title-heading text-white">Our Training Options</h2>
            </div>
            <div className="exce-stack-design-outer">
              <div className="exce-stack-scroll-effects exce-stack-design-outer">
                {
                  StackData.map((ele, index) => {
                    const bgColor = bgColors[index % bgColors.length];
                    return (
                      <div
                        className="our-training-box exce-scroll-effect-card"
                        key={index}
                        style={{ backgroundColor: bgColor }}>
                        <div className="our-training-content">
                          <div className="our-training-leftside">
                            <h3 className="our-training-title">
                              <span className="sr-count">{index + 1}.</span> {ele?.title}
                            </h3>
                            <div className="training-desc">
                              <p>{ele?.description}</p>
                              <ul className="list-view">
                                {ele?.keyPoints?.map((point, i) => (
                                  <li key={i}>{point}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="our-training-picture">
                            <img
                              src={TeamBuildingCollaboration}
                              alt="Team Building and Collaboration"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })
                }

              </div>
            </div>
          </div>
        </section>

        {/* Bhupendra Experience */}
        <section className="bh-experience pd-common bg-dark-b">
          <Container>
            <div className="bh-experience-header mb-5">
              <div className="title-sec">
                <h2 className="title-heading text-white">
                  The Bhupendra Experience
                </h2>
              </div>
              <div className="header-desc">
                <p>
                  Through his presence, Bhupendra channels an energy that
                  participants often describe as life-changing. Beyond
                  professional success, these trainings inspire:
                </p>
              </div>
            </div>
            <Row className="gy-3">
              <Col xs={12} md={6} lg={4} sm={6}>
                <div className="experience">
                  <div className="experience-block">
                    <img
                      src={EmotionalPhysicalHealing}
                      alt="Emotional and PhysicalHealing"
                    />
                    <div className="experience-content">
                      <h3 className="experience-title">
                        Emotional and Physical Healing
                      </h3>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4} sm={6}>
                <div className="experience">
                  <div className="experience-block">
                    <img
                      src={StrongerRelationships}
                      alt="Stronger Relationships"
                    />
                    <div className="experience-content">
                      <h3 className="experience-title">Stronger Relationships</h3>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4} sm={6}>
                <div className="experience">
                  <div className="experience-block">
                    <img src={Happiness} alt="Happiness and PhysicalHealing" />
                    <div className="experience-content">
                      <h3 className="experience-title">
                        An Enduring Sense of Peace and Happiness
                      </h3>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Why Choose */}
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

      </div>

    </>
  )
}

export default InstitutionTraining
