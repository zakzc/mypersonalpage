import { motion } from 'framer-motion'
import heroImage from '../assets/stock/hero-macbook.jpg'

const Hero = () => (
    <section id="home" className="hero">
        <div className="container hero__inner">
            <motion.div
                className="hero__text"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>
                    Hi, I'm
                    <br />
                    <span className="gradient-text">Zak Zangrando</span>
                </h1>
                <p>
                    Software Engineer at S&amp;P Global, working across frontend and cloud. Full-stack developer building websites with modern tools. I like to learn things,
                    build things and fix things, with a keen eye to design and purpose.
                </p>
                <div className="hero__actions">
                    <a className="btn btn--primary" href="#projects">
                        View Projects
                    </a>
                    <a className="btn btn--ghost" href="https://github.com/zakzc">
                        GitHub
                    </a>
                </div>
            </motion.div>
            <motion.div
                className="hero__media"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
            >
                <img src={heroImage} alt="A MacBook opening in a dark room, its screen glowing" />
            </motion.div>
        </div>
    </section>
)

export default Hero
