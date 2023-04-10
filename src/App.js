import Header from './Layout/Header/Header'
import { Routes, Route, Link } from 'react-router-dom'
import './sass/style.sass'
import Home from './pages/Home/Home'
import Catalog from './pages/Catalog/Catalog'
import Register from './pages/Register/Register'

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/register">Register</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Header />
    </div>
  )
}

export default App
