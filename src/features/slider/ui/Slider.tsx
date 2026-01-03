'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import type { Slide } from '../model/types';
import styles from './Slider.module.scss';

interface SliderProps {
  slides: Slide[];
}

export function Slider({ slides }: SliderProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      loop
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 4,
        },
      }}
      className={styles.swiperContainer}
    >
      <div className={styles.swiperWrapper}>
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.src + index}>
            <div className={styles.slide}>
              <Image
                src={slide.src}
                alt={slide.alt}
                width={500}
                height={300}
                className={styles.slide}
                style={{
                  width: '500px',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
}
