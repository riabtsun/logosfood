import React from 'react'
import BuyCart from '../../assets/icnons/BuyCart'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ card }) => {
  const navigate = useNavigate()
  return (
    <div className="productCard">
      <img
        className="productCard-photo"
        src={`${card.image[0] === '.' ? '../' : ''}../${card.image}`}
        alt={card.title}
        onClick={() => navigate(`/product/${card.id}`)}
      />
      <div className="productText">
        <div className="productText-top">
          <h3 className="productCard-title">{card.title}</h3>
          <span className="productCard-weight">Вес: {card.weight} г</span>
        </div>
        <p className="productCard-description">{card.description}</p>
        <div className="productText-bottom">
          <span className="productCard-price">{card.price} ₽</span>
          <button className="productCard-btn">
            В корзину <BuyCart />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
