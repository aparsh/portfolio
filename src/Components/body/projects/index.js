import React from 'react'
import './projects.css'
import ProjectsData from "../../data/projects"
import ProjectCard from './project_card'
import Separator from '../../common/separator/index'

function Projects() {
    const data = ProjectsData;
    return (
        <div className="projects">
            <Separator/>
            <label className="section-title">Projects</label>
            <div>
                {data.map((item) => {
                    return(
                        <ProjectCard project={item}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects
