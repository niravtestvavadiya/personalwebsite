import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../asstes/styles/podcastDetail.scss";
import "../asstes/styles/blogs.scss";
import RecentProdcastSlider from "./sharedPages/RecentPodcastsSlider";

function BlogDetailView() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlogs] = useState([])

  const fetchApi = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}api/blog/${id}`, {
      method: "GET"
    });
    if (response.status === 200) {
      const res = await response.json();

      if (res?.data && res?.data?.Blogs) {
        setBlogs(res?.data?.Blogs);
      }
      else {
        console.error("Unexpected API response structure:", res);
      }
    }
    else if (response.status === 401) {
      navigate("/sign-in")
    }
    else {
      console.error("Unexpected API response structure:");
    }
  }

  useEffect(() => {
    fetchApi()
    // eslint-disable-next-line
  }, [])

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
                Blogs detail
              </li>
            </ol>
          </nav>
        </Container>
      </section>

      <section className="podcast-details-sec pd-common bg-dark-b">
        <Container>
          <Row>
            <Col xs={10} lg={10} className="mx-auto">
              <div className="podcast-preview blog-details">
                <h2 className="podcast-preview-title text-center mb-4">
                  {blog?.title}
                </h2>
                <div className="podcast-speaker-video">
                  <img src={`${process.env.REACT_APP_API_BASE_URL}${blog?.image}`} alt="Speaker" />
                </div>
                <div className="details-desc">
                  <div dangerouslySetInnerHTML={{ __html: blog?.description }} />
                  <div className="shared-by">
                    <h3 className="shared-label">Share Blog via :</h3>
                    <ul>
                      <li>
                        <i className="bi bi-youtube"></i>
                      </li>
                      <li>
                        <i className="bi bi-twitter-x"></i>
                      </li>
                      <li>
                        <i className="bi bi-instagram"></i>
                      </li>
                      <li>
                        <i className="bi bi-linkedin"></i>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bh-upcomming-event prodcast-slider-list pd-common bg-white">
        <RecentProdcastSlider />
      </section>
    </div>
  );
}

export default BlogDetailView;