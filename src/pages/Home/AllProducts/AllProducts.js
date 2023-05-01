import React, { useContext, useEffect } from 'react'
import ProductsFilter from '../../../components/ProductsFilter/ProductsFilter'
import { CustomContext } from '../../../utils/Context'
import NavMenu from '../../../components/NavMenu/NavMenu'

const AllProducts = () => {
  const { getAllProducts } = useContext(CustomContext)

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <section>
      <div className="container">
        <div className="row">
          <NavMenu />
        </div>
      </div>
      <ProductsFilter title="ХОЛОДНЫЕ ЗАКУСКИ" />
      <ProductsFilter title="ГОРЯЧИЕ ЗАКУСКИ" />
      <ProductsFilter title="Мясные блюда" />
    </section>
  )
}

export default AllProducts
