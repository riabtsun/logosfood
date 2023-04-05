import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./_begin.sass";

const Begin = () => {
  return (
    <section>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={true}
        loop={true}
      >
        <SwiperSlide>
          <div className="beginSlide">
            <div className="beginText">
              <h1 className="beginTitle">
                Доставка вкуснейших блюд за 60 минут
              </h1>
              <span className="beginSubTitle">Ещё не пробовал?</span>
            </div>
            <img
              className="beginImage"
              src={require("../../../assets/img/Home/begin1.jpg")}
              alt="dish"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="beginSlide">
            <div className="beginText">
              <h1 className="beginTitle">
                Доставка вкуснейших блюд за 60 минут
              </h1>
              <span className="beginSubTitle">Ещё не пробовал?</span>
            </div>
            <img
              className="beginImage"
              src={require("../../../assets/img/Home/wagyuMarch1920x800.webp")}
              alt="dish"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="beginSlide">
            <div className="beginText">
              <h1 className="beginTitle">
                Доставка вкуснейших блюд за 60 минут
              </h1>
              <span className="beginSubTitle">Ещё не пробовал?</span>
            </div>
            <img
              className="beginImage"
              src={require("../../../assets/img/Home/tri-tip-hero1920x700.webp")}
              alt="dish"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Begin;
