import React, { useContext } from 'react'
import './_header.sass'
import Logo from '../../assets/icnons/Logo'
import DeliveryInput from './DeliveryInput/DeliveryInput'
import Menu from '../../assets/icnons/Menu'
import BuyCart from '../../assets/icnons/BuyCart'
import ContactsPhone from './ContactsPhone/ContactsPhone'
import { CustomContext } from '../../utils/Context'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const { user, setUser } = useContext(CustomContext)
  const navigate = useNavigate()

  const logOutUser = () => {
    setUser({
      email: '',
    })
    localStorage.removeItem('user')
    navigate('/register')
  }
  return (
    <header className="header">
      <div className="row">
        <div className="container">
          <div className="header-wrap">
            <Menu className="menuBtn" />
            <Logo className="header-logo" color={'#fff'} />
            <DeliveryInput />
            <ContactsPhone />
            {user.email.length ? (
              <Link to="/register">
                <span>Войти</span>
              </Link>
            ) : (
              <Link to="/register">
                <span onClick={() => logOutUser()}>Выйти</span>
              </Link>
            )}

            <div className="buyCartBtn">
              <BuyCart className="buyCartBtn-icon" />
              <span className="buyCartBtn-name">корзина</span>
              <span className="buyCartBtn-value">4</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
