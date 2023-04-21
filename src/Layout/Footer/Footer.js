import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/icnons/Logo'

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <div className="footer__block">
          <Link to="/">
            <Logo className="header-logo" color={'#fff'} />
          </Link>
          <p className="footer__law-name">
            © ООО СК «АПШЕРОН» Все права защищены. 2010-2020
          </p>
          <ul className="footer__privacies">
            <li className="footer__privacies-item">
              <a href="*" className="footer__doc">
                Пользовательское соглашение
              </a>
            </li>
            <li className="footer__privacies-item">
              <a href="*" className="footer__doc">
                Карта сайта
              </a>
            </li>
            <li className="footer__privacies-item">
              <a href="*" className="footer__doc">
                Политика конфидециальности
              </a>
            </li>
          </ul>
        </div>

        <ul className="footer__menu">
          <li className="footer__item">
            <Link to={'/'} className="footer__link">
              О ресторане
            </Link>
          </li>
          <li className="footer__item">
            <Link to={'/delivery'} className="footer__link">
              Условия доставки
            </Link>
          </li>
          <li className="footer__item">
            <Link to={'/'} className="footer__link">
              Возврат товара
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/sales" className="footer__link">
              Акции
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
