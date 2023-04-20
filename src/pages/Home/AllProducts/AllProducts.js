import React from 'react'
import ProductsFilter from '../../../components/ProductsFilter/ProductsFilter'

const AllProducts = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="products"></div>
        </div>
      </div>
      <ProductsFilter title="ХОЛОДНЫЕ ЗАКУСКИ" />
      <ProductsFilter title="ГОРЯЧИЕ ЗАКУСКИ" />
      <ProductsFilter title="Мясные блюда" />
    </section>
  )
}

export default AllProducts
