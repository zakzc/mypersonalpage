import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App = () => (
    <>
        <Nav />
        <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Education />
            <Projects />
        </main>
        <Footer />
    </>
)

export default App
