import React, { useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import dateWithDestiney from "../../asstes/images/events/date-with-destiney.png";
import dateWithDestineyLogo from "../../asstes/images/events/bhupendra-date-with-icon.svg";
import eventTwo from "../../asstes/images/events/event-2.png";
import { Container } from "react-bootstrap"; 
function TrainingEvent() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);  
  return (
    <div className="tab-slider">
      <Container>
      <div className="slider-tab-toolbar">
          <div className="testimonials-heading">
            <div className="title-sec">
              <h2 className="title-heading text-white text-start">
              The Bhupendra <br/>Upcoming events
              </h2>
            </div>
          </div>
          <div className="custom-navigation">
            <button ref={prevRef} className="previous-btn arrow-btn">
              <i className="bi bi-chevron-left"></i>
            </button>
            <button ref={nextRef} className="next-btn arrow-btn">
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </Container>

      <div className="swiper-content">
      <div className="upcoming">
            <Swiper
              modules={[Navigation]}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              spaceBetween={15}
              slidesPerView={3.5}
              breakpoints={{
                640: {
                  slidesPerView: 1, // Small devices (mobile) 
                },
                768: {
                  slidesPerView: 1, // Medium devices (tablets) 
                },
                1024: {
                  slidesPerView: 2.5, // Large devices (desktop) 
                },
                1199: {
                  slidesPerView: 3, // Large devices (desktop) 
                },
              }}
              centeredSlides={true}
              loop={false}
            >
              <SwiperSlide>
                <div className="bh-event-card">
                  <div className="bh-event-image">
                    <img src={dateWithDestiney} alt="Date With Destiney" />
                    <div className="event-dt">
                      <div className="event-logo">
                        <img src={dateWithDestineyLogo} alt="Event Logo" />
                      </div>
                      <div className="event-meta-tag">
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-calendar-event"></i>
                          </span>
                          4th April
                        </p>
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-stopwatch"></i>
                          </span>
                          09:00 - 11:00 Am
                        </p>
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-geo-alt"></i>
                          </span>
                          Mumbai
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="event-body-content">
                    <h2 className="event-title">
                      Nam tristique ut vivamus aptent semper eget vitae.{" "}
                    </h2>
                    <div className="event-footer">
                      <h3 className="event-price">
                        <i className="bi bi-currency-rupee"></i>899{" "}
                        <span className="event-offer">
                          <i className="bi bi-currency-rupee"></i>1299
                        </span>
                      </h3>
                      <div className="btn-toolbar">
                        <button
                          type="buttton"
                          className="btn btn-default bh-btn-white"
                        >
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bh-event-card">
                  <div className="bh-event-image">
                    <img src={eventTwo} alt="Date With Destiney" />
                    <div className="event-dt">
                      <div className="event-meta-tag">
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-calendar-event"></i>
                          </span>
                          4th April
                        </p>
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-stopwatch"></i>
                          </span>
                          09:00 - 11:00 Am
                        </p>
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-geo-alt"></i>
                          </span>
                          Mumbai
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="event-body-content">
                    <h2 className="event-title">
                      Nam tristique ut vivamus aptent semper eget vitae.{" "}
                    </h2>
                    <div className="event-footer">
                      <h3 className="event-price">
                        <i className="bi bi-currency-rupee"></i>899{" "}
                        <span className="event-offer">
                          <i className="bi bi-currency-rupee"></i>1299
                        </span>
                      </h3>
                      <div className="btn-toolbar">
                        <button
                          type="buttton"
                          className="btn btn-default bh-btn-white"
                        >
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bh-event-card">
                  <div className="bh-event-image">
                    <img src={eventTwo} alt="Date With Destiney" />
                    <div className="event-dt">
                      <div className="event-meta-tag">
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-calendar-event"></i>
                          </span>
                          4th April
                        </p>
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-stopwatch"></i>
                          </span>
                          09:00 - 11:00 Am
                        </p>
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-geo-alt"></i>
                          </span>
                          Mumbai
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="event-body-content">
                    <h2 className="event-title">
                      Nam tristique ut vivamus aptent semper eget vitae.{" "}
                    </h2>
                    <div className="event-footer">
                      <h3 className="event-price">
                        <i className="bi bi-currency-rupee"></i>899{" "}
                        <span className="event-offer">
                          <i className="bi bi-currency-rupee"></i>1299
                        </span>
                      </h3>
                      <div className="btn-toolbar">
                        <button
                          type="buttton"
                          className="btn btn-default bh-btn-white"
                        >
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bh-event-card">
                  <div className="bh-event-image">
                    <img src={dateWithDestiney} alt="Date With Destiney" />
                    <div className="event-dt">
                      <div className="event-logo">
                        <img src={dateWithDestineyLogo} alt="Event Logo" />
                      </div>
                      <div className="event-meta-tag">
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-calendar-event"></i>
                          </span>
                          4th April
                        </p>
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-stopwatch"></i>
                          </span>
                          09:00 - 11:00 Am
                        </p>
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-geo-alt"></i>
                          </span>
                          Mumbai
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="event-body-content">
                    <h2 className="event-title">
                      Nam tristique ut vivamus aptent semper eget vitae.{" "}
                    </h2>
                    <div className="event-footer">
                      <h3 className="event-price">
                        <i className="bi bi-currency-rupee"></i>899{" "}
                        <span className="event-offer">
                          <i className="bi bi-currency-rupee"></i>1299
                        </span>
                      </h3>
                      <div className="btn-toolbar">
                        <button
                          type="buttton"
                          className="btn btn-default bh-btn-white"
                        >
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bh-event-card">
                  <div className="bh-event-image">
                    <img src={eventTwo} alt="Date With Destiney" />
                    <div className="event-dt">
                      <div className="event-meta-tag">
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-calendar-event"></i>
                          </span>
                          4th April
                        </p>
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-stopwatch"></i>
                          </span>
                          09:00 - 11:00 Am
                        </p>
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-geo-alt"></i>
                          </span>
                          Mumbai
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="event-body-content">
                    <h2 className="event-title">
                      Nam tristique ut vivamus aptent semper eget vitae.{" "}
                    </h2>
                    <div className="event-footer">
                      <h3 className="event-price">
                        <i className="bi bi-currency-rupee"></i>899{" "}
                        <span className="event-offer">
                          <i className="bi bi-currency-rupee"></i>1299
                        </span>
                      </h3>
                      <div className="btn-toolbar">
                        <button
                          type="buttton"
                          className="btn btn-default bh-btn-white"
                        >
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bh-event-card">
                  <div className="bh-event-image">
                    <img src={eventTwo} alt="Date With Destiney" />
                    <div className="event-dt">
                      <div className="event-meta-tag">
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-calendar-event"></i>
                          </span>
                          4th April
                        </p>
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-stopwatch"></i>
                          </span>
                          09:00 - 11:00 Am
                        </p>
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-geo-alt"></i>
                          </span>
                          Mumbai
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="event-body-content">
                    <h2 className="event-title">
                      Nam tristique ut vivamus aptent semper eget vitae.{" "}
                    </h2>
                    <div className="event-footer">
                      <h3 className="event-price">
                        <i className="bi bi-currency-rupee"></i>899{" "}
                        <span className="event-offer">
                          <i className="bi bi-currency-rupee"></i>1299
                        </span>
                      </h3>
                      <div className="btn-toolbar">
                        <button
                          type="buttton"
                          className="btn btn-default bh-btn-white"
                        >
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bh-event-card">
                  <div className="bh-event-image">
                    <img src={dateWithDestiney} alt="Date With Destiney" />
                    <div className="event-dt">
                      <div className="event-logo">
                        <img src={dateWithDestineyLogo} alt="Event Logo" />
                      </div>
                      <div className="event-meta-tag">
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-calendar-event"></i>
                          </span>
                          4th April
                        </p>
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-stopwatch"></i>
                          </span>
                          09:00 - 11:00 Am
                        </p>
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-geo-alt"></i>
                          </span>
                          Mumbai
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="event-body-content">
                    <h2 className="event-title">
                      Nam tristique ut vivamus aptent semper eget vitae.{" "}
                    </h2>
                    <div className="event-footer">
                      <h3 className="event-price">
                        <i className="bi bi-currency-rupee"></i>899{" "}
                        <span className="event-offer">
                          <i className="bi bi-currency-rupee"></i>1299
                        </span>
                      </h3>
                      <div className="btn-toolbar">
                        <button
                          type="buttton"
                          className="btn btn-default bh-btn-white"
                        >
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bh-event-card">
                  <div className="bh-event-image">
                    <img src={eventTwo} alt="Date With Destiney" />
                    <div className="event-dt">
                      <div className="event-meta-tag">
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-calendar-event"></i>
                          </span>
                          4th April
                        </p>
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-stopwatch"></i>
                          </span>
                          09:00 - 11:00 Am
                        </p>
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-geo-alt"></i>
                          </span>
                          Mumbai
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="event-body-content">
                    <h2 className="event-title">
                      Nam tristique ut vivamus aptent semper eget vitae.{" "}
                    </h2>
                    <div className="event-footer">
                      <h3 className="event-price">
                        <i className="bi bi-currency-rupee"></i>899{" "}
                        <span className="event-offer">
                          <i className="bi bi-currency-rupee"></i>1299
                        </span>
                      </h3>
                      <div className="btn-toolbar">
                        <button
                          type="buttton"
                          className="btn btn-default bh-btn-white"
                        >
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bh-event-card">
                  <div className="bh-event-image">
                    <img src={eventTwo} alt="Date With Destiney" />
                    <div className="event-dt">
                      <div className="event-meta-tag">
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-calendar-event"></i>
                          </span>
                          4th April
                        </p>
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-stopwatch"></i>
                          </span>
                          09:00 - 11:00 Am
                        </p>
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-geo-alt"></i>
                          </span>
                          Mumbai
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="event-body-content">
                    <h2 className="event-title">
                      Nam tristique ut vivamus aptent semper eget vitae.{" "}
                    </h2>
                    <div className="event-footer">
                      <h3 className="event-price">
                        <i className="bi bi-currency-rupee"></i>899{" "}
                        <span className="event-offer">
                          <i className="bi bi-currency-rupee"></i>1299
                        </span>
                      </h3>
                      <div className="btn-toolbar">
                        <button
                          type="buttton"
                          className="btn btn-default bh-btn-white"
                        >
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
      </div>
    </div>
  );
}

export default TrainingEvent;
