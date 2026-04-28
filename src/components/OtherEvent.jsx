import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import "../asstes/styles/events.scss";
import OtherPageEventCard from "./ReusableComponent/OtherPageEventCard";
import NewsLetter from "./ReusableComponent/NewsLetter";

function OtherEventView() {

  const navigate = useNavigate();

  const [events, setEvents] = useState([]);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [loader, setLoader] = useState(false)
  const [activeTab, setActiveTab] = useState("onsite");
  const [selectedOption, setSelectedOption] = useState("Upcoming");
  const [page, setPage] = useState(1)
  const limit = 25

  // Fetching API 
  const fetchAPI = async (currentPage) => {
    try {

      setLoader(true);
      const upcomingEvent = selectedOption === "Upcoming" ? "true" : selectedOption === "Past" ? "false" : "true";
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}api/events?event_type=${activeTab}&upcoming_event=${upcomingEvent}&page=${currentPage}&per_page=${limit}`, {
        method: "GET"
      });

      if (response.status === 200) {
        const res = await response.json();

        if (res?.data?.pagination) {
          setHasMoreData(!!res.data.pagination.next_page);
        }

        if (res.data && res.data.events) {
          if (res.data.events.length > 0) {
            setEvents((prev) => {
              const updatedEvents = [...prev, ...res.data.events];
              return updatedEvents.sort((a, b) => new Date(b.start_date) - new Date(a.start_date));
            });

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
  };

  // Onsite - Online Tab 
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Upcoming - Past Dropdown 
  const handleDropDownChange = (option) => {
    setSelectedOption(option)
  }

  // Load More Btn 
  const handleLoadMore = () => {
    if (hasMoreData) {
      setPage(prev => prev + 1);
    } else {
      console.log("No more data");
    }
  };

  // Tab change Reset 
  useEffect(() => {
    setPage(1);
    setEvents([]);
    fetchAPI(1);
    // eslint-disable-next-line
  }, [activeTab, selectedOption]);


  // Calling Fetch API 
  useEffect(() => {
    if (page > 1) {
      fetchAPI(page);
    }
    // eslint-disable-next-line
  }, [page]);

  return (
    <div className="exce-all-event-page-main">
      <section className="page-banner banner other-event-banner banner-two">
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
                All Events
              </li>
            </ol>
          </nav>
          <Row>
            <Col xs={12} md={8} lg={8} className="me-auto">
              <div className="about-banner-content banner-heading-event">
                <span className="sub-title">Bhupendra’s Events</span>
                <h1 className="banner-title">All Events</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="event-booking-sec pd-common bg-dark-b">
        <Container>
          <div className="event-tab-menu-sec">
            <div className="event-tab-option">
              <div className="event-tab-menu">
                <button
                  onClick={() => handleTabChange("onsite")}
                  className={`tab-button ${activeTab === "onsite" ? "active" : ""
                    }`}
                >
                  Onsite Events
                </button>
                <button
                  onClick={() => handleTabChange("online")}
                  className={`tab-button ${activeTab === "online" ? "active" : ""
                    }`}
                >
                  Online Events
                </button>
              </div>
              <div className="filter-dropdown exce-all-event-page-filter">
                <DropdownButton id="dropdown-basic-button" title={selectedOption}>
                  <Dropdown.Item onClick={() => handleDropDownChange("Upcoming")}>
                    Upcoming
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDropDownChange("Past")}>
                    Past
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
          </div>
          <div className="events-tab-content">
            <div className="row gy-4">
              {
                loader ? (
                  <p className="text-white text-center pt-4">Loading...</p>
                ) : (
                  events?.length > 0 ? (
                    events?.map((ele, index) => {
                      return (
                        <OtherPageEventCard data={ele} key={index} selectedOption={selectedOption} />
                      )
                    })) : (
                    <p className="text-white text-center pt-4">No Events</p>
                  )
                )
              }
              {
                hasMoreData && !loader && (
                  <div className="col-lg-12">
                    <div className="btn-toolbar justify-content-center mt-5 exce-all-event-loadmore">
                      <button
                        type="button"
                        className="btn btn-default btn-checkout bh-btn-dark-light"
                        onClick={handleLoadMore}
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

      <NewsLetter />
    </div>
  );
}

export default OtherEventView;
