"use client";
import ReviewCard from "./ReviewCard";
import { reviewData } from "./ReviewData";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SiTrueup } from "react-icons/si";

const Review = () => {
  return (
    <div className="mx-5">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold uppercase">Customer Review</h1>
        <div className="seperator mx-auto"></div>
        <p className="paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
          recusandae quam nisi ipsa autem quos!
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        speed={400}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {reviewData &&
          reviewData.map((info, index) => (
            <SwiperSlide key={index}>
              <ReviewCard img={info.img} name={info.name} desg={info.desg} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Review;
