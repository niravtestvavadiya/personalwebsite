import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "../../asstes/styles/newsLetter.scss"
import { Link } from 'react-router-dom';

// ---------------------------------------

const NewsLetter = () => {

  return (
    <>
      <section className="subscribe-sec pd-common subscribe-banner">
        <Container>
          <Row>
            <Col xs={12} md={8} lg={8} xl={8} className="mx-auto">
              <div className="subscribe-dt">
                <div className="title-sec mb-4">
                  <h2 className="title-heading text-white exce-newsletter-heading">
                    Contact For Inquiries...
                  </h2>
                </div>
                <Link to="/contact">
                  <button
                    className="news-letter-contact">Contact</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default NewsLetter