import React, { useEffect, useState } from 'react'
import Title from '../../components/Title/Title'
import DeliveryAccordeon from '../../components/DeliveryAccordeon/DeliveryAccordeon'
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
        <div className="delivery__block">
          {delivery.map((block) => (
            <>
              <DeliveryAccordeon item={block} />
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Delivery
