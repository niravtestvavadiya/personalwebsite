import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import foundationSlideFisrt from "../../asstes/images/Initiative/foundation-1.png";
import foundationSlideTwo from "../../asstes/images/Initiative/foundation-2.png";
const ObjectiveFoundation = () => {
  return (
    <div className="foundation-slider-view">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.5}
        loop={true}
        spaceBetween={70}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 40,
          modifier: 3,
          slideShadows: false,
        }}
        navigation={true}  // Enable navigation arrows
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        className="exce-initiave-slide"
      >

        <SwiperSlide>
          <div className="slide-content">
            <img
              src={foundationSlideFisrt}
              alt={foundationSlideFisrt}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img
              src={foundationSlideTwo}
              alt={foundationSlideTwo}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img
              src={foundationSlideFisrt}
              alt={foundationSlideFisrt}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img
              src={foundationSlideTwo}
              alt={foundationSlideTwo}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img
              src={foundationSlideFisrt}
              alt={foundationSlideFisrt}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ObjectiveFoundation;
