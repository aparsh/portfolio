import React from 'react'
import './project_card.css'

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-info">
                <label className="project-title">{project.title}</label>
                <div className="project-links">
                    {project.demo && <a className="project-link" href={project.demo} target="_blank">
                        <div className="link-button">
                            <i class="fas fa-globe">Demo</i>
                        </div>
                    </a>}
                    {project.github && <a className="project-link" href={project.github} target="_blank">
                        <div className="link-button">
                        <i class="devicon-github-original colored">Github</i>
                        </div>
                    </a>}
                </div>
                <p className="project-about">{project.about}</p>
                <div className="project-tags">
                    {project.tags.map((tag) => {
                        return(
                            <label className="project-tag">{tag}</label>
                        )
                    })}
                </div>
            </div>
            <img src={project.image} className="project-image"></img>
        </div>
    )
}

export default ProjectCard
