import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { EffectFade } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      spaceBetween={50}
      effect="fade"
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <div
          className="relative w-full h-[220px] md:h-[350px] lg:h-[500px] bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/Ng8qP5mF/Code-Master-Pro.jpg')",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-center">
              <span className="font-bold text-3xl md:text-5xl lg:text-7xl">CodeMaster Pro</span><br />
              CodeMaster Pro offers an extensive library of coding tutorials <br />
              <span className="font-bold text-xl md:text-2xl lg:text-4xl">Starts At 15.99$ / Month</span>
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="relative w-full h-[220px] md:h-[350px] lg:h-[500px] bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/4gnCJ6xM/Cyber-Sec-Weekly.jpg')",
          }}
        >
          <div className="absolute top-[35%] left-[45%] pr-4 flex items-center justify-end">
          <p className="text-sky-500 text-center">
              <span className="font-bold text-3xl md:text-5xl lg:text-7xl">CyberSec Weekly</span><br />
              Stay secure with CyberSec Weekly<br />
              <span className="font-bold text-xl md:text-2xl lg:text-4xl">Starts At 5.99$ / Week</span></p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="relative w-full h-[220px] md:h-[350px] lg:h-[500px] bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/CKc7w5QG/Dev-Ops-Digest.png')",
          }}
        >
          <div className="absolute top-[15%] left-[60%] flex items-center justify-center pr-4">
          <p className="text-sky-400 text-center">DevOps Digest delivers best practices, and interviews with industry experts. <br />
          <span className="font-bold text-xl md:text-2xl lg:text-4xl">Starts At 9.99$/Month</span><br />
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="relative w-full h-[220px] md:h-[350px] lg:h-[500px] bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/8LfFYC4Z/ARVR-Hub.jpg')",
          }}
        >
          <div className="absolute top-[15%] left-[5%] flex items-center justify-center">
          <p className="text-white md:text-violet-400 text-center">
              <span className="font-bold text-3xl md:text-5xl lg:text-7xl">AR/VR Hub</span><br />
              AR/VR Hub keeps you at the forefront of immersive tech with <br /> app reviews, tutorials, and exclusive news.<br />
              <span className="font-bold text-xl md:text-2xl lg:text-4xl">Starts At 18.99$ / Month</span>
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
