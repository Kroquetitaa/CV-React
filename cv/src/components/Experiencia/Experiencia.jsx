import React from 'react'
import './Experiencia.css'

const Experiencia = ( { experiencies }) => {
  return (
    <div className='experiencies'>
        { experiencies.map( value => {
            return (
                <div key={ value } className="infoExperiencies">
                    <p className='infoExperiencies--name'> { value.name }  | { value.date}</p>
                    <p className='infoExperiencies--where'> { value.where } </p>
                    <p className='infoExperiencies--description'> {  value.description  }</p>
                    <p className='infoExperiencies--skills'>Herramientas: { value.skills + ''} </p>
                </div>
            )
        })}
    </div>
  )
}

export default Experiencia