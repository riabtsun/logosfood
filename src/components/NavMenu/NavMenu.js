import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './_navMenu.sass'

const navLinks = [
  'Холодные закуски',
  'Горячие закуски',
  'Мясные блюда',
  'Супы',
  'Рыбные блюда',
  'Гриль меню',
  'Фирменные блюда',
  'Напитки',
]

const link = navLinks.map((link, index) => {
  return (
    <SwiperSlide key={index}>
      <a className="navLink" href={`#` + index}>
        {link}
      </a>
    </SwiperSlide>
  )
})

const NavMenu = () => {
  return (
    <div className="navSlider">
      <Swiper
        spaceBetween={0}
        slidesPerView={'auto'}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={true}
        loop={true}
        pagination={{ clickable: true }}
      >
        <>{link}</>
      </Swiper>
    </div>
  )
}

export default NavMenu
