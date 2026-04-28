import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import posterImg from "../../asstes/images/about/philosopher.png"

// ------------------------------------------

const HomePageHeroSection = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // Video Click Function 
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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
      <section className="bh-home-banner banner exce-home-page-heroSection">
        <Container>
          <Row className="align-items-end exce-heroSection-main-div">
            <Col xs={12} md={8} lg={9} className="exce-heroSection-main-col">
              <div className="home-banner-content banner-desc" data-aos="fade-up">
                <h1 className="bh-title">
                  Bhupendra <span className="text-grey">Chaudhary</span>
                </h1>
                <h2 className="banner-title">
                  Evolving <span className="text-orange">Humanity</span> with the Science of Spirituality{" "}
                </h2>
              </div>
            </Col>
            <Col xs={12} md={4} lg={3} className="exce-video-outer">
              <div className="event-card" data-aos="zoom-in">
                <Link to="" className="event-dt">
                  <div className="event-image exce-video-img-card" onClick={handleVideoClick}>
                    <video
                      ref={videoRef}
                      src="/hero-section-video.mp4"
                      className="img-fluid"
                      controls
                      poster={posterImg}
                      autoPlay={false}
                    />
                  </div>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HomePageHeroSection
