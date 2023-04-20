import React, { useState } from 'react'
import FaArrow from '../../assets/icnons/FaArrow'

const DeliveryAccordeon = ({ item }) => {
  const [active, setActive] = useState(false)

  return (
    <>
      <div
        className="delivery__card"
        onClick={() => setActive((prev) => !prev)}
      >
        <p className="delivery__card-title">
          <span className="delivery__card-name">{item.title}</span>
          <FaArrow />
        </p>
      </div>
      <div
        style={{ display: active ? 'block' : 'none' }}
        className="delivery__desk"
      >
        <p className="delivery__text">{item.answer}</p>
      </div>
    </>
  )
}

export default DeliveryAccordeon
