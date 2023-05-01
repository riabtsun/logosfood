import React from 'react'
import { menuData } from '../../utils/menuData'

const AddProduct = () => {
  return (
    <section className="addProduct">
      <div className="container">
        <div className="addProduct__content">
          <form action="" className="form">
            <h2 className="form__title">Добавить продукт</h2>

            <label htmlFor="" className="form__label">
              <span className="form__label-title">Название </span>
              <input
                placeholder="Введите название"
                type="text"
                className="form__field"
              />
            </label>
            <label htmlFor="" className="form__label">
              <span className="form__label-title">Изображение </span>
              <input
                placeholder="Введите ссылку"
                type="text"
                className="form__field"
              />
            </label>
            <label htmlFor="" className="form__label">
              <span className="form__label-title">Описание </span>
              <input
                placeholder="Введите описание"
                type="text"
                className="form__field"
              />
            </label>
            <div className="form__block">
              <label htmlFor="" className="form__label">
                <span className="form__label-title">Цена </span>
                <input
                  placeholder="Введите цену"
                  type="text"
                  className="form__field"
                  defaultValue="0"
                />
              </label>
              <label htmlFor="" className="form__label">
                <span className="form__label-title">Вес </span>
                <input
                  placeholder="Введите вес"
                  type="text"
                  className="form__field"
                  defaultValue="0"
                />
              </label>
            </div>
            <div className="form__block">
              <label htmlFor="" className="form__label">
                <span className="form__label-title">Белки </span>
                <input
                  placeholder="Введите белки"
                  type="text"
                  className="form__field"
                  defaultValue="0"
                />
              </label>
              <label htmlFor="" className="form__label">
                <span className="form__label-title">Жиры </span>
                <input
                  placeholder="Введите жиры"
                  type="text"
                  className="form__field"
                  defaultValue="0"
                />
              </label>
              <label htmlFor="" className="form__label">
                <span className="form__label-title">Углеводы </span>
                <input
                  placeholder="Введите углеводы"
                  type="text"
                  className="form__field"
                  defaultValue="0"
                />
              </label>
            </div>
            <label className="form__label" htmlFor="">
              <span>Категория</span>
              <select className="form__select" name="" id="">
                <option disabled value="">
                  Выберите категорию
                </option>
                {menuData.map((item) => {
                  return (
                    <option key={item.en} value={item.en}>
                      {item.ru}
                    </option>
                  )
                })}
              </select>
            </label>
            <button className="form__btn" type="submit">
              Создать продукт
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddProduct
