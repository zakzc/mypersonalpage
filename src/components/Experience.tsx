import myData from '../data/myData.json'
import Reveal from './Reveal'

const Experience = () => (
    <section id="experience" className="section">
        <div className="container">
            <h2 className="section__title">Professional Experience</h2>
            <p className="section__lead">Where I've worked, from diplomacy and teaching to software engineering.</p>
            <ol className="timeline">
                {myData.experience.map((job) => (
                    <li key={job.company + job.period}>
                        <Reveal>
                            <article className="card job">
                                <div className="job__head">
                                    <div>
                                        <h3>{job.role}</h3>
                                        <p className="job__company">{job.company}</p>
                                    </div>
                                    <div className="job__meta">
                                        <span className="tag">{job.period}</span>
                                        <span>{job.location}</span>
                                    </div>
                                </div>
                                <p>{job.summary}</p>
                                <ul className="job__list">
                                    {job.highlights.map((h) => (
                                        <li key={h}>{h}</li>
                                    ))}
                                </ul>
                            </article>
                        </Reveal>
                    </li>
                ))}
            </ol>
        </div>
    </section>
)

export default Experience
