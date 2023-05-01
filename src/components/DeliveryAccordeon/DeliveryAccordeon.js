import React, { useRef, useState } from 'react'
import FaArrow from '../../assets/icons/FaArrow'

const DeliveryAccordion = ({ item }) => {
  const contentEl = useRef()
  const [clicked, setClicked] = useState(false)

  const showAnswer = () => {
    setClicked((prev) => !prev)
  }

  return (
    <>
      <div className="delivery__card" onClick={showAnswer}>
        <p className="delivery__card-title">
          <span className="delivery__card-name">{item.title}</span>
          <FaArrow />
        </p>
      </div>
      <div
        ref={contentEl}
        style={
          clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: '0px' }
        }
        className={`delivery__desk ${clicked && 'open'}`}
      >
        <p className="delivery__text">{item.answer}</p>
      </div>
    </>
  )
}

export default DeliveryAccordion
