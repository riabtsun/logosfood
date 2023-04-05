import './sass/style.sass'
import Header from './Layout/Header/Header'
import Begin from './pages/Home/Begin/Begin'
import NavMenu from './components/NavMenu/NavMenu'
import AllProducts from './pages/Home/AllProducts/AllProducts'
function App() {
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
