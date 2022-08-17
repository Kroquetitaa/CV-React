import React from 'react'
import './Contact.css'

const Contact = ( { contact }) => {
  const title = 'Contacto';
  return (
    <div className="contact">
      <hr />
      <h3> { title } </h3>
      <p className='phone'>Telefono: { contact.phone }</p>
      <p className='email'>Email: { contact.email }</p>
  </div>
  )
}

export default Contact