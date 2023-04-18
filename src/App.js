import { Routes, Route } from 'react-router-dom'
import './sass/style.sass'
import Home from './pages/Home/Home'
import Catalog from './pages/Catalog/Catalog'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Layout from './Layout/Layout'
import Sales from './pages/Sales/Sales'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={''} element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sales" element={<Sales />} />
        </Route>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
