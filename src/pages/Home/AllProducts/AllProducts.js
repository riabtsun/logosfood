import React from 'react'
import Title from '../../../components/Title/Title'
import ProductCard from '../../../components/ProductCard/ProductCard'

const AllProducts = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <Title titleText="ХОЛОДНЫЕ ЗАКУСКИ" />
          <div className="products">
            <ProductCard
              imgSrc={require('../../../assets/img/products/dish1.jpg')}
              title="Ягненок"
              weight="225"
              about="Фаршированный гречневой кашей,
курагой, апельсином и зеленым яблоком"
              price="620"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllProducts
