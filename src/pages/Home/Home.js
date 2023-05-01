import React from 'react'
import Begin from './Begin/Begin'
import NavMenu from '../../components/NavMenu/NavMenu'
import AllProducts from './AllProducts/AllProducts'
import About from './About/About'
import Contacts from './Contacts/Contacts'

const Home = () => {
  return (
    <div>
      <Begin />
      <NavMenu />
      <AllProducts />
      <About />
      <Contacts />
    </div>
  )
}

export default Home
