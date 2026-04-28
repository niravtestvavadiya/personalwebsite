import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../asstes/styles/training.scss";
import BhupendraTrainingV1 from "../asstes/images/training/get-in-touch.png";
import AboutCorporateTrainings from "../asstes/images/training/about-training-corporate.png";
import TrainerProfileView from "../asstes/images/training/trainer-profile.png";
import philosopher from "../asstes/images/about/philosopher.png";
import NewsLetter from "./ReusableComponent/NewsLetter";
import SecondSectionImg from "../asstes/images/podcast/podcast-detail-speaker.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SpecificEventPageEventReuseNew from "./ReusableComponent/SpecificEventPageEventReuseNew";

// ---------------------------------

const MetaAwekingEventNew = () => {

  const [visibleCharacters, setVisibleCharacters] = useState(0);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(scrollTop / maxScroll, 1);
      const totalCharacters = text.length;
      setVisibleCharacters(Math.floor(scrollProgress * totalCharacters));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const text =
    "Meta Awakening, created by Bhupendra Chaudhary, is a transformative process based on the Self-Inquiry practical technique. It goes beyond mere contemplation to provide a hands-on experience that leads to self-discovery and personal growth.";

  return (
    <>
      <div className="exce-training-corporate-page">

        {/* Banner  */}
        <section className="page-banner banner exce-metaAweking-banner banner-two">
          <Container>
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/">Events</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Meta Awakening
                </li>
              </ol>
            </nav>
            <Row>
              <Col xs={12} md={8} lg={8} className="me-auto exce-training-corporate-heading">
                <div className="about-banner-content">
                  <span className="sub-title">
                    Meta Awakening
                  </span>
                  <h1 className="banner-title">
                    The Meta Awakening Event
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Video / Text Section  */}
        <section className="exce-training-page-video-text-section typing-heading-effect">
          <div className="exce-training-page-video-text-section__inner">
            <div className="training-sec-section-img-div">
              <img src={SecondSectionImg} alt="..." />
            </div>
            <div className="title-sec">
              <h2 className="title-heading text-left banner-title-2">
                {text.split("").map((char, index) => (
                  <span
                    key={index}
                    style={{
                      color: index < visibleCharacters ? "white" : "grey",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {char}
                  </span>
                ))}
              </h2>
            </div>
          </div>
        </section>

        {/* About Training  */}
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

        {/* Journey of self discovery  */}
        <section className="exce-journey-of-discovery">
          <div className="exce-journey-of-discovery__inner">
            <div className="discovery-left-section">
              <div className="discovery-left-heading">
                <p className="discovery-left-heading__p">
                  The Journey of Self-Discovery
                </p>
                <button className="discovery-left-heading__knowMore">
                  Know More
                </button>
              </div>
              <div className="discovery-navigation-btn-div">
                <button ref={prevRef}>
                  <i class="bi bi-chevron-left"></i>
                </button>
                <button ref={nextRef}>
                  <i class="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
            <div className="discovery-right-section">
              <Swiper
                modules={[Navigation]}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                spaceBetween={20}
                slidesPerView={3}
                breakpoints={{
                  350: {
                    slidesPerView: 1,
                    spaceBetween: 15
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 15
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 15
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 15
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 15
                  },
                  1536: {
                    slidesPerView: 3.5,
                    spaceBetween: 15
                  }
                }}
                centeredSlides={false}
                loop={false}
              >
                <SwiperSlide >
                  <div
                    className="discovery-slider-card"
                    style={{ backgroundImage: `url("https://images.unsplash.com/photo-1741462166411-b94730c55171?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8")` }}>
                    <div className="discovery-card-details">
                      <p className="discovery-card-details__heading">
                        Finding the Book
                      </p>
                      <p className="discovery-card-details__desc">
                        The journey begins with recognizing one's unique self, much like discovering a hidden book.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="discovery-slider-card"
                    style={{ backgroundImage: `url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2tzfGVufDB8fDB8fHww")` }}
                  >
                    <div className="discovery-card-details">
                      <p className="discovery-card-details__heading">
                        Turning the First Page
                      </p>
                      <p className="discovery-card-details__desc">
                        Embracing curiosity and taking that initial step forward is like turning the very first page of an exciting narrative.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="discovery-slider-card"
                    style={{ backgroundImage: `url("https://images.unsplash.com/photo-1741850826366-889f33a73327?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D")` }}
                  >
                    <div className="discovery-card-details">
                      <p className="discovery-card-details__heading">
                        Unfolding Chapters
                      </p>
                      <p className="discovery-card-details__desc">
                        As we delve deeper, life's experiences unfold like the captivating chapters within the book of our own existence.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="discovery-slider-card"
                    style={{ backgroundImage: `url("https://images.unsplash.com/photo-1741974865142-2c5b965bab06?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }}
                  >
                    <div className="discovery-card-details">
                      <p className="discovery-card-details__heading">
                        The Final Sentence
                      </p>
                      <p className="discovery-card-details__desc">
                        Reflecting on our journey, we reach a point of understanding, much like the satisfying close of a well-loved book.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide >
                  <div
                    className="discovery-slider-card"
                    style={{ backgroundImage: `url("https://images.unsplash.com/photo-1741462166411-b94730c55171?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8")` }}>
                    <div className="discovery-card-details">
                      <p className="discovery-card-details__heading">
                        Finding the Book
                      </p>
                      <p className="discovery-card-details__desc">
                        The journey begins with recognizing one's unique self, much like discovering a hidden book.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="discovery-slider-card"
                    style={{ backgroundImage: `url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2tzfGVufDB8fDB8fHww")` }}
                  >
                    <div className="discovery-card-details">
                      <p className="discovery-card-details__heading">
                        Turning the First Page
                      </p>
                      <p className="discovery-card-details__desc">
                        Embracing curiosity and taking that initial step forward is like turning the very first page of an exciting narrative.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="discovery-slider-card"
                    style={{ backgroundImage: `url("https://images.unsplash.com/photo-1741850826366-889f33a73327?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D")` }}
                  >
                    <div className="discovery-card-details">
                      <p className="discovery-card-details__heading">
                        Unfolding Chapters
                      </p>
                      <p className="discovery-card-details__desc">
                        As we delve deeper, life's experiences unfold like the captivating chapters within the book of our own existence.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="discovery-slider-card"
                    style={{ backgroundImage: `url("https://images.unsplash.com/photo-1741974865142-2c5b965bab06?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }}
                  >
                    <div className="discovery-card-details">
                      <p className="discovery-card-details__heading">
                        The Final Sentence
                      </p>
                      <p className="discovery-card-details__desc">
                        Reflecting on our journey, we reach a point of understanding, much like the satisfying close of a well-loved book.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        {/* Upcoming Events  */}
        <SpecificEventPageEventReuseNew filterData={"The Meta Awakening"} />

        {/* Fest or Summit Section  */}
        <section className="exce-summit-section pd-common">
          <div className="exce-summit-section__inner">
            <p className="exce-summit-section-heading">More Than a Fest or Summit</p>
            <div className="exce-summit-img-section-outer">
              <div className="exce-summit-left-section">

                <div className="exce-summit-outer-left-section">
                  <div className="exce-summit-left-section-upper">
                    <div className="exce-summit-left-upper-small-img">
                      <img
                        src="https://images.unsplash.com/photo-1741762764258-8f9348bdf186?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"
                        alt="..." />
                    </div>
                    <div className="exce-summit-left-upper-big-img">
                      <img
                        src="https://images.unsplash.com/photo-1741761446510-7804410eade3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
                        alt="..." />
                    </div>
                  </div>
                  <div className="exce-summit-mobile-right">
                    <div className="exce-summit-mobile-right-upper">
                      <img src="https://images.unsplash.com/photo-1743140467370-15795eba282c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D" alt="..." />
                    </div>
                    <div className="exce-summit-mobile-right-lower">
                      <img src="https://images.unsplash.com/photo-1741606552241-fbd67e574f7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D" alt="..." />
                    </div>
                  </div>
                </div>

                <div className="exce-summit-left-section-lower">
                  <div className="exce-summit-left-lower-big-img">
                    <img
                      src="https://images.unsplash.com/photo-1742827871480-4962b0653e1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
                      alt="..." />
                  </div>
                  <div className="exce-summit-left-lower-small-img">
                    <img
                      src="https://images.unsplash.com/photo-1741648711665-e1a8003b7891?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"
                      alt="..." />
                  </div>
                </div>

              </div>

              <div className="exce-summit-right-section">
                <div className="exce-summit-right-upper">
                  <img
                    src="https://images.unsplash.com/photo-1743078344181-6eeea5796e8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"
                    alt="..." />
                </div>
                <div className="exce-summit-right-lower">
                  <img
                    src="https://images.unsplash.com/photo-1726065235222-7d784fc40313?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="..." />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosopher Section  */}
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

        {/* Why Choose  */}
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
    </>
  )
}

export default MetaAwekingEventNew
