import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import './_navMenu.sass'
import { useNavigate } from 'react-router-dom'
import { menuData } from '../../utils/menuData'

const NavMenu = () => {
  const navigate = useNavigate()

  return (
    <div className="container">
      <ul className="navList">
        {menuData.map((link) => {
          return (
            <li
              className="navLink"
              key={link.en}
              onClick={() => navigate(`/catalog/${link.en}`)}
            >
              {link.ru}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavMenu
