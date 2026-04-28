import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../asstes/styles/events.scss";
import "../asstes/styles/podcastPage.scss"
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsLetter from "./ReusableComponent/NewsLetter";

function PodcastsView() {

  const navigate = useNavigate();
  const staticCategories = ["Business", "Relationship", "Health", "Leadership"];

  const [podcasts, setPodcasts] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 25

  // Fetch API 
  const fetchPodcasts = async () => {
    try {
      const categoryParam = activeTab === "All" ? "" : `&category=${activeTab}`;

      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}api/podcasts?page=${page}&per_page=${limit}${categoryParam}`, {
        method: "GET"
      });

      if (response.status === 200) {
        const res = await response.json();

        if (res?.data?.podcasts) {

          setPodcasts((prev) => [...prev, ...res.data.podcasts]);

          setHasMore(res?.data?.pagination.next_page)
        }
        else if (response.status === 401) {
          navigate("/sign-in")
        }
        else {
          console.error("Unexpected API response structure");
          setHasMore(false);
        }
      }
    } catch (error) {
      console.error("Error fetching podcasts:", error);
    }
  };

  // Calling Fetch API 
  useEffect(() => {
    setPage(1);
    setPodcasts([]);
    setHasMore(true);
    fetchPodcasts();
    // eslint-disable-next-line
  }, [page, activeTab]);

  return (
    <div className="exce-podcast-page">
      <section className="page-banner banner podcast-banner banner-two">
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
                Podcast
              </li>
            </ol>
          </nav>
          <Row>
            <Col xs={12} md={8} lg={8} className="me-auto">
              <div className="about-banner-content">
                {/* <span className="sub-title">Bhupendra’s Events</span> */}
                <h1 className="banner-title">Podcasts</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="event-booking-sec pd-common bg-dark-b">
        <Container>
          <div className="title-sec mb-5">
            <h2 className="title-heading text-white text-start">Recent Podcasts</h2>
          </div>
          <div className="event-tab-menu-sec">
            <div className="event-tab-option exce-blogs-event-tabs">
              <div className="event-tab-menu">
                <button
                  onClick={() => setActiveTab("All")}
                  className={`tab-button ${activeTab === "All" ? "active" : ""}`}
                >
                  All
                </button>
                {staticCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(category)}
                    className={`tab-button ${activeTab === category ? "active" : ""}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="events-tab-content">
            <div className="row gy-4">
              <InfiniteScroll
                dataLength={podcasts.length}
                next={() => setPage((prev) => prev + 1)}
                hasMore={hasMore}
                loader={<h4 style={{ color: " white", textAlign: "center" }}>Loading...</h4>}
                className="row gy-4"
                endMessage={
                  !podcasts.length <= 0 ? (<p style={{ textAlign: 'center', color: "white", paddingTop: "1rem" }}>
                    <b>No More Data</b>
                  </p>) : <p class="text-white text-center pt-4">No Podcast Found with this Category </p>

                }>
                {podcasts
                  .filter((podcast) => activeTab === "All" || podcast?.category === activeTab)
                  .map((podcast, index) => (
                    <div
                      className="col-lg-4 col-md-4 col-sm-6 exce-podcast-page-card"
                      key={index}
                    >
                      <div className="bh-event-card">
                        <div className="bh-event-image">
                          <img
                            src={`${process.env.REACT_APP_API_BASE_URL}${podcast?.thumbnail}`}
                            alt={podcast?.title}
                          />
                          <div className="event-dt">
                            <div className="event-meta-tag">
                              <button className="event-badge wealth-btn">{podcast?.category}</button>
                            </div>
                          </div>
                        </div>
                        <div className="event-body-content">
                          <p className="tagline-event mb-2 fw-500">
                            {moment(podcast?.date).format("MMMM D, YYYY")} - Episode {podcast?.episode}
                          </p>
                          <h2 className="event-title mb-3">{podcast?.title}</h2>
                          <div className="event-footer">
                            <div className="btn-toolbar">
                              <Link to={`${podcast?.link}`}>
                                <button type="button" className="btn btn-default bh-btn-white">
                                  Watch Now
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </InfiniteScroll>
            </div>
          </div>
        </Container>
      </section>
      <NewsLetter />
    </div>
  );
}

export default PodcastsView;
