import React, { useContext } from 'react'
import Begin from './Begin/Begin'
import NavMenu from '../../components/NavMenu/NavMenu'
import AllProducts from './AllProducts/AllProducts'

const Home = () => {
  return (
    <div>
      <Begin />
      <NavMenu />
      <AllProducts />
    </div>
  )
}

export default Home
