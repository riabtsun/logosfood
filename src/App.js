import Header from './Layout/Header/Header'
import Begin from './pages/Home/Begin/Begin'
import NavMenu from './components/NavMenu/NavMenu'
import AllProducts from './pages/Home/AllProducts/AllProducts'
import {BrowserRouter, Routes, Route, Link, useLocation} from "react-router-dom";
import {useEffect} from "react";
import './sass/style.sass'

function App() {

  // useEffect(()=>{
  //   alert(` `)
  // },[])

  return (
    <div className="App">
      <Header />
      <Begin />
      <NavMenu />
      <AllProducts />
    </div>
  )
}

export default App
