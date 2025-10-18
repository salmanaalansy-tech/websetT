import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HomeSlider = () => {
  return (
    <div className="homeSlider py-4 mb-2">
      <div className="container">
        <Swiper
        
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="sliderHome"
        >
          <SwiperSlide>
            
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="img1.jpeg"
                alt="Banner solide"
                className="w-full h-[300px]  "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="img1.jpeg"
                alt="Banner solide"
                className="w-full h-[300px]  "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="img1.jpeg"
                alt="Banner solide"
                className="w-full h-[300px]  "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="img1.jpeg"
                alt="Banner solide"
                className="w-full h-[300px]  "
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
