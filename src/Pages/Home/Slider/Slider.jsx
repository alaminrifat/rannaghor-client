import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";

import slider1 from "../../../assets/slider/slider1.jpg";
import slider2 from "../../../assets/slider/slider2.jpg";
import slider3 from "../../../assets/slider/slider3.jpg";

const Slider = () => {
    return (
        <div className="mt-4 mb-4 object-center container mx-auto">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <figure className="relative">
                        <img src={slider1} alt="" className="w-full" />
                        <figcaption className="absolute inset-0 flex flex-col items-center justify-center text-white text-xl  bg-opacity-60 bg-black">
                            <p className="font-bold"> Slide 1</p>
                            <p className="text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, necessitatibus?</p>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="relative">
                        <img src={slider2} alt="" className="w-full" />
                        <figcaption className="absolute inset-0 flex flex-col items-center justify-center text-white text-xl  bg-opacity-60 bg-black">
                        <p className="font-bold"> Slide 2</p>
                        <p className="text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, necessitatibus?</p>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="relative">
                        <img src={slider3} alt="" className="w-full" />
                        <figcaption className="absolute inset-0 flex flex-col items-center justify-center text-white text-xl  bg-opacity-60 bg-black">
                        <p className="font-bold"> Slide 3</p>
                        <p className="text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, necessitatibus?</p>
                        </figcaption>
                    </figure>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
