import React from 'react'
import BuyCart from '../../assets/icnons/BuyCart'

const ProductCard = ({ imgSrc, title, weight, about, price }) => {
  return (
    <div className="productCard">
      <img className="productCard-photo" src={imgSrc} alt="product" />
      <div className="productText">
        <div className="productText-top">
          <h3 className="productCard-title">{title}</h3>
          <span className="productCard-weight">Вес: {weight} г</span>
        </div>
        <p className="productCard-description">{about}</p>
        <div className="productText-bottom">
          <span className="productCard-price">{price} ₽</span>
          <button className="productCard-btn">
            В корзину <BuyCart />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
