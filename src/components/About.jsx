import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import "../asstes/styles/about.scss";
// Import local images
// import bhupendraImage from "../asstes/images/about/bhupendra.png";
import philosopher from "../asstes/images/about/Philosopher.jpg";
import NewsLetter from "./ReusableComponent/NewsLetter";
import NewBookBg from "../asstes/images/about/NewBookBg.jpg"

// -----------------------------------------------------------------

function About() {
  return (
    <div className="exce-about-us">
      <section className="page-banner banner">
        <Container>
          <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About
              </li>
            </ol>
          </nav>
          <Row className="align-items-end">
            <Col xs={12} md={6} lg={6} className="me-auto">
              <div className="about-banner-content">
                <span className="sub-title">
                  Bhupendra's Corporate Trainings
                </span>
                <h1 className="banner-title banner-title-about-banner">
                  A Man on a Mission To make
                  <span className="text-orange">life meaningful</span>
                </h1>
              </div>
            </Col>
            <Col xs={12} md={5} lg={5} className="ms-auto">
              <div className="bh-profile-banner">
                {/* <img src={bhupendraImage} alt="bhupendraImage" /> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-white pd-common about-desc-sec">
        <Container>
          <Row>
            <Col xs={12} className="mx-auto">
              <div className="details-desc">
                <div className="exce-about-insp-heading">
                  <p>An Inspirational Life With Many Destinies</p>
                  <span></span>
                </div>
                <h2 className="qute-msg-title">
                  <strong>"Infinite Mind is a gift to all,"</strong> says Bhupendra Chaudhary—a visionary Philosopher-Scientist, whose life and work embody the seamless integration of science and spirituality. Through his unique approach to consciousness, he invites individuals and organizations to explore deeper dimensions of the 'Real Self', harmonize with universal intelligence, and transform knowledge into pragmatic wisdom.
                  <br />
                  <br />
                  Bhupendra Chaudhary is a globally respected entrepreneur, investor, trainer, author, speaker, healer, and corporate consultant. As an internationally recognized peak performance strategist, he has consistently demonstrated the clarity, resilience, and foresight to succeed across industries and inspire change at every level of society.
                  <br />
                  <br />
                  From advising CEOs and political leaders to mentoring individuals in underrepresented communities, Bhupendra's mission is simple yet profound: to convert potential into performance. With exceptional mastery over human behavior and decision-making, he empowers others to strike a graceful balance between thought and action, emotion and reason—unlocking conscious leadership and purposeful living in today's complex world.
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bh-journey-sec pd-common bg-dark-b">
        <Container>
          <Row>
            <Col xs={12} className="mx-auto">
              <div className="title-sec mb-5">
                <h2 className="title-heading text-white banner-title">
                  Bhupendra Chaudhary's Research and Philosophy
                </h2>
              </div>
            </Col>
            <Col xs={12} md={9} lg={9} className="mx-auto">
              <ul className="journey-timeline">
                <li>
                  <div className="timeline-content">
                    <span className="timeline__no">01</span>
                    <div className="timeline__content">
                      <h2 className="timeline__title">The Timeless Quest for Consciousness</h2>
                      <p className="timeline__desc">
                        Consciousness has been explored for centuries—from ancient scriptures to modern science.
                        Today, it stands at the crossroads of neuroscience, psychology, cognitive science, and philosophy.
                        <br />
                        Breakthroughs in brain imaging and altered states are deepening our understanding of this profound phenomenon.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-content">
                    <span className="timeline__no">02</span>
                    <div className="timeline__content">
                      <h2 className="timeline__title">Why Consciousness Matters to You</h2>
                      <p className="timeline__desc">
                        Consciousness isn't just a research topic—it defines the quality of your life.
                        Your level of awareness influences your clarity, decisions, relationships, and success.
                        In the age of rapid digital evolution, it is the most practical tool for living the life of your dreams.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-content">
                    <span className="timeline__no">03</span>
                    <div className="timeline__content">
                      <h2 className="timeline__title">The Conscious Machine: A Near Future</h2>
                      <p className="timeline__desc">
                        Imagine a world where machines mimic human behavior with alarming accuracy.
                        As AI approaches sentience, humanity faces a defining moment - will we evolve or be outpaced?
                        <br />
                        This is not just technological speculation; it's a looming challenge to human purpose and supremacy.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-content">
                    <span className="timeline__no">04</span>
                    <div className="timeline__content">
                      <h2 className="timeline__title">Expanded Consciousness: Your Edge in the Race</h2>
                      <p className="timeline__desc">
                        Victory belongs to those who are not just intelligent, but consciously awake.
                        Expanded Consciousness brings speed, clarity, agility, and inner peace - your true competitive edge.
                        <br />
                        This isn't just survival, it's transcendence through joy, awareness, and liberation.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bh-meta-awakening about-bh-sec bg-book-banner pd-common">
        {/* <Container>
          <div className="meta-awakening-desc">
            <p>THE BOOKS BY  </p>
          </div>
        </Container>
        <div className="title-sec">
          <h2 className="title-heading">Bhupendra Chaudhary's </h2>
        </div> */}
        <img src={NewBookBg} alt="..." />
      </section>
      <section className="meet-philosopher-sec pd-common bg-dark-b">
        <Container>
          <Row>
            <Col xs={12} md={8} lg={7} className="p-relative outer-banner-title-exce">
              <div className="title-sec mb-5">
                <h2 className="title-heading text-white title-left banner-title">
                  Meet Philosopher - Scientist, Sri Bhupendra
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="gy-3">
            <Col xs={12} md={6} lg={6} className="exce-philosopher-img-outer">
              <div className="philosopher-img">
                <img src={philosopher} alt="philosopher" />
              </div>
            </Col>
            <Col xs={12} md={4} lg={4} className="mx-auto exce-philosopher-img-outer">
              <div className="philosopher-book-list">
                <span className="philosopher__no">01</span>
                <h3 className="philosopher__title">
                  Decades of Research and Global Experience
                </h3>
                <p className="philosopher__desc">
                  Sri Bhupendra has dedicated the last few decades to studying
                  the science of spirituality, consciousness, and
                  transformational principles. His global travels have exposed
                  him to cross-cultural challenges, inspiring active
                  participation in social and leadership programs at esteemed
                  institutions like Cambridge University, Harvard Business
                  School, and Stanford University. These experiences have
                  equipped him with research-based tools to address fundamental
                  human challenges effectively.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </div>
  );
}

export default About;