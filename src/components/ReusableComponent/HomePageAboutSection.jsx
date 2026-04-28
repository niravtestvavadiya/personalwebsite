import React, { useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import nextEvent from "../../asstes/images/backgroundimages/QuoteSectionIMg.jpg";
import ratingUserProfile from "../../asstes/images/sarah-johan.png";
import AboutPhotoShoot from "../../asstes/images/about-photoshoot.jpg";

// -----------------------------------------------------

const HomePageAboutSection = () => {

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200, // Animation duration (ms)
      easing: "ease-in-out", // Smooth animation effect
      once: true
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <section className="bh-about-sec pd-common bg-dark-b exce-home-page-AboutSection">
        <Container>
          {/* Title Section */}
          <div className="about-title title-sec" data-aos="fade-up">
            <h2 className="title-heading text-white">
              <span className="bh-tag-heading">
                Bhupendra<small>Chaudhary</small>
              </span>
              <i className="bi bi-quote"></i>Infinite Consciousness is not a pursuit for a few, but a gift available to every human being—waiting to be realized, awakened, and lived through purposeful awareness.
            </h2>
          </div>

          {/* About Content */}
          <Row className="gy-3 exce-about-row">
            {/* Left Section */}
            <Col xs={12} md={7} lg={7} className="mx-auto exce-about-col" data-aos="fade-right">
              <div className="hm-about-content">
                <div className="rating-view">
                  <ul>
                    <li>
                      Whether you're seeking clarity, deeper relationships, or the ultimate truth of existence, Bhupendra Chaudhary invites you to walk the path of the System of Ultimate Life (SOUL)—where Infinite Consciousness awakens, guiding you to live with purpose, connection, success and inner harmony.
                    </li>
                    <li>
                      <div className="media-rating">
                        <div className="user-pic">
                          <img
                            src={ratingUserProfile}
                            alt="Sarah & John, Newlyweds"
                          />
                        </div>
                        <div className="review-content">
                          <span className="review-value">
                            5.0 / 5
                            <small className="review-start">
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                            </small>
                          </span>
                          <p>
                            Bhupendra Chaudhary creates a community that brings together like-minded individuals to co-create their journeys in a very welcoming and safe space.
                          </p>
                          <span className="review-name">
                            Sarah & John, Newlyweds
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="profile-about" data-aos="zoom-in">
                  <img
                    src={nextEvent}
                    className="img-fluid"
                    alt="Next Event"
                  />
                </div>
              </div >
            </Col >
            <Col xs={12} md={3} lg={3} className="mx-auto exce-about-bh-photoshoot-col" data-aos="fade-left">
              <Link to={"https://www.usatoday.com/story/special/contributor-content/2025/03/21/awakening-genius-in-corporate-culture-a-new-approach-to-conscious-leadership-with-bhupendra-chaudhar/82597928007/"} target="_blank" className="text-black">
                <div className="bh-ab-photoshoot">
                  <div className="about-moment-card">
                    <div className="photo-shoot video-btn">
                      <img src={AboutPhotoShoot} alt="AboutPhotoShoot" />
                    </div>
                    <div className="about-moment-content" data-aos="flip-up">
                      <h3 className="moment-title">
                        Awakening Genius in Corporate Culture
                      </h3>
                      <div className="moment-desc">
                        <p>
                          A New Approach to Conscious Leadership with Bhupendra Chaudhary
                        </p>
                        <div className="go-link">
                          <button className="arrow-up-btn icon-bt-dark">
                            <i className="bi bi-arrow-up-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn-toolbar ms-3">
                    <Link to={"/about"} className="text-black">
                      <button
                        type="buttton"
                        className="btn btn-default btn-checkout bh-btn-white"
                        data-aos="fade-up"
                      >
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </Link>
            </Col>
          </Row >
        </Container >
      </section >
    </>
  )
}

export default HomePageAboutSection
