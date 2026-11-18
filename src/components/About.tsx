import myData from '../data/myData.json'
import aboutImage from '../assets/stock/about-macbook.jpg'
import Reveal from './Reveal'

const About = () => (
    <section id="about" className="section section--alt">
        <div className="container about">
            <Reveal>
                <img className="about__img" src={aboutImage} alt="MacBook showing code in an editor" />
            </Reveal>
            <Reveal delay={0.1}>
                <h2 className="about__title">About Me</h2>
                {myData.aboutMe.map((t, i) => (
                    <p key={i}>{t.paragraph}</p>
                ))}
                <a className="btn btn--primary" href="https://github.com/zakzc">
                    See my code
                </a>
            </Reveal>
        </div>
    </section>
)

export default About
