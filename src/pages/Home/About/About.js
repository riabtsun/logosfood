import React from 'react'
import { Link } from 'react-router-dom'
import Onion from '../../../assets/icons/Onion'
import Flash from '../../../assets/icons/Flash'
import CookHat from '../../../assets/icons/CookHat'

const About = () => {
  return (
    <section className="about">
      <div
        className="container"
        style={{
          backgroundImage: 'url(./assets/aboutbg.png)',
        }}
      >
        <div className="about__description">
          <h2 className="about__title">НАШЕ КАФЕ</h2>
          <p className="about__text">
            Мы расположены в одном из самых живописных мест города — на берегу
            реки, это ваш оазис в черте города, куда можно сбежать от шумного и
            пыльного мегаполиса. Мы, действительно уникальные, ведь все
            продумано до мелочей: проект построен из дикого закарпатского сруба,
            камин в основном зале ресторана и панорамные окна с видом на реку,
            уютные беседки на берегу реки и лучшая видовая террасса, шатер с
            посадкой на 200 человек, сказочный детский домик и бассейн.
          </p>
          <Link className="about__showMenu" to="/catalog">
            ПОСМОТРЕТЬ МЕНЮ
          </Link>
        </div>
        <div className="about__blocks">
          <div className="about__block">
            <Onion className="about__block-icon" />
            <span className="about__block-title">Свежайшие продукты</span>
          </div>
          <div className="about__block">
            <Flash className="about__block-icon" fill="#fff" />
            <span className="about__block-title">Быстрая доставка</span>
          </div>
          <div className="about__block">
            <CookHat className="about__block-icon" />
            <span className="about__block-title">Лучшие повора</span>
          </div>
          <div className="about__block">
            <Onion className="about__block-icon" />
            <span className="about__block-title">Свежайшие продукты</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
