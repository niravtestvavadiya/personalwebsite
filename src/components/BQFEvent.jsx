import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import "../asstes/styles/events.scss";
import SpecificEventPageReusable from "./ReusableComponent/SpecificEventPageReusable";
import NewsLetter from "./ReusableComponent/NewsLetter";

// -------------------------------------------

function BQFEvents() {

  const navigate = useNavigate();


  const [events, setEvents] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);
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

        if (res.data && res.data.events) {
          const filteredEvents = res?.data?.events?.filter(event => event.category === "BQF");
          setEvents((prev) => [...prev, ...filteredEvents]);
          setShowLoadMore(res?.data?.pagination.next_page)
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
    finally {
      setLoader(false);
    }
  };

  // Onsite - Online Tab 
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setPage(1);
    setEvents([]);
  };

  // Upcoming - Past Dropdown 
  const handleDropDownChange = (option) => {
    setSelectedOption(option)
  }

  // Load More Btn 
  const handleLoadMore = () => {
    setPage(pre => pre + 1)
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
    <div className="exce-specific-event-page-main">
      <section className="page-banner banner meta-awakeing-banner banner-two">
        <Container>
          <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/">Events</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Bhupendraz QuantumForce
              </li>
            </ol>
          </nav>
          <Row>
            <Col xs={12} md={8} lg={8} className="me-auto">
              <div className="about-banner-content">
                <span className="sub-title">Bhupendra’s Events</span>
                <h1 className="banner-title">Bhupendraz QuantumForce</h1>
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
              <div className="filter-dropdown exce-specific-event-filter-dropdown">
                <DropdownButton id="dropdown-basic-button" title={selectedOption}>
                  <Dropdown.Item as={Link} to=" " onClick={() => handleDropDownChange("Past")}>
                    Past
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to=" " onClick={() => handleDropDownChange("Upcoming")}>
                    Upcoming
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
                  events.length > 0 ? (events?.map((ele, index) => {
                    return (
                      <SpecificEventPageReusable
                        data={ele}
                        key={index}
                        selectedOption={selectedOption}
                      />
                    )
                  })) : (
                    <p className="text-white text-center pt-4">No Events </p>
                  )
                )
              }
            </div>
            {
              showLoadMore && <div className="col-lg-12 exce-specific-event-btn-toll-out-div">
                <div className="btn-toolbar justify-content-center mt-5">
                  <button
                    type="buttton"
                    className="btn btn-default btn-checkout bh-btn-dark-light"
                    onClick={handleLoadMore}
                  >
                    Load More
                  </button>
                </div>
              </div>
            }
          </div>
        </Container>
      </section>
      <NewsLetter />
    </div >
  );
}

export default BQFEvents;
