'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import '../index.css'

const pointArr = [700, 1700, 2700, 3700, 7700, 17700, 70000]

export default function DrawSection() {
  return (
    <div className="no-scrollbar overflow-scroll py-[20px]">
      <Swiper
        slidesPerView={'auto'}
        direction="vertical"
        modules={[Autoplay, FreeMode]}
        freeMode={true}
        loop={true}
        speed={250}
        autoplay={{
          waitForTransition: true,
        }}
        className="card-list-swiper-wrapper h-[100px]"
      >
        {pointArr.map((pointItem) => {
          return (
            <SwiperSlide key={pointItem} className="photo-card_wrapper">
              <span className="text-[#6C8D66] text-[42px] font-bold">
                {pointItem.toLocaleString()}
              </span>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
