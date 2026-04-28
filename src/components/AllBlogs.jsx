import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../asstes/styles/books.scss";
import "../asstes/styles/blogs.scss";
import moment from "moment";

function AllBlogsView() {

  const navigate = useNavigate();
  const staticCategories = ["Business", "Relationship", "Health", "Leadership"];

  const [blogs, setBlogs] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [loader, setLoader] = useState(false)
  const [activeTab, setActiveTab] = useState("All");
  const [page, setPage] = useState(1)
  const limit = 25

  // Fetching API 
  const fetchPodcasts = async () => {
    try {

      setLoader(true);

      const categoryParam = activeTab === "All" ? "" : `&category=${activeTab}`;

      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}api/blogs?page=${page}&per_page=${limit}${categoryParam}`, {
        method: "GET"
      });

      if (response.status === 200) {

        const res = await response.json();

        if (res?.data && res?.data?.Blogs) {
          setBlogs(prevBlogs => [...prevBlogs, ...res.data.Blogs]);
          setShowLoadMore(res?.data?.pagination.next_page)
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
    } catch (error) {
      console.error("Error fetching Blog", error);
    }
    finally {
      setLoader(false);
    }
  };

  // Load More Btn 
  const handleLoadMore = () => {
    setPage(pre => pre + 1)
  }

  // All , Different Category 
  const handleCategoryChange = (category) => {
    setActiveTab(category);
    setPage(1);
    setBlogs([]);
  };

  // Calling Fetch API 
  useEffect(() => {
    fetchPodcasts();
    // eslint-disable-next-line
  }, [page, activeTab]);

  return (
    <div>
      <section className="event-booking-sec pd-common bg-dark-b">
        <Container>
          <div class="title-sec mb-5"><h2 class="title-heading text-white text-start">All Blogs</h2></div>
          <div className="event-tab-menu-sec">
            <div className="event-tab-option exce-blogs-event-tabs">
              <div className="event-tab-menu">
                <button
                  onClick={() => handleCategoryChange("All")}
                  className={`tab-button ${activeTab === "All" ? "active" : ""}`}
                >
                  All
                </button>
                {staticCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => handleCategoryChange(category)}
                    className={`tab-button ${activeTab === category ? "active" : ""}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="events-tab-content">
            <div className="row gy-4 exce-blog-card-outer">
              {loader ? (
                <p className="text-white text-center pt-4">Loading...</p>
              ) : (
                blogs.length > 0 ? (
                  blogs
                    .filter((ele) => activeTab === "All" || ele?.category === activeTab)
                    .map((ele, index) => (
                      <div className="col-lg-4 col-md-4 col-sm-6 exce-blog-card" key={index}>
                        <div className="bh-event-card">
                          <div className="bh-event-image">
                            <img src={`${process.env.REACT_APP_API_BASE_URL}${ele?.image}`} alt="Event" />
                            <div className="event-dt">
                              <div className="event-meta-tag">
                                <button className="event-badge wealth-btn">
                                  {ele?.category}
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="event-body-content">
                            <p className="tagline-event mb-2 fw-500">{moment(ele?.created_at).format("MMMM D, YYYY")}</p>
                            <h2 className="event-title mb-3">
                              {ele?.title?.length > 45 ? `${ele.title.slice(0, 30)}...` : ele?.title}
                            </h2>

                            <div className="event-footer">
                              <div className="btn-toolbar">
                                <button
                                  type="button"
                                  className="btn btn-default"
                                  onClick={() => navigate(`/blog-detail/${ele.id}`)}
                                >
                                  Read More
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                ) : (
                  <p className="text-white text-center pt-4">No Blogs with this Category</p>
                )
              )}
              {
                showLoadMore && !loader && (
                  <div className="col-lg-12">
                    <div class="btn-toolbar justify-content-center mt-5">
                      <button
                        type="buttton"
                        class="btn btn-checkout bh-btn-dark-light exce-blog-page-load-more"
                        onClick={() => handleLoadMore()}
                      >
                        Load More
                      </button>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default AllBlogsView;
