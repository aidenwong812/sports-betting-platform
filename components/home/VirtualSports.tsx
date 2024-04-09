import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper";
const VirtualSports = () => {
    return (
        <div className="virtual-spots pb-40">
            <div className="section-heder pb-40">
                <h2>
                    Virtual Sports
                </h2>
                <p>
                    Permanent live, fast pacing matches, immediate settlement
                </p>
            </div>
            <Swiper
                loop={true}
                autoplay={true}
                modules={[Autoplay]}
                speed={2500}
                breakpoints={{
                    320: {
                        slidesPerView: 1
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 12
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 12
                    },
                }}
                className="virtual-wrap">
                <SwiperSlide className="virtual-items">
                    <div className="icon">
                        <i className="icon-football"></i>
                    </div>
                    <h5>
                        eFootball
                    </h5>
                    <span>Live 36</span>
                </SwiperSlide>
                <SwiperSlide className="virtual-items">
                    <div className="icon">
                        <i className="icon-basketball"></i>
                    </div>
                    <h5>
                        eBasketball
                    </h5>
                    <span>Live 8</span>
                </SwiperSlide>
                <SwiperSlide className="virtual-items">
                    <div className="icon">
                        <i className="icon-hockyman"></i>
                    </div>
                    <h5>
                        eHockey
                    </h5>
                    <span>Live 20</span>
                </SwiperSlide>
                <SwiperSlide className="virtual-items">
                    <div className="icon">
                        <i className="icon-etennis"></i>
                    </div>
                    <h5>
                        eTennis
                    </h5>
                    <span>Live 6</span>
                </SwiperSlide>
                <SwiperSlide className="virtual-items">
                    <div className="icon">
                        <i className="icon-football"></i>
                    </div>
                    <h5>
                        eFootball
                    </h5>
                    <span>Live 36</span>
                </SwiperSlide>
                <SwiperSlide className="virtual-items">
                    <div className="icon">
                        <i className="icon-basketball"></i>
                    </div>
                    <h5>
                        eBasketball
                    </h5>
                    <span>Live 8</span>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default VirtualSports;