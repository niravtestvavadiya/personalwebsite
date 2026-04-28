import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import moment from "moment";

// ------------------------------------

const HomePageBlogsSection = () => {


  const navigate = useNavigate();

  const [blog, setBlog] = useState([]);


  // Blog API 
  const fetchBlogAPI = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}api/blogs`, {
        method: "GET"
      });
      if (response.status === 200) {
        const res = await response.json();

        if (res.data && res.data.Blogs) {
          const sortedBlogs = res.data.Blogs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
          setBlog(sortedBlogs.slice(0, 2));
        } else {
          console.error("Unexpected API response structure:", res);
        }
      }
      else if (response.status === 401) {
        navigate("/sign-in")
      }
      else {
        console.error("Unexpected API response structure");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClickBlog = (id) => {
    navigate(`/blog-detail/${id}`)
  }

  useEffect(() => {
    fetchBlogAPI();
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
      <section className="bh-blog-sec pd-common bg-dark-b exce-home-page-blogs" >
        <Container>
          <Row className="exce-blog-main-row">
            {/* Blog Title Section */}
            <Col xs={12} md={4} lg={4} xl={4} data-aos="fade-right" className="exce-blog-main-row-inner-col">
              <div className="blog-title title-with-desc">
                <div className="title-sec">
                  <h2 className="title-heading text-white title-left">
                    My blog
                  </h2>
                  <p>
                    Curious about what goes into a perfect photoshoot? Check out
                    my latest tips and behind-the-scenes stories.
                  </p>
                </div>
                <div className="btn-toolbar-title">
                  <Link to={"/blogs"}>
                    <button className="btn bh-btn-white view-all">
                      View All
                    </button>
                  </Link>
                </div>
              </div>
            </Col>

            {/* Blog Cards Section */}
            <Col xs={12} md={8} lg={8} xl={8} className="exce-blog-col-outer">
              <Row className="exce-blog-row-outer">
                {blog.length > 0 ? (blog.map((blog, index) => (
                  <Col
                    xs={12}
                    md={6}
                    lg={6}
                    xl={6}
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 150} // Staggered animation effect
                  >
                    <div
                      className="blog-card blog-1 bg-blog"
                      style={{
                        background: `url(${process.env.REACT_APP_API_BASE_URL}/${blog?.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      onClick={() => handleClickBlog(blog?.id)}
                    >
                      <div className="blog-header">
                        <span className="post-date">
                          {moment(blog?.created_at).format("MMM DD, YYYY")}
                        </span>
                        <span className="post-arrow">
                          <i className="bi bi-arrow-up-right"></i>
                        </span>
                      </div>
                      <h3 className="blog-title">{blog?.title}</h3>
                    </div>
                  </Col>
                ))) : (
                  <p className="text-center text-white">
                    No Blog Found
                  </p>
                )
                }
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HomePageBlogsSection
