import React from 'react'
import Title from '../Title/Title'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import ProductCard from '../ProductCard/ProductCard'

const ProductsFilter = ({ title }) => {
  return (
    <div className="products__filter">
      <Title titleText={title} />
      <div className="products__filter-sliders">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
          }}
          speed={2000}
          modules={[Autoplay]}
          className="products__filter-swiper"
        >
          <SwiperSlide>
            <ProductCard
              imgSrc={require('../../assets/img/products/dish1.jpg')}
              title="Ягненок"
              weight="225"
              about="Фаршированный гречневой кашей,
курагой, апельсином и зеленым яблоком"
              price="620"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              imgSrc={require('../../assets/img/products/dish1.jpg')}
              title="Ягненок"
              weight="225"
              about="Фаршированный гречневой кашей,
курагой, апельсином и зеленым яблоком"
              price="620"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              imgSrc={require('../../assets/img/products/dish1.jpg')}
              title="Ягненок"
              weight="225"
              about="Фаршированный гречневой кашей,
курагой, апельсином и зеленым яблоком"
              price="620"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              imgSrc={require('../../assets/img/products/dish1.jpg')}
              title="Ягненок"
              weight="225"
              about="Фаршированный гречневой кашей,
курагой, апельсином и зеленым яблоком"
              price="620"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              imgSrc={require('../../assets/img/products/dish1.jpg')}
              title="Ягненок"
              weight="225"
              about="Фаршированный гречневой кашей,
курагой, апельсином и зеленым яблоком"
              price="620"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              imgSrc={require('../../assets/img/products/dish1.jpg')}
              title="Ягненок"
              weight="225"
              about="Фаршированный гречневой кашей,
курагой, апельсином и зеленым яблоком"
              price="620"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default ProductsFilter
