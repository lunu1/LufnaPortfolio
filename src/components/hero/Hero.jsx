import React, { useRef } from 'react';
import "./hero.scss";
import { animate } from 'framer-motion';
import { motion, useInView } from 'framer-motion';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    },
};

const sliderVariants = {
    initial: {
        x: 0,

    },
    animate: {
        x: "-220%",
        transition: {

            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },

};




const Hero = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    



    return (
        <div className='hero' initial="initial" whileInView="animate" ref={ref}>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>LUFNA NASRIN T</motion.h2>
                    <motion.h1 variants={textVariants}>MERN Stack Developer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <button onClick={() => document.getElementById('Portfolio').scrollIntoView({ behavior: 'smooth' })} variants={textVariants}>See the Latest work</button>
                        <button onClick={() => document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' })} variants={textVariants}>Contact Me</button>

                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="scroll" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Frontend Developer
            </motion.div>
            <div className='imageContainer'>
                <div className="photosvg" initial={{ opacity: 1 }} whileInView={{ opacity: 0 }} transition={{ delay: 3, duration: 1 }}>
                    <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_15_137)">
                            <rect width="24" height="24" fill="none" />
                            <motion.path
                                strokeWidth={0.2}
                                initial={{ pathLength: 0 }}
                                animate={isInView && { pathLength: 1 }}
                                transition={{ duration: 4, repeat: Infinity }}
                                d="M3 8C3 7.44772 3.44772 7 4 7H8.5L9.5 4H14.5L15.5 7H20C20.5523 7 21 7.44772 21 8V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V8Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <circle strokeWidth={0.2} cx="12" cy="13" r="3" stroke="white" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_15_137">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>

                <motion.img initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 4, duration: 1,}} src="/lunus.jpg" alt="lunu" />
            </div>
        </div>
    )
}

export default Hero;