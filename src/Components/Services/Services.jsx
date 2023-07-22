import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from "../../img/glasses.png"
import Card from '../Card/Card';
import Humble from '../../img/humble.png';
import {motion} from 'framer-motion'
const Services = () => {
    const transition = { duration: 2, type: "spring" };
    return (

        <div className="services" id='Sevices'>

            {/* left side */}

            <div className="awesome">
                <span>My Awesome</span>
                <span>Skills</span>
                <span>
                    This is not the my complete skill, most of new skills are continuously adding

                </span>
                <a href="/" download> <button className="button s-button">Download CV</button></a>
               
            </div>

            <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>

            {/* right side */}
            <div className="car">
                {/* //first card */}
                <motion.div
                whileInView={{left: '18rem'}}
                initial={{left: '25%'}}
                transition={transition}
                 style={{ left: '22rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={"DSA"}
                        detail="Solve 800+ problems in DSA on coding platform like LeetCode, CodingNinjas, InterviewBit, HackerRank " />
                </motion.div>



                {/* //second card */}
                <motion.div 
                  whileInView={{left: '5rem'}}
                  initial={{left: '35%'}}
                  transition={transition}
                style={{ top: "14rem", left: "-10rem" }}>
                    <Card emoji={Glasses} heading={"Develper"}
                        detail={"Html, Css, JavaScipt, React, Node, Express, Mongo"} />
                </motion.div>

                {/* //thirdcard */}

                <motion.div 
               whileInView={{left: '-11rem'}}
               initial={{left: '50%'}}
               transition={transition}
                style={{ top: "25rem", left: "12rem", bottom: "10rem", marginBottom: "10px" }}>
                    <Card emoji={Humble} heading={"Languages"} detail={"C , C++, Html, Javascript"}/>
                </motion.div>
                  
                  {/* blur */}

                  <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
                  
            </div>

        </div>
    )
}

export default Services