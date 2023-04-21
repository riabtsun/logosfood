import React, { useEffect, useState } from 'react'
import Title from '../../components/Title/Title'
import Map from '../../components/Map/Map'
import DeliveryAccordion from '../../components/DeliveryAccordeon/DeliveryAccordeon'
import axios from '../../utils/axios'

const Delivery = () => {
  const [delivery, setDelivery] = useState([])

  useEffect(() => {
    axios('/delivery')
      .then(({ data }) => {
        setDelivery(data)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <section className="delivery">
      <div className="container">
        <Title titleText="Условия доставки" />
        <div className="delivery__media">
          <div className="delivery__block">
            {delivery.map((block) => (
              <DeliveryAccordion key={block.id} item={block} />
            ))}
          </div>
          <Map />
        </div>
        <div className="delivery__info">
          <h5 className="delivery__info-title">График работы доставки:</h5>
          <span className="delivery__info-text">с 10:00-21:00</span>
          <h5 className="delivery__info-title">График работы кафе:</h5>
          <span className="delivery__info-text">с 08:00-21:00</span>
          <h5 className="delivery__info-title">Минимальный заказ:</h5>
          <span className="delivery__info-text">
            Бесплатная доставка пешим курьером при сумме заказа от 400 ₽
            Доставка оператором такси от любой суммы заказа - по тарифам
            перевозчика.
          </span>
        </div>
      </div>
    </section>
  )
}

export default Delivery
