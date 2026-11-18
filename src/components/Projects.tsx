import myData from '../data/myData.json'
import Reveal from './Reveal'

const projects = [...myData.projects].sort((a, b) => b.year.localeCompare(a.year))

const Projects = () => (
    <section id="projects" className="section">
        <div className="container">
            <h2 className="section__title">Recent Projects</h2>
            <p className="section__lead">A selection of things I've built, from learning projects to full apps.</p>
            <ul className="grid grid--projects">
                {projects.map((p, i) => (
                    <li key={p.name}>
                        <Reveal delay={(i % 2) * 0.1}>
                            <article className="card project">
                                <h3>
                                    {p.name} <small>({p.year})</small>
                                </h3>
                                <p>{p.describe}</p>
                                <p className="project__tech">{p.tech.replace('Technologies used: ', '')}</p>
                                {p.link.startsWith('http') && (
                                    <a className="btn btn--primary btn--sm" href={p.link}>
                                        {p.link.includes('github.com') ? 'GitHub' : 'Live Demo'}
                                    </a>
                                )}
                            </article>
                        </Reveal>
                    </li>
                ))}
            </ul>
        </div>
    </section>
)

export default Projects
