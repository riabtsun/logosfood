import React, { useContext, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'
import axios from '../../utils/axios'
import Title from '../Title/Title'
import ProductCard from '../ProductCard/ProductCard'
import { CustomContext } from '../../utils/Context'

const ProductsFilter = ({ title }) => {
  const { products } = useContext(CustomContext)
  return (
    <div className="products__filter">
      <div className="container">
        <Title titleText={title} />
      </div>
      <div className="products__filter-sliders">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={16}
          initialSlide={0}
          watchOverflow={true}
          loop={true}
          loopedSlides={4}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
          }}
          speed={2000}
          className="mySwiper"
          // className="products__filter-swiper"
        >
          <>
            {products.map((card) => {
              return (
                <SwiperSlide key={card.title}>
                  <ProductCard card={card} />
                </SwiperSlide>
              )
            })}
          </>
        </Swiper>
      </div>
    </div>
  )
}

export default ProductsFilter
