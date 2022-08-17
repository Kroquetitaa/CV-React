import React from 'react'
import './Education.css'

const Education = ( {education} ) => {
  return (
    <div className='education'>
      { education.map( value => {
        return ( 
          <div key={ value } className='infoCourse'>
            <p className='infoCourse--title'> Grado: {value.name} - Año cursado: {value.date}</p>
            <p className='infoCourse--center'> Centro de estudios: { value.where }  </p>
          </div>
        )
      })}
    </div>
  )
}

export default Education