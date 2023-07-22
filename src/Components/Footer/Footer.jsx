import React from 'react'
import './Footer.css'
import Wave from "../../img/wave.png"
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

const Footer = () => {
  return (
     <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
              <div className="i-icons">
                  <a href="https://github.com/yuvraj15160" target="_blank" > <img src={Github} alt="" />  </a>
                  <a href="https://www.linkedin.com/in/yuvraj-pandey-a45b17203" target="_blank">  <img src={LinkedIn} alt="" />  </a>
                  <a href="">  <img src={Instagram} alt="" />  </a>

              </div>
            <span style={{color: 'white' }}>yuvrajpandey741@gmail.com</span>
        </div>
     </div>
  )
}

export default Footer