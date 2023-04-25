import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../utils/axios'

const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    axios(`/products/${id}`)
      .then((data) => {
        setProduct(data)
      })
      .catch((err) => console.log(err))
  }, [id])

  if (JSON.stringify(product) === '{}') {
    return <h2>Продукт не найден</h2>
  }
  return (
    <section className="product">
      <div className="container">
        <button onClick={() => navigate('-1')}></button>
        <h2>{product.title}</h2>
      </div>
    </section>
  )
}

export default Product
