import React from 'react'
import './card.css'

function Card({emoji, head, detail }) {
  return (
    <>
    <div className='card'>
      <img src={emoji}></img>
      <span >{head} </span>
      <span> {detail}</span>
      <button className='c-button'>LEARN MORE</button>
    </div>
    </>
  )
}

export default Card
