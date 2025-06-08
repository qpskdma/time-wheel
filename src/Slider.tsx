import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { categorizedEvents } from "./data";

interface SliderProps {
  activePoint: string;
}

const Slider: React.FC<SliderProps> = ({ activePoint }) => {
  const swiperRef = useRef<any>(null);
  console.log(categorizedEvents[activePoint]);

  return (
    <div className="slider-wrapper">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {categorizedEvents[activePoint].map((event, index) => (
          <SwiperSlide>
            <div className="slide-wrapper" key={index}>
              <div className="slide-year">{event.year}</div>
              <div className="slide-text">{event.event}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="slider-button"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
        >
          <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
