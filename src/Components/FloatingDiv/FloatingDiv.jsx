import React from 'react'
import './FloatingDiv.css'
const FloatingDiv = (probs) => {
  return (
       <div className="floatingDiv">
        <img src={probs.image} alt="" />
         <span>
           { probs.txt1}
            <br />
          { probs.txt2}
         </span>
       </div>
  )
}

export default FloatingDiv; 