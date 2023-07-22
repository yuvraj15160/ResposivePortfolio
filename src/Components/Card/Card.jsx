import React from 'react'
import './Card.css'
const Card = (probs) => {
  return (
      <div className="cards">
        <img src={probs.emoji} alt="" />
        <span>{probs.heading}</span>
        <span>{probs.detail}</span>
        <button className="c-button">LearnMore</button>
      </div>
  )
}

export default Card