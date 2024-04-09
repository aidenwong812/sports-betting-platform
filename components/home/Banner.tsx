import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="container">
        <Swiper
          speed={2500}
          loop={true}
          autoplay={{
            delay: 4000,
          }}
          modules={[Autoplay]}
          className="banner-wrapper mySwiper">
          <SwiperSlide className="banner-items">
            <div className="container">
              <div className="banner-content banner-bg-one">
                <h1>10% Live-betting Bonus</h1>
                <h2>10% up to €150</h2>
                <Link
                  href="#0"
                  className="cmn--btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2">
                  <span>Registration</span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="banner-items banner-bg-two">
            <div className="container">
              <div className="banner-content">
                <h1>Cashback Bonus</h1>
                <h2>10% up to €500</h2>
                <Link
                  href="#0"
                  className="cmn--btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2">
                  <span>Registration</span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="banner-items banner-bg-three">
            <div className="container">
              <div className="banner-content">
                <h1>10% Live-betting Bonus</h1>
                <h2>10% up to €150</h2>
                <Link
                  href="#0"
                  className="cmn--btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2">
                  <span>Registration</span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
