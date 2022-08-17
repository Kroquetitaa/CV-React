import React from 'react'
import './About.css'

const About = ( { about }) => {
  const title = 'Sobre mí';
  return (
    <div className='about'>
      <hr />
      <h3> { title } </h3>
      { about.aboutMe.map( value => {
        return ( 
          <div key={JSON.stringify( value )} className="info">
            <p>{ value.info }</p>
          </div>
        )
      })}
    </div>
  )
}

export default About