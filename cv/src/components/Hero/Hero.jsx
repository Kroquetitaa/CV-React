import React from 'react'
import './Hero.css'

const Hero = ( { hero } ) => {
  return (
    <div className="Introhero">
      <img src={ hero.image } alt={ hero.name } />
      <h2> { hero.name } { hero.surname} </h2>
      <p> { hero.description } </p>
    </div>
  )
}

export default Hero;