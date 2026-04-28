import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import PhilippUntersander from "../../asstes/images/testimonials/philipp.jpg";
import bainLogo from "../../asstes/images/testimonials/bain-company.png";
import IFSLogo from "../../asstes/images/testimonials/ifs-company.png";
import SophieGraham from "../../asstes/images/testimonials/sophie.jpg";
import { Container, Row, Col } from "react-bootstrap";
function TestimonialsSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="tab-slider">
      <Container>
        <div className="slider-tab-toolbar">
          <div className="testimonials-heading">
            <div className="title-sec">
              <h2 className="title-heading text-black">
                Testimonials of Change
              </h2>
            </div>
          </div>
          <div className="custom-navigation">
            <button ref={prevRef} className="previous-btn arrow-btn">
              <i className="bi bi-chevron-left"></i>
            </button>
            <button ref={nextRef} className="next-btn arrow-btn">
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </Container>

      <div className="swiper-content">
        <Swiper
          modules={[Navigation]}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          spaceBetween={15}
          slidesPerView={2.5}
          breakpoints={{
            350: {
              slidesPerView: 1, // Small devices (mobile) 
            },
            640: {
              slidesPerView: 1, // Small devices (mobile) 
            },
            768: {
              slidesPerView: 1, // Medium devices (tablets) 
            },
            1024: {
              slidesPerView: 1.5, // Large devices (desktop) 
            },
            1199: {
              slidesPerView: 2, // Large devices (desktop) 
            },
          }}
          centeredSlides={true}
          loop={false}
        >
          <SwiperSlide>
            <div className="bt-testimonials-card">
              <Row>
                <Col xs={12} md={6} lg={6} xl={6}>
                  <div className="testimonials-content">
                    <span className="company-logo">
                      <img src={bainLogo} alt="bainLogo" />
                    </span>
                    <h3 className="testimonials-message">
                      "Having a partner who understands the landscape is
                      essential. BrightPath is a team I trust to evaluate
                      projects with integrity."
                    </h3>
                    <div className="author-desc">
                      <span className="author-name">Philipp Untersander</span>
                      <small className="author-designation">
                        CEO & Owner Swifiss AG
                      </small>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={6} xl={6}>
                  <div className="testimonials-profile-user">
                    <img src={PhilippUntersander} alt="Philipp Untersander" />
                  </div>
                </Col>
              </Row>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bt-testimonials-card">
              <Row>
                <Col xs={12} md={6} lg={6} xl={6}>
                  <div className="testimonials-content">
                    <span className="company-logo">
                      <img src={IFSLogo} alt="IFS Logo" />
                    </span>
                    <h3 className="testimonials-message">
                      "With Bhupendra support we chose a multi-year contract,
                      providing certainty to the carbon project developers and
                      to our business."
                    </h3>
                    <div className="author-desc">
                      <span className="author-name">Sophie Graham</span>
                      <small className="author-designation">
                        CEO & Owner Swifiss AG
                      </small>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={6} xl={6}>
                  <div className="testimonials-profile-user">
                    <img src={SophieGraham} alt="Sophie Graham" />
                  </div>
                </Col>
              </Row>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bt-testimonials-card">
              <Row>
                <Col xs={12} md={6} lg={6} xl={6}>
                  <div className="testimonials-content">
                    <span className="company-logo">
                      <img src={bainLogo} alt="bainLogo" />
                    </span>
                    <h3 className="testimonials-message">
                      "Having a partner who understands the landscape is
                      essential. BrightPath is a team I trust to evaluate
                      projects with integrity."
                    </h3>
                    <div className="author-desc">
                      <span className="author-name">Philipp Untersander</span>
                      <small className="author-designation">
                        CEO & Owner Swifiss AG
                      </small>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={6} xl={6}>
                  <div className="testimonials-profile-user">
                    <img src={PhilippUntersander} alt="Philipp Untersander" />
                  </div>
                </Col>
              </Row>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bt-testimonials-card">
              <Row>
                <Col xs={12} md={6} lg={6} xl={6}>
                  <div className="testimonials-content">
                    <span className="company-logo">
                      <img src={IFSLogo} alt="IFS Logo" />
                    </span>
                    <h3 className="testimonials-message">
                      "With Bhupendra support we chose a multi-year contract,
                      providing certainty to the carbon project developers and
                      to our business."
                    </h3>
                    <div className="author-desc">
                      <span className="author-name">Sophie Graham</span>
                      <small className="author-designation">
                        CEO & Owner Swifiss AG
                      </small>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={6} xl={6}>
                  <div className="testimonials-profile-user">
                    <img src={SophieGraham} alt="Sophie Graham" />
                  </div>
                </Col>
              </Row>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bt-testimonials-card">
              <Row>
                <Col xs={12} md={6} lg={6} xl={6}>
                  <div className="testimonials-content">
                    <span className="company-logo">
                      <img src={bainLogo} alt="bainLogo" />
                    </span>
                    <h3 className="testimonials-message">
                      "Having a partner who understands the landscape is
                      essential. BrightPath is a team I trust to evaluate
                      projects with integrity."
                    </h3>
                    <div className="author-desc">
                      <span className="author-name">Philipp Untersander</span>
                      <small className="author-designation">
                        CEO & Owner Swifiss AG
                      </small>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={6} xl={6}>
                  <div className="testimonials-profile-user">
                    <img src={PhilippUntersander} alt="Philipp Untersander" />
                  </div>
                </Col>
              </Row>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bt-testimonials-card">
              <Row>
                <Col xs={12} md={6} lg={6} xl={6}>
                  <div className="testimonials-content">
                    <span className="company-logo">
                      <img src={IFSLogo} alt="IFS Logo" />
                    </span>
                    <h3 className="testimonials-message">
                      "With Bhupendra support we chose a multi-year contract,
                      providing certainty to the carbon project developers and
                      to our business."
                    </h3>
                    <div className="author-desc">
                      <span className="author-name">Sophie Graham</span>
                      <small className="author-designation">
                        CEO & Owner Swifiss AG
                      </small>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={6} xl={6}>
                  <div className="testimonials-profile-user">
                    <img src={SophieGraham} alt="Sophie Graham" />
                  </div>
                </Col>
              </Row>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default TestimonialsSlider;
