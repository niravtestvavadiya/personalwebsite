import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductPicture from "../../asstes/images/Initiative/product-1.jpg";
import { Container } from "react-bootstrap";
function OurProductSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="tab-slider exce-tab-slide-bar">
      <Container>
        <div className="slider-tab-toolbar exce-slider-tab-product">
          <div className="title-sec text-center ">
            <h2 className="title-heading text-white exce-prod-heading">
              Products
            </h2>
          </div>
          <div className="custom-navigation exce-product-navigation">
            <button ref={prevRef} className="previous-btn arrow-btn">
              <i className="bi bi-chevron-left"></i>
            </button>
            <button ref={nextRef} className="next-btn arrow-btn">
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </Container>
      <div className="our-product-slider">
        <Swiper
          modules={[Navigation]}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          spaceBetween={20}
          // slidesPerView={4.2}
          centeredSlides={false}
          loop={false}
          breakpoints={{
            640: {
              slidesPerView: 1, // Small devices (mobile) 
            },
            768: {
              slidesPerView: 2.5, // Medium devices (tablets) 
            },
            1279: {
              slidesPerView: 4.2, // Large devices (desktop) 
            },
          }}
        >
          <SwiperSlide>
            <div className="bh-event-card">
              <div className="bh-event-image">
                <img src={ProductPicture} alt="" />
              </div>
              <div className="event-body-content">
                <h2 className="event-title">Millet Products</h2>
                <p>Nutritious and sustainable options that combine health benefits with environmental harmony.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bh-event-card">
              <div className="bh-event-image">
                <img src={ProductPicture} alt="" />
              </div>
              <div className="event-body-content">
                <h2 className="event-title">Millet Products</h2>
                <p>Nutritious and sustainable options that combine health benefits with environmental harmony.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bh-event-card">
              <div className="bh-event-image">
                <img src={ProductPicture} alt="" />
              </div>
              <div className="event-body-content">
                <h2 className="event-title">Millet Products</h2>
                <p>Nutritious and sustainable options that combine health benefits with environmental harmony.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bh-event-card">
              <div className="bh-event-image">
                <img src={ProductPicture} alt="" />
              </div>
              <div className="event-body-content">
                <h2 className="event-title">Millet Products</h2>
                <p>Nutritious and sustainable options that combine health benefits with environmental harmony.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bh-event-card">
              <div className="bh-event-image">
                <img src={ProductPicture} alt="" />
              </div>
              <div className="event-body-content">
                <h2 className="event-title">Millet Products</h2>
                <p>Nutritious and sustainable options that combine health benefits with environmental harmony.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bh-event-card">
              <div className="bh-event-image">
                <img src={ProductPicture} alt="" />
              </div>
              <div className="event-body-content">
                <h2 className="event-title">Millet Products</h2>
                <p>Nutritious and sustainable options that combine health benefits with environmental harmony.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bh-event-card">
              <div className="bh-event-image">
                <img src={ProductPicture} alt="" />
              </div>
              <div className="event-body-content">
                <h2 className="event-title">Millet Products</h2>
                <p>Nutritious and sustainable options that combine health benefits with environmental harmony.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bh-event-card">
              <div className="bh-event-image">
                <img src={ProductPicture} alt="" />
              </div>
              <div className="event-body-content">
                <h2 className="event-title">Millet Products</h2>
                <p>Nutritious and sustainable options that combine health benefits with environmental harmony.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bh-event-card">
              <div className="bh-event-image">
                <img src={ProductPicture} alt="" />
              </div>
              <div className="event-body-content">
                <h2 className="event-title">Millet Products</h2>
                <p>Nutritious and sustainable options that combine health benefits with environmental harmony.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bh-event-card">
              <div className="bh-event-image">
                <img src={ProductPicture} alt="" />
              </div>
              <div className="event-body-content">
                <h2 className="event-title">Millet Products</h2>
                <p>Nutritious and sustainable options that combine health benefits with environmental harmony.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bh-event-card">
              <div className="bh-event-image">
                <img src={ProductPicture} alt="" />
              </div>
              <div className="event-body-content">
                <h2 className="event-title">Millet Products</h2>
                <p>Nutritious and sustainable options that combine health benefits with environmental harmony.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
}

export default OurProductSlider;
