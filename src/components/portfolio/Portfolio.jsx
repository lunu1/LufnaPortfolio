import { useRef, useTransition } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Go-Bike",
        img: "/go-bike.jpg",
        desc: "This project is a web-based application designed for students  to lend or rent bikes within the university campus. Users can either rent bikes or lend their own bikes for rental. The rental fee is calculated based on the hourly rate set by the bike owner, providing a flexible and convenient transportation solution tailored to the needs of the university community. "

    },
    {
        id: 1,
        title: "Nimble",
        img: "/nimble.jpg",
        desc: "  Nimble is a comprehensive employee management system that focuses on optimizing workplace operations. It features robust leave management, a platform for employee suggestions, peer-to-peer feedback, and event management. The system is designed to enhance communication, streamline processes, and foster a collaborative and engaging work environment. "

    },
    {
        id: 1,
        title: "Jobify",
        img: "/jobsearch.jpg",
        desc: "Jobify is a developing platform designed to connect job seekers with employers, featuring job listings and personalized recommendations. The project is currently in progress. "

    },
]



const Single = ({ item }) => {

    const ref = useRef();


    const { scrollYProgress } = useScroll({
        target: ref,
        // offset:["start start","end start"]
 });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);


    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                        <img src={item.img} alt="img" ref={ref}/>
                    </div>
                    <motion.div className="textContainer" style={{ y }} >
                        <h3 >{item.title}</h3>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>

        </section>
    )
}


const Portfolio = () => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item} />
            ))
            }
        </div>
    )
}

export default Portfolio;