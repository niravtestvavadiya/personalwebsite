import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../asstes/styles/blogs.scss";
import AllBlogsView from "./AllBlogs";
// Blogs Images
import mentalHealthBlog from "../asstes/images/blogs/blog-mental-health.png";
import LatestResearch from "../asstes/images/blogs/latest-research.png";
import NewsLetter from "./ReusableComponent/NewsLetter";

// --------------------------------------------------

function BlogsViewPage() {

  return (
    <div className="exce-blog-page">
      <section className="page-banner banner bg-banner-dark banner-two ">
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
                Blogs
              </li>
            </ol>
          </nav>
          <Row>
            <Col xs={12} md={12} lg={13}>
              <div className="about-banner-content banner-header-desc">
                <h1 className="banner-title">Other Blogs Lorem ipsum </h1>
                <div className="banner-text-ct">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Diam imperdiet
                    vulputate morbi ac. Duis quis ridiculus fames consequat.
                    Nisl mattis sit lacus euismod et est amet in nunc.
                  </p>
                </div>
              </div>

              <div className="blogs-full-card after-overlay">
                <img
                  src={mentalHealthBlog}
                  alt="What leads to Mental health & wellbeing"
                />
                <div className="blogs-inner-view">
                  <div className="blogs-content-text">
                    <span className="date-b">4th April</span>
                    <h2 className="title-blog">
                      What leads to Mental health & wellbeing
                    </h2>
                    <div className="btn-toolbar blog-btn">
                      <button className="btn btn-default bh-btn-white read-more">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="latest-blog-view pd-common bg-dark-b pt-0">
        <Container>
          <div className="title-sec"><h2 className="title-heading text-white title-left">Latest Research</h2></div>
          <div className="bh-event-crad-full">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-12 col-md-6 exce-card-full-img-outer">
                <div className="bh-event-image">
                  <img src={LatestResearch} alt="Latest Research" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 col-md-6 exce-card-full-content-outer">
                <div className="bh-event-details">
                  <div className="bh-event-details-view">
                    <h2>What leads to Mental health & Wellbeing</h2>
                    <p className="desc">
                      Our conversations cover a wide range of topics, from
                      ancient philosophies to modern practices, ensuring there’s
                      something enriching for everyone. Whether you seek
                      clarity, peace, or a deeper connection with the universe,
                      our podcast is your trusted companion on this journey.
                    </p>
                    <div className="btn-toolbar blog-btn">
                      <button className="btn btn-default bh-btn-white read-more">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* All Blogs View */}
      <AllBlogsView />

      <NewsLetter />
    </div>
  );
}

export default BlogsViewPage;
