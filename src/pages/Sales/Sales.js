import React, { useEffect, useState } from 'react'
import Title from '../../components/Title/Title'
import axios from '../../utils/axios'

const Sales = () => {
  const [sales, setSales] = useState([])

  useEffect(() => {
    axios('/sales')
      .then(({ data }) => {
        setSales(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <section className="sales">
      <div className="container">
        <Title titleText="Акции" />
        <div className="sales__row">
          {sales.map((item) => (
            <div key={item.id} className="sales__card">
              <img
                className="sales__card-img"
                src={item.image}
                alt={item.title}
              />
              <div className="sales__card-text">
                <h3 className="sales__card-title">{item.title}</h3>
                <p className="sales__card-about">{item.description}</p>
                <span className="sales__card-date">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sales
