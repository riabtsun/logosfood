import React from 'react'
import Gps from '../../../assets/icons/Gps'
import Letter from '../../../assets/icons/Letter'
import BigBtn from '../../../components/BigBtn/BigBtn'
import Facebook from '../../../assets/icons/Facebook'
import Youtube from '../../../assets/icons/Youtube'
import Instagram from '../../../assets/icons/Instagram'

const Contacts = () => {
  return (
    <section
      className="contacts"
      style={{ backgroundImage: 'url(./assets/contacts-bg.png)' }}
    >
      <div className="container">
        <div className="contacts__row">
          <div className="contacts__block">
            <h3 className="contacts__title">КОНТАКТЫ</h3>
            <div className="line-title"></div>
            <div className="contacts__item">
              <h5 className="contacts__item-title">
                <Gps />
                Наш адрес:
              </h5>
              <span className="contacts__item-text">
                МО, городской округ Красногорск, село Ильинкое,
                Экспериментальная улица, 10
              </span>
            </div>
            <div className="contacts__item">
              <h5 className="contacts__item-title">
                <Letter />
                Наша почта:
              </h5>
              <a
                href="mailto:auto.wash@gmail.com"
                className="contacts__item-text"
              >
                auto.wash@gmail.com
              </a>
            </div>
            <div className="line-title"></div>
            <div className="contacts__order">
              <BigBtn text="ЗАБРОНИРОВАТЬ СТОЛ" />
              <div className="contacts__phone-block">
                <a href="tel:+380631234567" className="contacts__phone-link">
                  +38 (063) 123-45-67
                </a>
                <span className="contacts__phone-text">
                  Звоните или оставляйте заявку
                </span>
              </div>
            </div>
            <div className="contacts__social">
              <span className="contacts__social-title">Мы в соц сетях:</span>
              <ul className="contacts__social-list">
                <li className="contacts__social-list-item">
                  <Facebook />
                </li>
                <li className="contacts__social-list-item">
                  <Youtube />
                </li>
                <li className="contacts__social-list-item">
                  <Instagram />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
