import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaPencilAlt } from 'react-icons/fa'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import axios from 'axios'
import { CustomContext } from '../../utils/Context'

const Form = () => {
  const [status, setStatus] = useState(false)
  const [email, setEmail] = useState('')
  const [eye, setEye] = useState(false)
  const navigate = useNavigate()

  const { user, setUser } = useContext(CustomContext)

  const registerUser = (e) => {
    e.preventDefault()
    console.log(e.target)
    let newUser = {
      email,
      password: e.target[0].value,
    }
    axios
      .post('http://localhost:8080/register', newUser)
      .then(({ data }) => {
        setUser({
          token: data.accessToken,
          ...data.user,
        })
        localStorage.setItem(
          'user',
          JSON.stringify({
            token: data.accessToken,
            ...data.user,
          })
        )
        navigate('/')
      })
      .catch((e) => console.log(e))
  }

  return (
    <div className="content">
      <form action="" className="form" onSubmit={registerUser}>
        {status && (
          <p className="form__email" onClick={() => setStatus(false)}>
            {email} <FaPencilAlt />
          </p>
        )}

        <h2 className="form__title">
          {status ? 'Придумай пароль для входа' : 'Регистрация'}
        </h2>
        {status && (
          <>
            <div className="form__password">
              <input
                placeholder="Придумайте пароль"
                className="form__field"
                type={eye ? 'text' : 'password'}
              />
              <span
                className="form__eye"
                onClick={() => setEye((prev) => !prev)}
              >
                {!eye ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>
            <button className="form__btn" type="submit">
              Создать аккаунт
            </button>
          </>
        )}
        {!status && (
          <>
            <input
              placeholder="Введите Email"
              className="form__field"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="form__btn"
              onClick={() => setStatus(true)}
              type="submit"
            >
              Продолжить
            </button>
            <Link to="/login">У меня уже есть аккаунт</Link>
          </>
        )}
      </form>
    </div>
  )
}

export default Form
