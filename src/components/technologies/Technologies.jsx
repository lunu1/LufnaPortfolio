// import React from 'react'
import { Js, Html, Css, React, Mongodb, Express, Node, Figma } from "../../Svg";
import './technologies.scss';
import { animate, motion } from "framer-motion";

const Technologies = () => {

    const iconVariants = (duration) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            },
        },

    });

    return (
        <div className='technologies'>
            <div className="about">
            <h1>About me</h1>
            <p>
            Hi, I'm Lufna Nasrin T, a recent MCA graduate from Pondicherry University with a strong passion for web development.
             Specializing in the MERN stack, 
             I have completed the 'MERN 2024 Edition - MongoDB, Express, 
             React and NodeJS' course on Udemy and gained practical experience 
             through a three-month internship. I am dedicated to continuous 
             learning and innovation, and I am eager to leverage my skills 
             to contribute to impactful projects in the tech industry. 
             My journey is driven by a love for coding and a desire to 
             collaborate with dynamic, forward-thinking teams.
            </p>
            </div>

<div className="skill">
           <h1>My Skills</h1>
           </div>

            <div className="svg">
                <motion.div variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="js">
                    <Js />
                </motion.div>
                <motion.div variants={iconVariants(3)}
                    initial="initial"
                    animate="animate" className="html">
                    <Html />
                </motion.div>
                <motion.div variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="react">
                    <React />
                </motion.div>
                <motion.div variants={iconVariants(6)}
                    initial="initial"
                    animate="animate" className="css">
                    <Css />
                </motion.div>
                <motion.div variants={iconVariants(4)}
                    initial="initial"
                    animate="animate" className="figma">
                    <Figma />
                </motion.div>
                <motion.div variants={iconVariants(3)}
                    initial="initial"
                    animate="animate" className="mongodb">
                    <Mongodb />

                </motion.div>
                <motion.div variants={iconVariants(2)}
                    initial="initial"
                    animate="animate" className="express">
                    <Express />

                </motion.div>

                <div className="node">
                    <Node />
                </div>

            </div>
        </div>
    )
}

export default Technologies;