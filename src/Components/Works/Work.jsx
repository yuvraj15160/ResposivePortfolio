import React from 'react'
import './Work.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";
const Work = () => {
  return (
     <div className="works" id="Work">

          <div className="awesome">
              <span>Works with All these</span>
              <span>Brand & client</span>
              <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Praesent elit neque, posuere a mollis a, tempor in magna.
                  Mauris eleifend est lectus, eget rhoncus ligula auctor ac. 
                  Morbi a justo diam. Proin congue orci nisl, ac lacinia elit venenatis vitae. 
                  Aenean ipsum lectus, fringilla eget sem eget, sodales rhoncus velit. Suspendisse rhoncus luctus velit,
                  in ullamcorper metus molestie in. Nulla eget fringilla nisl.

              </span>
               <button className="button s-button">Hire me</button>

          </div>


       {/* right side */}

       <div className="w-right">

         <motion.div
         initial={{rotate: 45}}
         whileInView={{rotate: 0}}
         viewport={{margin: '-40px'}}
         transition={{duration: 3.5, type:'spring'}}
          className="w-mainCircle">

            <div className="w-secCircle">
                <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Fiverr} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Facebook} alt="" />
            </div>
         </motion.div>
          {/* background Circle */}

          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>



       </div>

     </div>
  )
}

export default Work