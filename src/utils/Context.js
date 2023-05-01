import { createContext, useEffect, useState } from 'react'
import axios from './axios'
import { useNavigate } from 'react-router-dom'

export const CustomContext = createContext()

export const Context = (props) => {
  const [products, setProducts] = useState([])
  const [user, setUser] = useState({
    email: '',
  })
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      JSON.parse(localStorage.getItem('user'))
    }
  }, [])

  const getAllProducts = () => {
    axios('http://localhost:8080/products')
      .then(({ data }) => setProducts(data))
      .catch((err) => console.log(err))
  }
  const handleAddProduct = (data) => {
    const newProduct = {
      ...data,
      calories: data.protein * 4 + data.fats * 9 + data.carbohydrates * 4,
    }
    axios
      .post('/products', newProduct)
      .then(() => {
        navigate('/')
      })
      .catch((err) => console.log(err.message))
  }

  const value = {
    user,
    setUser,
    products,
    setProducts,
    getAllProducts,
    handleAddProduct,
  }

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  )
}
