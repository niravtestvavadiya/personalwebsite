import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../asstes/styles/books.scss";

import NewsLetter from "./ReusableComponent/NewsLetter";
import data from "../data/bookData";

// ---------------------------------------------------

function BooksView() {

  return (
    <div className="exce-book-page">
      <section className="page-banner banner books-list-page banner-two">
        <Container>
          <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/">Information Center</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Books
              </li>
            </ol>
          </nav>
          <Row>
            <Col xs={12} md={8} lg={8} className="me-auto">
              <div className="about-banner-content">
                {/* <span className="sub-title">Bhupendra’s Events</span> */}
                <h1 className="banner-title">Books</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="books-list-page pd-common bg-dark-b">
        <Container>
          <div className="row gy-4">
            {data.map((item, index) => (
              <div className="col-lg-4 col-sm-6 exce-book-card" key={index}>
                <div className="bh-event-card">
                  <div className="bh-event-image">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="event-body-content">
                    <h2 className="event-title">{item.title}</h2>
                    <p className="tagline-event">Author: {item.author}</p>
                    <div className="event-footer">
                      <h3 className="event-price">
                        <i
                          className={`bi ${item.country === "India"
                            ? "bi-currency-rupee"
                            : "bi-currency-dollar"
                            }`}
                        ></i>
                        {item.offer_price}
                        {item.original_price > 0 && (
                          <span className="event-offer">
                            <i
                              className={`bi ${item.country === "India"
                                ? "bi-currency-rupee"
                                : "bi-currency-dollar"
                                }`}
                            ></i>
                            {item.original_price}
                          </span>
                        )}
                      </h3>
                    </div>
                    <div className="btn-toolbar justify-content-between books-btn-toolbar">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-default bh-btn-white buy-now exce-buy-now-book"
                      >
                        Buy Now
                      </a>
                      <button
                        type="button"
                        className="btn btn-default bh-btn-white learn-more"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-lg-12">
              <div className="btn-toolbar justify-content-center mt-5">
                <button
                  type="button"
                  className="btn btn-checkout bh-btn-dark-light exce-books-loadMore"
                >
                  Load More
                </button>
              </div>
            </div>
          </div>

        </Container>
      </section>

      <NewsLetter />
    </div>
  );
}

export default BooksView;
