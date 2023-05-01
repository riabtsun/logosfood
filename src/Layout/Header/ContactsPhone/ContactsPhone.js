import React from 'react'
import './_contactsPhone.sass'
import Calling from '../../../assets/icons/Calling'
const ContactsPhone = () => {
  return (
    <div className="contactsPhone">
      <Calling className="contactsPhone-icon" />
      <div className="contactsPhone-text">
        <span className="contactsPhone-text-contacts">Контакты:</span>
        <a className="contactsPhone-text-link" href="tel:79175105759">
          +7 (917) 510-57-59
        </a>
      </div>
    </div>
  )
}

export default ContactsPhone
