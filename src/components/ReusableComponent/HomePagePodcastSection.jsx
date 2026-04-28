import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import moment from "moment";
// import PodcastPlay from '../sharedPages/PodcastPlay';

// ----------------------------------------------------

const HomePagePodcastSection = () => {

  const navigate = useNavigate();
  const [podcasts, setPodcasts] = useState([]);

  // Podcast API 
  const fetchPodcastAPI = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}api/podcasts`, {
        method: "GET"
      });
      if (response.status === 200) {
        const res = await response.json();

        if (res.data && res.data.podcasts) {

          const filteredPodcasts = res.data.podcasts.filter(podcast => podcast.status === 1);
          if (filteredPodcasts.length > 0) {
            setPodcasts(res.data.podcasts);
          }
        } else {
          console.error("Unexpected API response structure:", res);
        }
      }
      else if (response.status === 401) {
        navigate("/sign-in")
      }
      else {
        console.error("Unexpected API response structure:");
      }

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const featuredPodcast = podcasts?.find((podcast) => podcast.rank === 1);
  const otherPodcasts = podcasts
    ?.filter((podcast) => podcast.rank !== 1)
    .sort((a, b) => a.rank - b.rank);

  useEffect(() => {
    fetchPodcastAPI();
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
      <section className="bh-podcast-sec pd-common bg-white exce-home-page-podcast">
        <Container>
          <div className="title-sec">
            <h2 className="title-heading text-black">Listen Now</h2>
          </div>
          <Row className="gy-3">
            <Col xs={12} md={12} lg={6} xl={5} className="mx-auto">
              {featuredPodcast ? (
                <Link to={featuredPodcast?.link} className='podcast-play-view' target='_blank'>
                  <div className="podcast-play-view">
                    <div className="podcast-play-img">
                      <img
                        src={`${process.env.REACT_APP_API_BASE_URL}${featuredPodcast?.thumbnail}`}
                        alt="podcastPlayView"
                      />
                    </div>
                    <div className="current-play-dt">
                      <ul>
                        <li>{featuredPodcast?.category}</li>
                        <li>
                          <span className="pd-date">
                            {moment(featuredPodcast?.date).format("MMM DD, YYYY")}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="track-play">
                      <h3 className="track-title text-black">{featuredPodcast?.title}</h3>
                      {/* <PodcastPlay link={featuredPodcast?.link} /> */}
                    </div>
                  </div>
                </Link>
              ) : (
                <p>No featured podcast found.</p>
              )}
            </Col>
            <Col xs={12} md={12} lg={6} xl={6} className="mx-auto">
              <div className="podcast-play-list">
                {otherPodcasts.length > 0 ? (
                  otherPodcasts.slice(0, 5).map((ele, index) => (
                    <Link to={ele?.link} target="_blank">
                      <div className="podcast-itme-list" key={index}>
                        <div className="podcast-media">
                          <div className="media-block exce-other-podcast-img-outer">
                            <img
                              src={`${process.env.REACT_APP_API_BASE_URL}${ele?.thumbnail}`}
                              alt={`podcast-${index + 1}`}
                            />
                          </div>
                          <div className="media-desc current-play-dt exce-other-podcast-card">
                            <ul>
                              <li>{ele?.category}</li>
                              <li>
                                <span className="pd-date">
                                  {moment(ele?.date).format("MMM DD, YYYY")}
                                </span>
                              </li>
                            </ul>
                            <h2 className="media-title">{ele?.title}</h2>
                          </div>
                        </div>
                        <div className="podcast-play-btn">
                          <Link to={ele?.link} target="_blank">
                            <button className="listen-btn">
                              <i className="bi bi-play-fill"></i>Listen
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p>No podcasts found.</p>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  )
}

export default HomePagePodcastSection
