import React, { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HomePageReusableEvents from "../ReusableComponent/HomePageReusableEvents";

// ------------------------------------------------

function HomeUpcomingEvent() {

  const navigate = useNavigate();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [events, setEvents] = useState([]);
  const [loader, setLoader] = useState(false)
  const activeTab = "upcoming"

  // Fetch API 
  const fetchAPI = async () => {
    try {
      setLoader(true);
      const upcomingEvent = activeTab === "upcoming" ? "true" : activeTab === "past" ? "false" : "true";
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}api/events?upcoming_event=${upcomingEvent}`, {
        method: "GET"
      });

      if (response.status === 200) {
        const res = await response.json();

        if (res.data && res.data.events) {
          setEvents(res.data.events);
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

  // Calling Fetch API 
  useEffect(() => {
    fetchAPI();
    AOS.init({
      duration: 1200, // Animation duration (ms)
      easing: "ease-in-out", // Smooth animation effect
      once: true
    }); // Initialize AOS
    // eslint-disable-next-line
  }, [activeTab]);


  return (
    <div className="tab-slider exce-home-tab-slider-event">
      <Container>
        <div className="slider-tab-toolbar exce-home-event-nav-outer" data-aos="fade-up">
          <div className="custom-navigation exce-home-event-navigation">
            <button ref={prevRef} className="previous-btn arrow-btn">
              <i className="bi bi-chevron-left"></i>
            </button>
            <button ref={nextRef} className="next-btn arrow-btn">
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div >
      </Container >

      <div className="swiper-content">
        {/* Dynamic Swiper based on Tab Selection */}
        <div className={activeTab === "upcoming" ? "upcoming" : "past"}>
          <Swiper
            modules={[Navigation]}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            spaceBetween={15} // Global space
            slidesPerView={3.5}
            breakpoints={{
              350: {
                slidesPerView: 1,
                spaceBetween: 15
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 15
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 15
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 15
              },
              1280: {
                slidesPerView: 2.5,
                spaceBetween: 15
              }
            }}

            centeredSlides={false}
            loop={false}
            className="home-page-swiper"
          >
            {
              loader ? (
                <p className="text-white text-center pt-4">Loading...</p>
              ) : (
                events.length > 0 ? (events?.map((ele, index) => (
                  <SwiperSlide key={index}>
                    <HomePageReusableEvents data={ele} key={index} activeTab={activeTab} />
                  </SwiperSlide>
                ))) : (
                  <p className="text-center text-white">
                    No Events
                  </p>
                )
              )
            }
          </Swiper>
        </div>
      </div>
    </div >
  );
}

export default HomeUpcomingEvent;