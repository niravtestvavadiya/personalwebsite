import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import dateWithDestiney from "../../asstes/images/events/date-with-destiney.png";
import dateWithDestineyLogo from "../../asstes/images/events/bhupendra-date-with-icon.svg";
import { Container } from "react-bootstrap";
function RecentProdcastSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();
  return (
    <div className="tab-slider">
      <Container>
        <div className="slider-tab-toolbar mb-5">
          <div className="testimonials-heading">
            <div className="title-sec mb-0">
              <h2 className="title-heading text-black text-start">
                Bhupendra Chaudhary
                <br />
                Recent Podcasts
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
              spaceBetween={30}
              slidesPerView={3}
              breakpoints={{
                640: {
                  slidesPerView: 1, // Small devices (mobile)
                },
                768: {
                  slidesPerView: 1, // Medium devices (tablets)
                },
                1024: {
                  slidesPerView: 3, // Large devices (desktop)
                },
                1199: {
                  slidesPerView: 3, // Large devices (desktop)
                },
              }}
              centeredSlides={false}
              loop={false}
            >
              <SwiperSlide>
                <div className="bh-event-card">
                  <div className="bh-event-image">
                    <img src={dateWithDestiney} alt="Event" />
                    <div className="event-dt">
                      <div className="event-logo">
                        <img src={dateWithDestineyLogo} alt="Event Logo" />
                      </div>
                      <div className="event-meta-tag">
                        <button className="event-badge wealth-btn">Wealth</button>
                      </div>
                    </div>
                  </div>
                  <div className="event-body-content">
                    <p className="tagline-event mb-2 fw-500">
                      November 17 , 2023 - Episode 1
                    </p>
                    <h2 className="event-title mb-3">Holy Grail of Investing</h2>
                    <div className="event-footer">
                      <div className="btn-toolbar">
                        <button
                          type="button"
                          className="btn btn-default bh-btn-white"
                          onClick={() => navigate("/podcasts")}
                        >
                          Watch Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bh-event-card">
                  <div className="bh-event-image">
                    <img src={dateWithDestiney} alt="Event" />
                    <div className="event-dt">
                      <div className="event-logo">
                        <img src={dateWithDestineyLogo} alt="Event Logo" />
                      </div>
                      <div className="event-meta-tag">
                        <button className="event-badge wealth-btn">Wealth</button>
                      </div>
                    </div>
                  </div>
                  <div className="event-body-content">
                    <p className="tagline-event mb-2 fw-500">
                      November 17 , 2023 - Episode 1
                    </p>
                    <h2 className="event-title mb-3">Holy Grail of Investing</h2>
                    <div className="event-footer">
                      <div className="btn-toolbar">
                        <button
                          type="button"
                          className="btn btn-default bh-btn-white"
                          onClick={() => navigate("/podcasts")}
                        >
                          Watch Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bh-event-card">
                  <div className="bh-event-image">
                    <img src={dateWithDestiney} alt="Event" />
                    <div className="event-dt">
                      <div className="event-logo">
                        <img src={dateWithDestineyLogo} alt="Event Logo" />
                      </div>
                      <div className="event-meta-tag">
                        <button className="event-badge wealth-btn">Wealth</button>
                      </div>
                    </div>
                  </div>
                  <div className="event-body-content">
                    <p className="tagline-event mb-2 fw-500">
                      November 17 , 2023 - Episode 1
                    </p>
                    <h2 className="event-title mb-3">Holy Grail of Investing</h2>
                    <div className="event-footer">
                      <div className="btn-toolbar">
                        <button
                          type="button"
                          className="btn btn-default bh-btn-white"
                          onClick={() => navigate("/podcasts")}
                        >
                          Watch Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bh-event-card">
                  <div className="bh-event-image">
                    <img src={dateWithDestiney} alt="Event" />
                    <div className="event-dt">
                      <div className="event-logo">
                        <img src={dateWithDestineyLogo} alt="Event Logo" />
                      </div>
                      <div className="event-meta-tag">
                        <button className="event-badge wealth-btn">Wealth</button>
                      </div>
                    </div>
                  </div>
                  <div className="event-body-content">
                    <p className="tagline-event mb-2 fw-500">
                      November 17 , 2023 - Episode 1
                    </p>
                    <h2 className="event-title mb-3">Holy Grail of Investing</h2>
                    <div className="event-footer">
                      <div className="btn-toolbar">
                        <button
                          type="button"
                          className="btn btn-default bh-btn-white"
                          onClick={() => navigate("/podcasts")}
                        >
                          Watch Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bh-event-card">
                  <div className="bh-event-image">
                    <img src={dateWithDestiney} alt="Event" />
                    <div className="event-dt">
                      <div className="event-logo">
                        <img src={dateWithDestineyLogo} alt="Event Logo" />
                      </div>
                      <div className="event-meta-tag">
                        <button className="event-badge wealth-btn">Wealth</button>
                      </div>
                    </div>
                  </div>
                  <div className="event-body-content">
                    <p className="tagline-event mb-2 fw-500">
                      November 17 , 2023 - Episode 1
                    </p>
                    <h2 className="event-title mb-3">Holy Grail of Investing</h2>
                    <div className="event-footer">
                      <div className="btn-toolbar">
                        <button
                          type="button"
                          className="btn btn-default bh-btn-white"
                          onClick={() => navigate("/podcasts")}
                        >
                          Watch Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bh-event-card">
                  <div className="bh-event-image">
                    <img src={dateWithDestiney} alt="Event" />
                    <div className="event-dt">
                      <div className="event-logo">
                        <img src={dateWithDestineyLogo} alt="Event Logo" />
                      </div>
                      <div className="event-meta-tag">
                        <button className="event-badge wealth-btn">Wealth</button>
                      </div>
                    </div>
                  </div>
                  <div className="event-body-content">
                    <p className="tagline-event mb-2 fw-500">
                      November 17 , 2023 - Episode 1
                    </p>
                    <h2 className="event-title mb-3">Holy Grail of Investing</h2>
                    <div className="event-footer">
                      <div className="btn-toolbar">
                        <button
                          type="button"
                          className="btn btn-default bh-btn-white"
                          onClick={() => navigate("/podcasts")}
                        >
                          Watch Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>


    </div>
  );
}

export default RecentProdcastSlider;
