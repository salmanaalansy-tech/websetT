import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider">
      <div className="container">
        <Swiper
          navigation={true}
          slidesPerView={4}
          spaceBetween={10}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to={"/"}>
              <div
                className="item p-3  bg-white !rounded-[20px] text-center
           flex items-center !justify-center flex-col"
              >
                <img src="img1.jpeg" alt="" className="w-12" />

                <h3 className="text-[16px] !font-[600] mt-3">paint man</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div
                className="item p-3  bg-white !rounded-[20px] text-center
           flex items-center !justify-center flex-col"
              >
                <img src="img1.jpeg" alt="" className="w-12" />

                <h3 className="text-[16px] !font-[600] mt-3">paint man</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div
                className="item p-3  bg-white !rounded-[20px] text-center
           flex items-center !justify-center flex-col"
              >
                <img src="img1.jpeg" alt="" className="w-12" />

                <h3 className="text-[16px] !font-[600] mt-3">paint man</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div
                className="item p-3  bg-white !rounded-[20px] text-center
           flex items-center !justify-center flex-col"
              >
                <img src="img1.jpeg" alt="" className="w-12" />

                <h3 className="text-[16px] !font-[600] mt-3">paint man</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div
                className="item p-3  bg-white !rounded-[20px] text-center
           flex items-center !justify-center flex-col"
              >
                <img src="img1.jpeg" alt="" className="w-12" />

                <h3 className="text-[16px] !font-[600] mt-3">paint man</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div
                className="item p-3  bg-white !rounded-[20px] text-center
           flex items-center !justify-center flex-col"
              >
                <img src="img1.jpeg" alt="" className="w-12" />

                <h3 className="text-[16px] !font-[600] mt-3">paint man</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
