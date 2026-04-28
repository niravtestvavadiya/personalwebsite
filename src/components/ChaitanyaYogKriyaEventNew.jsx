import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../asstes/styles/training.scss";
import BhupendraTrainingV1 from "../asstes/images/training/get-in-touch.png";
import AboutCorporateTrainings from "../asstes/images/training/about-training-corporate.png";
import TrainerProfileView from "../asstes/images/training/trainer-profile.png";
import philosopher from "../asstes/images/about/philosopher.png";
import NewsLetter from "./ReusableComponent/NewsLetter";
import SecondSectionImg from "../asstes/images/ChaitanyaYogKriyaImg/sectionTwoImg.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SpecificEventPageEventReuseNew from "./ReusableComponent/SpecificEventPageEventReuseNew";
import img1 from "../asstes/images/ChaitanyaYogKriyaImg/ChaitanyaSummit1.jpg";
import img2 from "../asstes/images/ChaitanyaYogKriyaImg/ChaitanyaSummit2.jpg";
import img3 from "../asstes/images/ChaitanyaYogKriyaImg/ChaitanyaSummit3.jpg";
import img4 from "../asstes/images/ChaitanyaYogKriyaImg/ChaitanyaSummit4.jpg";
import Disc1 from "../asstes/images/BQF_Self_Disc/1.png"
import Disc2 from "../asstes/images/BQF_Self_Disc/2.png"
import Disc3 from "../asstes/images/BQF_Self_Disc/3.png"
import Disc4 from "../asstes/images/BQF_Self_Disc/4.png"

// -------------------------------------

const ChaitanyaYogKriyaEventNew = () => {

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
    "Bhupendra Chaudhary’s Chaitanya Yog Kriya offers a modern, science-backed path to spirituality, aligning body, breath, and mind. It helps individuals break free from inner limitations, awaken higher consciousness, and live with clarity, joy, and purpose.";


  return (
    <>
      <div className="exce-training-corporate-page">

        {/* Banner  */}
        <section className="page-banner banner exce-chaitanya-banner banner-two">
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
                  Chaitanya Yog Kriya
                </li>
              </ol>
            </nav>
            <Row>
              <Col xs={12} md={8} lg={8} className="me-auto exce-training-corporate-heading">
                <div className="about-banner-content">
                  <span className="sub-title">
                    Chaitanya Yog Kriya
                  </span>
                  <h1 className="banner-title">
                    The Chaitanya Yog Kriya
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
              <p>
                Bhupendra Chaudhary’s philosophy behind Chaitanya Yog Kriya blends spirituality, philosophy, and modern science to guide individuals toward transformation. It emphasizes aligning the body, breath, and brain to dismantle limiting beliefs and connect with the Real Self. Through self-inquiry and consciousness expansion, it empowers people to live with purpose, joy, and holistic fulfillment.
              </p>
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
                    style={{ backgroundImage: `url(${Disc1})` }}
                  >
                    <div className="discovery-card-details">
                      <p className="discovery-card-details__heading">
                        Activating the Quantum Core
                      </p>
                      <p className="discovery-card-details__desc">
                        Unlock the deepest layers of your inner potential by aligning energy, awareness, and intelligence for peak leadership performance.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="discovery-slider-card"
                    style={{ backgroundImage: `url(${Disc2})` }}
                  >
                    <div className="discovery-card-details">
                      <p className="discovery-card-details__heading">
                        Mastering Inner Leadership
                      </p>
                      <p className="discovery-card-details__desc">
                        Develop emotional resilience and focused decision-making by leading from within, not from reaction.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="discovery-slider-card"
                    style={{ backgroundImage: `url(${Disc3})` }}
                  >
                    <div className="discovery-card-details">
                      <p className="discovery-card-details__heading">
                        Harmonizing Work and Self
                      </p>
                      <p className="discovery-card-details__desc">
                        Bridge personal purpose with professional excellence to create workplaces where authenticity and success coexist.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="discovery-slider-card"
                    style={{ backgroundImage: `url(${Disc4})` }}
                  >
                    <div className="discovery-card-details">
                      <p className="discovery-card-details__heading">
                        Living with Clarity and Presence
                      </p>
                      <p className="discovery-card-details__desc">
                        Cultivate heightened clarity and conscious presence to respond to challenges with wisdom and power.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        {/* Upcoming Events  */}
        <SpecificEventPageEventReuseNew filterData={"Chaitanya Yog Kriya"} />

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
                        src={img4}
                        alt="..." />
                    </div>
                    <div className="exce-summit-left-upper-big-img">
                      <img
                        src={img1}
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
                      src={img2}
                      alt="..." />
                  </div>
                  <div className="exce-summit-left-lower-small-img">
                    <img
                      src={img3}
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
                    Why Attend Chaitanya Yog Kriya ?
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
                      Discover Your Real Self and Expanded Consciousness
                    </h3>
                    <p className="philosopher__desc">
                      Unlock your true nature and tap into the quantum field of bliss and celebration. Design a life you truly love by awakening your expanded consciousness.
                    </p>
                  </div>
                  <div className="philosopher-book-list">
                    <span className="philosopher__no">02</span>
                    <h3 className="philosopher__title text-black">
                      Break Free from Limiting Beliefs
                    </h3>
                    <p className="philosopher__desc">
                      Demolish old paradigms and reconnect with your pure consciousness. Step into your authentic power by embracing your real self with clarity and strength.
                    </p>
                  </div>
                  <div className="philosopher-book-list">
                    <span className="philosopher__no">03</span>
                    <h3 className="philosopher__title text-black">
                      Experience Inner Divinity and Compassion
                    </h3>
                    <p className="philosopher__desc">
                      Unveil the divine entity you were born to be, radiating love, acceptance, and gratitude. Feel a deep, lasting connection within yourself and the world around you.
                    </p>
                  </div>
                  <div className="philosopher-book-list">
                    <span className="philosopher__no">04</span>
                    <h3 className="philosopher__title text-black">
                      Celebrate Collective Growth and Conscious Leadership
                    </h3>
                    <p className="philosopher__desc">
                      Join thousands of awakened souls walking the path of joy, freedom, and holistic living. Lead a life of celebration, impact, and true liberation, beyond just material success.
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

export default ChaitanyaYogKriyaEventNew
