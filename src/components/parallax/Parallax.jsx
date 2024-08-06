import "./parallax.scss";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";



const Parallax = ({ type }) => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset:["start start","end start"]
  });
 
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0% ", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0% ", "400%"]);

  return (
    <div className="parallax" 
    ref={ref}
    style={{
      background: type === "services" ?
        "linear-gradient(180deg, #111132, #30304a)" :
        "linear-gradient(180deg, #111132, #505064)"
    }}>

      <div className="text">

      <motion.h1 style={{ y: yText}}>{type === "services" ? "About me" : "What I Did?"}

      </motion.h1>
      {/* <motion.p style={{ y: yText}}>{type=="services"?"I'm Lufna Nasrin, a passionate MERN stack developer with an MCA from Pondicherry University. I have hands-on experience in building dynamic web applications and have completed a comprehensive MERN stack course. I thrive in collaborative environments and continuously seek to learn and innovate":""}</motion.p> */}
      </div>
      
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{ y: yBg , backgroundImage:`url(${type==="services"?"/planets.png":"/sun.png"})`}}></motion.div>
      <motion.div style={{x: yBg}}  className="stars"></motion.div>

    </div>
  )
}

export default Parallax;
