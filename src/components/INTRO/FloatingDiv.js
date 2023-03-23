import React from 'react'
import './FloatingDiv.css'

function FloatingDiv({image, txt1, txt2}) {
  return (
    <div className='f-div'>
      <img src={image}></img>
      <span>
        {txt1}
      <br/>
      {txt2}
      </span>
          </div>
  )
}

export default FloatingDiv
