import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../asstes/styles/podcastDetail.scss";
import Speaker from "../asstes/images/podcast/podcast-detail-speaker.png";
import PlayDetailsPodcastView from "./sharedPages/PlayDetailsPodcast";
import RecentProdcastSlider from "./sharedPages/RecentPodcastsSlider";
function PodcastsDetailView() {
    
  return (
    <div>
      <section className="page-banner banner podcast-banner-details banner-two">
        <Container>
          <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/">Event</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Podcast Details
              </li>
            </ol>
          </nav>
          
        </Container>
      </section>

      <section className="podcast-details-sec pd-common bg-dark-b">
        <Container> 
            <div className="podcast-speaker-video">
                <img src={Speaker} alt="Speaker" />
            </div>
            <Row>
                <Col xs={10} lg={10} className="mx-auto">
                <div className="podcast-preview">
                <h2 className="podcast-preview-title">Holy Grail of Investing - Chapter 1</h2>
                <p>Be part of an engaging online event that allows you to network with top professionals, take part in dynamic discussions, and acquire essential knowledge—all from the ease of your own home.  </p>
                <PlayDetailsPodcastView/>
                <div className="podcast-desc">
                    <p>Embark on a transformative journey with our Spiritual Podcast, a haven dedicated to exploring the deep realms of awareness, mindfulness, and the essence of being. Each episode serves as a treasure chest filled with engaging discussions, calming guided meditations, and inspiring stories from spiritual guides and fellow travelers. Discover essential tools and insights crafted to nurture your spirit and elevate your consciousness. Join us to ignite your inner wisdom and connect with a lively community of like-minded souls.</p>
                    <p>Our conversations cover a wide range of topics, from ancient philosophies to modern practices, ensuring there’s something enriching for everyone. Whether you seek clarity, peace, or a deeper connection with the universe, our podcast is your trusted companion on this journey.</p>
                    <p>Together, we unveil insights that can transform your daily life, guiding you to cultivate a more mindful existence. Each week, we invite remarkable guests who share their unique perspectives and experiences, enhancing our collective understanding.</p>
                    <p>Together, we explore the mysteries of life, harness the power of intention, and celebrate the beauty of genuine living. Our guided meditations are designed to help you relax, reflect, and reconnect with your true self.</p>
                    <p>Become a valued member of our growing family of seekers, where every voice matters and every story is cherished. Let’s walk this enlightening path together, as we learn, grow, and awaken to the magic of our shared journey. Dive deeper into the realms of spirituality with us, and let each episode inspire you to embrace the wonders of life.</p>
                    <p>Dive deeper into the realms of spirituality with us, and let each episode inspire you to embrace the wonders of life.</p>
                </div>
                <div className="shared-by">
                    <h3 className="shared-label">Share  Blog  via :</h3>
                    <ul>
                        <li><i className="bi bi-youtube"></i></li>
                        <li><i className="bi bi-twitter-x"></i></li>
                        <li><i className="bi bi-instagram"></i></li>
                        <li><i className="bi bi-linkedin"></i></li>
                    </ul>
                </div>
            </div>
                </Col>
            </Row>
           
          
        </Container>
      </section>

      <section className="bh-upcomming-event prodcast-slider-list pd-common bg-white">
        <RecentProdcastSlider/>
      </section> 
      
    </div>
  );
}

export default PodcastsDetailView;
