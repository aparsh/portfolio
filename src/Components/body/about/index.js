import React from 'react'
import SocialConatact from '../../common/social_contact/index'
import './about.css'

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hi there <img src={require("../../../images/icons/hand.png").default} className="hand-icon"/>, I am
                    <br /><span className="info-name">Aparsh Gupta.</span><br />
                    This is my portfolio.
                </div>
                <div className="about-image">
                    <img
                        src={require("../../../images/crazy_screen.png").default}
                        className="picture" />
                </div>
            </div>
            <SocialConatact/>
        </div>
    )
}

export default About
