import React, { useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import CBSN_Logo from "../../asstes/images/NewHomePageLogo/CBSN-Logo.jpg"
// import NY_Weekly_Logo from "../../asstes/images/NewHomePageLogo/NY-Weekly-Cover-Page.webpjpg"
import Outlook_Logo from "../../asstes/images/NewHomePageLogo/Outlook-Logo.png"
import Daily_Scanner_Logo from "../../asstes/images/NewHomePageLogo/The-Daily-Scanner-1024x396.png"
import Abc_News_Logo from "../../asstes/images/NewHomePageLogo/abc_news.png"
import Forbes_Logo from "../../asstes/images/NewHomePageLogo/forbes-logo-png-transparent.png"
import Fox_News_Logo from "../../asstes/images/NewHomePageLogo/fox_news_logo.png"
import NBC_Logo from "../../asstes/images/NewHomePageLogo/nbc_logo.png"
import TOI_Logo from "../../asstes/images/NewHomePageLogo/times-of-india_logo.png"
import Usa_Today_Logo from "../../asstes/images/NewHomePageLogo/usa-today-full-color-logo-gannett-transparent.png"

// ----------------------------------------------

const HomePageTogetherSection = () => {

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200, // Animation duration (ms)
      easing: "ease-in-out", // Smooth animation effect
      once: true
    });
    // eslint-disable-next-line
  }, []);

  const logos = [
    { src: CBSN_Logo, alt: "CBSN" },
    // { src: NY_Weekly_Logo, alt: "NY Weekly" },
    { src: Outlook_Logo, alt: "Outlook" },
    { src: Daily_Scanner_Logo, alt: "Daily Scanner" },
    { src: Abc_News_Logo, alt: "ABC News" },
    { src: Forbes_Logo, alt: "Forbes" },
    { src: Fox_News_Logo, alt: "Fox News" },
    { src: NBC_Logo, alt: "NBC" },
    { src: TOI_Logo, alt: "TOI" },
    { src: Usa_Today_Logo, alt: "USA Today" }
  ];

  return (
    <>
      <section className="bh-together pd-common bg-dark-b exce-together-section" >
        <Container>
          <Row>
            <Col xs={12} md={8} lg={6} className="mx-auto">
              <div className="title-sec" data-aos="fade-up">
                <h2 className="title-heading text-white">
                  As Seen on
                </h2>
              </div>
            </Col>
          </Row>
        <Row className="logo-grid">
  {logos.map((logo, index) => (
    <Col
      key={index}
      xs={4}      
      sm={4}     
      md={3}     
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="d-flex justify-content-center"
    >
      <div className="services-box">
        <img src={logo.src} alt={logo.alt} />
      </div>
    </Col>
  ))}
</Row>
          {/* <Row className="g-2 item-hover outer-div-logo-row">           
            {logos.map((logo, index) => (
              <Col
                key={index}
                xs={4}
                md={3}
                lg={3}
                xl={2}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className='logo-outer-div flex justify-content-center align-middle'// Adds a slight delay to each column
              >
                <div className="services-box">
                  <img src={logo?.src} alt={logo?.alt} />
                </div>
              </Col>
            ))}
          </Row> */}
        </Container>
      </section >

    </>
  )
}

export default HomePageTogetherSection
