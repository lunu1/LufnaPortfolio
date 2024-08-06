import { useRef, useTransition } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Go-Bike",
        img: "/go-bike.jpg",
        desc: "Te  l stations. It also includes an administrative interface for managing bike inventories, tracking rentals, and generating reports. The system aims to enhance the user experience by providing a convenient and efficient platform for bike rentals. "

    },
    {
        id: 1,
        title: "Nimble",
        img: "/nimble.jpg",
        desc: "    from a network of rental stat The system aims to enhance the user experience by providing a convenient and efficient platform for bike rentals. "

    },
    {
        id: 1,
        title: "Jobify",
        img: "/jobsearch.jpg",
        desc: "Theo easilytwork of rental stations. It also includes an administrative interface for managing bike inventories, tracking rentals, and generating reports. The system aims to enhance the user experience by providing a convenient and efficient platform for bike rentals. "

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