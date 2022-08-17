import React from 'react'
import './Achievements.css'

const Achievements = ({achievements}) => {
  const title = 'Logros';
  return (
    <div className='achievements'>
      <hr />
      <h3>{ title } </h3>
        { achievements.map( value => {
            return (
                <div key={ value } className="info">
                    <p>{ value.degree }</p>
                    <p>{ value.project }</p>
                </div>
            )
        })}
    </div>
  )
}

export default Achievements