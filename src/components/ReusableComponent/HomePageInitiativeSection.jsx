import React, { useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import InitiativesTab from "../sharedPages/InitiativesTab";

// ------------------------------------------

const HomePageInitiativeSection = () => {

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
      < section className="bh-initiatives pd-common bg-dark-b exce-home-page-our-initiatives" >
        <Container>
          <Row className="exce-initiative-row-main">
            <Col xs={12} md={4} lg={4} className="exce-initiative-col-main">
              <div className="title-with-desc">
                <div className="title-sec">
                  <h2 className="title-heading text-white title-left">
                    Bhupendra’s Initiatives
                  </h2>
                  <p>
                    Today’s climate leaders need access to data, expert advice,
                    and above all — carbon credit inventory at prices that fit
                    their sustainability strategies.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={8} lg={8} className="exce-initiative-col-another">
              <div className="our-initiatives-view">
                <InitiativesTab />
              </div>
            </Col>
          </Row>
        </Container>
      </section >
    </>
  )
}

export default HomePageInitiativeSection
