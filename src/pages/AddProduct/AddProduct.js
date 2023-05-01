import React, { useContext } from 'react'
import { menuData } from '../../utils/menuData'
import { useForm } from 'react-hook-form'
import { CustomContext } from '../../utils/Context'

const AddProduct = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  })

  const { handleAddProduct } = useContext(CustomContext)

  return (
    <section className="addProduct">
      <div className="container">
        <div className="addProduct__content">
          <form
            noValidate
            className="form"
            onSubmit={handleSubmit(handleAddProduct)}
          >
            <h2 className="form__title">Добавить продукт</h2>

            <label htmlFor="" className="form__label">
              <span className="form__label-title">Название </span>
              <input
                {...register('title', { required: true })}
                placeholder="Введите название"
                type="text"
                className="form__field"
              />
            </label>
            <label htmlFor="" className="form__label">
              <span className="form__label-title">Изображение </span>
              <input
                {...register('image', { required: true })}
                placeholder="Введите ссылку"
                type="text"
                className="form__field"
              />
            </label>
            <label htmlFor="" className="form__label">
              <span className="form__label-title">Описание </span>
              <input
                {...register('description', { required: true })}
                placeholder="Введите описание"
                type="text"
                className="form__field"
              />
            </label>
            <div className="form__block">
              <label htmlFor="" className="form__label">
                <span className="form__label-title">Цена </span>
                <input
                  {...register('price', { required: true })}
                  placeholder="Введите цену"
                  type="text"
                  className="form__field"
                  defaultValue="0"
                />
              </label>
              <label htmlFor="" className="form__label">
                <span className="form__label-title">Вес </span>
                <input
                  {...register('weight', { required: true })}
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
                  {...register('protein', { required: true })}
                  placeholder="Введите белки"
                  type="text"
                  className="form__field"
                  defaultValue="0"
                />
              </label>
              <label htmlFor="" className="form__label">
                <span className="form__label-title">Жиры </span>
                <input
                  {...register('fats', { required: true })}
                  placeholder="Введите жиры"
                  type="text"
                  className="form__field"
                  defaultValue="0"
                />
              </label>
              <label htmlFor="" className="form__label">
                <span className="form__label-title">Углеводы </span>
                <input
                  {...register('carbohydrates', { required: true })}
                  placeholder="Введите углеводы"
                  type="text"
                  className="form__field"
                  defaultValue="0"
                />
              </label>
            </div>
            <label className="form__label" htmlFor="">
              <span>Категория</span>
              <select
                {...register('category', { required: true })}
                className="form__select"
                name=""
                id=""
              >
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
