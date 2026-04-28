import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../asstes/styles/events.scss";
import "../asstes/styles/newsPage.scss"
import AboutPhotoShoot from "../asstes/images/about-photoshoot.jpg";
import NewsLetter from "./ReusableComponent/NewsLetter";

// -------------------------------------

const InTheNewsPage = () => {

  const navigate = useNavigate();
  const limit = 25

  const [hasMoreData, setHasMoreData] = useState(true);
  const [loader, setLoader] = useState(false)
  const [newsData, setNewsData] = useState([]);
  const [page, setPage] = useState(1)

  const fetchNewsApi = async () => {
    try {
      setLoader(true);
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}api/news?page=${page}&per_page=${limit}`, {
        method: "GET"
      });

      if (response.status === 200) {
        const res = await response.json();
        console.log("res", res)
        if (res?.data?.pagination) {
          console.log("res?.data?.pagination", res?.data?.pagination)
          setHasMoreData(!!res.data.pagination.next_page);
        }

        if (res.data && res.data.news) {
          if (res.data.news.length > 0) {

            const filteredNews = res.data.news
              .filter(item => item.status === 1)
              .sort((a, b) => new Date(b.date) - new Date(a.date));

            if (filteredNews.length > 0) {
              setNewsData(prev => [...prev, ...filteredNews]);
            }

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
        setHasMoreData(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setHasMoreData(false);
    }
    finally {
      setLoader(false);
    }
  }

  useEffect(() => {
    fetchNewsApi();
    // eslint-disable-next-line
  }, [page]);

  const handleLoadMoreClick = () => {
    if (hasMoreData) {
      setPage(prev => prev + 1);
    } else {
      console.log("No more data");
    }
  }

  return (
    <>
      <div className="exce-news-page">
        
        <section className="page-banner banner podcast-banner banner-two">
          <Container>
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  In The News
                </li>
              </ol>
            </nav>
            <Row>
              <Col xs={12} md={8} lg={8} className="me-auto">
                <div className="about-banner-content">
                  <h1 className="banner-title">News</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="event-booking-sec pd-common bg-dark-b">
          <Container>
            <div className="events-tab-content">
              <div className="row gy-4">
                {
                  newsData.length > 0 ? (
                    newsData.map((ele, index) => {
                      return (
                        <div className="col-lg-4 col-md-4 col-sm-6 exce-news-card-col" key={index}>
                          <div className="bh-event-card">
                            <div className="bh-event-image">
                              <img
                                src={
                                  ele?.image
                                    ? `${process.env.REACT_APP_API_BASE_URL}${ele.image}`
                                    : AboutPhotoShoot
                                }
                                alt="..."
                              />
                            </div>
                            <div className="event-body-content">
                              <p className="tagline-event d-flex justify-content-between mb-2 fw-500">
                                <div>
                                  {ele?.date && ele?.author && 'Author: '}
                                  {ele?.author && <>{ele.author}</>}
                                </div>
                                {ele?.date && <>{ele.date}</>}
                              </p>
                              <h2 className="event-title mb-3">
                                {ele?.title.length > 75 ? `${ele.title.slice(0, 75)}...` : ele.title}
                              </h2>
                              <div className="event-footer">
                                <div className="btn-toolbar">
                                  <Link to={ele?.article_link} target="_blank">
                                    <button type="button" className="btn btn-default bh-btn-white">
                                      Read
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  ) : (
                    <p className="text-center text-white">No News Found</p>
                  )
                }
              </div>
            </div>

          </Container>
          {
            hasMoreData && !loader && (<div className="text-center mt-5 news-load-more">
              <button onClick={handleLoadMoreClick}>
                Load More
              </button>
            </div>)
          }
        </section>
        <NewsLetter />
      </div >
    </>
  )
}

export default InTheNewsPage
