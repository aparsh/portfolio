import React from 'react'
import './web.css'
function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#projects">
                <i className="far fa-edit option-icon"></i>
                Projects
                </a>
            </div>
            <div className="web-option">
                <a href="#skills">
                <i className="fas fa-laptop-code option-icon"></i>
                Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#work">
                <i className="far fa-file-code option-icon"></i>
                Work
                </a>
            </div>
            <div className="web-option">
                <a href="#achievements">
                <i className="fas fa-chart-line option-icon"></i>
                Achievements
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                <i className="far fa-user option-icon"></i>
                Contact
                </a>
            </div>
        </div>
    )
}

export default Web
