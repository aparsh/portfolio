import React from 'react'
import './mobile.css'
function Mobile({ isOpen, setIsOpen }) {
    return (
        <div className="mobile">
            <div onClick={() => setIsOpen(!isOpen)}>
                <i className="far fa-times-circle close-icon"></i>
            </div>
            <div className="mobile-options">
            <div className="mobile-option">
                    <a href="#work">
                        <i className="fas fa-file-code option-icon"></i>
                        Work
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#achievements">
                        <i className="fas fa-chart-line option-icon"></i>
                        Achievements
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#projects">
                        <i className="far fa-edit option-icon"></i>
                        Projects
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#skills">
                        <i className="fas fa-laptop-code option-icon"></i>
                        Skills
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#contact">
                        <i className="far fa-user option-icon"></i>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Mobile
