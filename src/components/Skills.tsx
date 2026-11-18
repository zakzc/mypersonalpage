import myData from '../data/myData.json'
import Reveal from './Reveal'
import html from '../assets/svg/html5.svg'
import css from '../assets/svg/css3.svg'
import php from '../assets/svg/php.svg'
import python from '../assets/svg/python.svg'
import js from '../assets/svg/js.svg'
import react from '../assets/svg/react.svg'
import node from '../assets/svg/node.svg'
import jest from '../assets/svg/jest.svg'
import ts from '../assets/svg/typescript.svg'
import uxui from '../assets/svg/uxui.svg'
import git from '../assets/svg/git.svg'

const icons: Record<string, string> = {
    HTML5: html,
    CSS3: css,
    PHP: php,
    Python: python,
    Javascript: js,
    React: react,
    Node: node,
    Jest: jest,
    TypeScript: ts,
    'UX/UI': uxui,
    Git: git,
}

const MAX_LEVEL = 4

interface Skill {
    skillSet: string
    language: string[]
    level?: number[]
}
const skills: Skill[] = myData.skills

const Skills = () => (
    <section id="skills" className="section">
        <div className="container">
            <h2 className="section__title">Skills &amp; Technologies</h2>
            <p className="section__lead">Tools and technologies I work with, and how deep I go with each.</p>
            <ul className="grid grid--skills">
                {skills.map((skill, i) => (
                    <li key={skill.skillSet}>
                        <Reveal delay={(i % 3) * 0.08}>
                            <article className="card skill">
                                <span className="skill__icon">
                                    {icons[skill.skillSet] ? (
                                        <img src={icons[skill.skillSet]} alt="" />
                                    ) : (
                                        <b aria-hidden="true">{skill.skillSet.charAt(0)}</b>
                                    )}
                                </span>
                                <h3>{skill.skillSet}</h3>
                                <p>{skill.language.join('').trim()}</p>
                                {skill.level && (
                                    <span
                                        className="skill__level"
                                        role="img"
                                        aria-label={`Level ${skill.level.length} of ${MAX_LEVEL}`}
                                    >
                                        {Array.from({ length: MAX_LEVEL }, (_, n) => (
                                            <i key={n} className={n < skill.level!.length ? 'on' : ''} />
                                        ))}
                                    </span>
                                )}
                            </article>
                        </Reveal>
                    </li>
                ))}
            </ul>
            <h3 className="subhead">Languages</h3>
            <ul className="chips">
                {myData.languages.map((l) => (
                    <li key={l.name}>
                        <strong>{l.name}</strong> <span>{l.level}</span>
                    </li>
                ))}
            </ul>
        </div>
    </section>
)

export default Skills
