import React from "react";
import "./Intro.css";
import Github from "../img/github.png";
import LinkedIn from "../img/linkedin.png";
import Instagram from "../img/instagram.png";

import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import boy from "../img/boy.png";
import thumbup from "../img/thumbup.png";
import crown from "../img/crown.png";
import glassesimoji from "../img/glassesimoji.png";

import FloatingDiv from "./FloatingDiv/FloatingDiv";

import { motion } from "framer-motion";
const Intro = () => {

  const transition = { duration: 2, type: "spring" };
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am </span>
          <span>Yuvraj Pandey</span>
          <span>
            Certificate of Excellence in C++ and Data Structures & Algorithms by
            Coding Ninjas, Solved almost 800 problems on DSA & worked with HTML,
            CSS, JS, React
          </span>
        </div>
        <button className=" button i-button">Hire me</button>

        <div className="i-icons">
          <a href="https://github.com/yuvraj15160" target="_blank">
            {" "}
            <img src={Github} alt="" />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/yuvraj-pandey-a45b17203"
            target="_blank"
          >
            {" "}
            <img src={LinkedIn} alt="" />{" "}
          </a>
          <a href="">
            {" "}
            <img src={Instagram} alt="" />{" "}
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}>

          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </motion.div>

        <motion.div
          initial={{ right: "34rem", top: "18rem" }}
          whileInView={{ right: "25rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}>

          <FloatingDiv image={thumbup} txt1="Impressive" txt2="Dsa" />
        </motion.div>

        {/* blur divs */}

        <div className="blur" style={{ background: "rgb(238 210 255)" }}>
          {" "}
        </div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem"
          }}
        >

        </div>
      </div>
    </div>
  );
};

export default Intro;
