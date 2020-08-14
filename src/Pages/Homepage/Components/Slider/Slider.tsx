import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass, Controller } from 'swiper';
import 'swiper/swiper.scss';
import { CSSTransition } from 'react-transition-group';
import './Slider.scss';
// import { SwiperComponent } from 'swiper/types/shared';
import { ISlide } from './ISlide';

interface ISliderProps{
  slides: ISlide[],
  visible: boolean,
  onClose: () => void
}

SwiperClass.use([Controller]);

const Slider = ({ slides, visible, onClose }: ISliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [controlledSwiper, setControlledSwiper] = useState<SwiperClass>();
  useEffect(() => {
    const selected = slides.filter((slide) => slide.selected).pop();
    if (controlledSwiper && selected) {
      controlledSwiper.slideTo(slides.indexOf(selected) + 1, 0);
    }
  }, [controlledSwiper, slides]);

  const Navigation = (
    <>
      <button
        type="button"
        className="slider__next"
        onClick={() => {
              controlledSwiper?.slideNext();
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 71">
          <path d="M9.12,3.18L41,36L9.29,67.71c-1.24,1.24-3.26,1.16-4.4-0.17l-2.05-2.39c-1.03-1.21-0.95-3.01,0.2-4.11L29,36L3.05,9.12 C1.91,7.94,1.93,6.07,3.08,4.92l1.76-1.76C6.03,1.97,7.95,1.98,9.12,3.18z" />
        </svg>
      </button>
      <button
        type="button"
        className="slider__prev"
        onClick={() => {
              controlledSwiper?.slidePrev();
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 71">
          <path d="M34,3.18L2.12,36l31.71,31.71c1.24,1.24,3.26,1.16,4.4-0.17l2.05-2.39c1.03-1.21,0.95-3.01-0.2-4.11L14.12,36L40.07,9.12 c1.14-1.18,1.12-3.05-0.04-4.21l-1.76-1.76C37.09,1.97,35.16,1.98,34,3.18z" />
        </svg>
      </button>
      <button
        type="button"
        className="slider__exit"
        onClick={() => {
          if (onClose) onClose();
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 59">
          <path d="M15.83,3.83L29.5,17.5L43.17,3.83c1.56-1.56,4.09-1.56,5.66,0l6.34,6.34c1.56,1.56,1.56,4.09,0,5.66L41.5,29.5l13.67,13.67 c1.56,1.56,1.56,4.09,0,5.66l-6.34,6.34c-1.56,1.56-4.09,1.56-5.66,0L29.5,41.5L15.83,55.17c-1.56,1.56-4.09,1.56-5.66,0l-6.34-6.34 c-1.56-1.56-1.56-4.09,0-5.66L17.5,29.5L3.83,15.83c-1.56-1.56-1.56-4.09,0-5.66l6.34-6.34C11.73,2.27,14.27,2.27,15.83,3.83z" />
        </svg>
      </button>
    </>
  );

  return (
    <CSSTransition
      nodeRef={sliderRef}
      classNames="slider-wrapper"
      className="slider-wrapper"
      appear
      in={visible}
      timeout={600}
    >
      <div ref={sliderRef}>
        <Swiper
          className="slider"
          slidesPerView={1}
          loop
          onSwiper={setControlledSwiper}
          controller={{ control: controlledSwiper }}
          simulateTouch={false}
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.key}
              style={{ backgroundImage: slide.backgroundImage ? `url('${slide.backgroundImage}')` : undefined }}
              className="slider__slide"
            >
              <div className="slider__slide__data">
                <span className="slider__slide__data__header">
                  {slide.header}
                </span>
                <span className="slider__slide__data__content">
                  {slide.content}
                </span>
              </div>
            </SwiperSlide>
          ))}
          {Navigation}
        </Swiper>
      </div>
    </CSSTransition>
  );
};
Slider.defaultProps = {};

export default Slider;
