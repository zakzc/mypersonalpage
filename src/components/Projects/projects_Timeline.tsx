import React from 'react'
// assets: images
import diaryApp from '../../assets/img/DiaryApptake1.png'
import typerApp from '../../assets/img/TyperTake1.png'
import thisSite from '../../assets/img/thisSite.png'
import flashcards from '../../assets/img/Flashcards.png'
import apiImage from '../../assets/img/api.png'
import softTable from '../../assets/img/SoftWrapMobList.png'
import personalApp from '../../assets/img//Personal_meteor_work.png'
import pythonApp from '../../assets/img/PythonCarGame.png'
// comps
import SubTitle from '../views/subTitle'
// data
import myData from '../../data/myData.json'

const Timeline: React.FC = () => {
    // * data
    const myProjects = myData.projects.sort((a, b) => (b.year < a.year ? -1 : 1))

    const projectsImages = [
        { name: 'diary', image: diaryApp },
        { name: 'typer', image: typerApp },
        { name: 'current', image: thisSite },
        { name: 'flash api', image: apiImage },
        { name: 'flash', image: flashcards },
        { name: 'soft', image: softTable },
        { name: 'personal', image: personalApp },
        { name: 'py', image: pythonApp },
    ]

    interface ProjectImageProps {
        imageReference: string
        textReference: string
    }

    // * view
    const ProjectImage: React.FC<ProjectImageProps> = ({ imageReference, textReference }) => {
        let imageToShow = projectsImages.filter((i) => i.name === imageReference)
        return (
            <div className="img-tape img-tape--3">
                <img src={imageToShow[0].image} alt={textReference} />
            </div>
        )
    }

    interface LineOfTimeProps {
        project: {
            year: string
            name: string
            describe: string
            tech: string
            link: string
            imageRef: string
        }
        i: number
    }

    const LineOfTime: React.FC<LineOfTimeProps> = ({ project, i }) => (
        <div className="timeline" key={i} style={{ color: '#527689' }}>
            <div className="icon"></div>
            <div className="date-content">
                <div className="date-outer">
                    <span className="date">
                        <span className="year">{project.year}</span>
                    </span>
                </div>
            </div>
            <div className="timeline-content">
                <h5 className="title" style={{ textDecoration: 'underline', textDecorationColor: '#7a5c4f' }}>
                    {project.name}
                </h5>
                <p className="description">{project.describe}</p>
                <br />
                <p> {project.tech}</p>
                <a className="linkItem" href={project.link}>
                    Check the code
                </a>
                <br /> <br />
                <ProjectImage imageReference={project.imageRef} textReference={project.name} />
            </div>
        </div>
    )

    const ProjectList: React.FC = () => {
        return (
            <>
                {myProjects.map((project, i) => (
                    <LineOfTime project={project} i={i} key={i} />
                ))}
            </>
        )
    }

    return (
        <div className="container" style={{ maxWidth: '1250px' }}>
            <SubTitle color={'#7A5C4F'} subTitle={'Timeline of projects'} />
            <div className="main-timeline">
                <ProjectList />
            </div>
        </div>
    )
}
export default Timeline
