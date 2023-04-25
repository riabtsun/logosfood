import React, { useEffect, useState } from 'react'
import axios from '../../utils/axios'
import ProductCard from '../../components/ProductCard/ProductCard'
import { Link, useParams } from 'react-router-dom'
import { menuData } from '../../utils/menuData'

const Catalog = () => {
  const [products, setProducts] = useState([])

  const { category } = useParams()
  useEffect(() => {
    axios(`/products?category=${category}`)
      .then(({ data }) => setProducts(data))
      .catch((err) => console.log('Данные не получены', err))
  }, [category])

  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog__content">
          <aside className="catalog__aside"></aside>
          <div className="catalog__right">
            <h2 className="catalog__crumbs">
              <Link to="/">Главная</Link> /
              <span> {menuData.find((item) => item.en === category).ru}</span>
            </h2>
            <div className="catalog__row">
              {products.map((item) => {
                return <ProductCard key={item.id} card={item} />
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Catalog
