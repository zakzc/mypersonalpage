import myData from '../data/myData.json'
import Reveal from './Reveal'

const Education = () => (
    <section id="education" className="section section--alt">
        <div className="container">
            <h2 className="section__title">Education</h2>
            <p className="section__lead">Formal training behind the work.</p>
            <ul className="grid grid--edu">
                {[...myData.education]
                    .sort((a, b) => a.order - b.order)
                    .map((e, i) => (
                        <li key={e.order}>
                            <Reveal delay={(i % 3) * 0.08}>
                                <article className="card edu">
                                    <span className="tag">{e.level}</span>
                                    <h3>{e.description}</h3>
                                    <p>
                                        {e.title} &middot; {e.stage}
                                    </p>
                                </article>
                            </Reveal>
                        </li>
                    ))}
            </ul>
            <h3 className="subhead">Certifications</h3>
            <ul className="chips">
                {myData.certifications.map((c) => (
                    <li key={c}>{c}</li>
                ))}
            </ul>
        </div>
    </section>
)

export default Education
