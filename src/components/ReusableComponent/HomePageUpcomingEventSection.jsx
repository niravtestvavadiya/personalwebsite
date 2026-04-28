import React, { useEffect } from 'react'
import HomeUpcomingEvent from '../sharedPages/UpcomingEvent'
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

// -----------------------------------------------

const HomePageUpcomingEventSection = () => {

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
      <section className="bh-upcomming-event pd-common bg-dark-b exce-home-event-section" >
        <Container>
          <Row>
            <Col xs={12} md={8} lg={6} className="p-relative">
              <div >
                <h2 className="title-heading text-white title-left">
                  Upcoming Events
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
        <HomeUpcomingEvent />
      </section >
    </>
  )
}

export default HomePageUpcomingEventSection
