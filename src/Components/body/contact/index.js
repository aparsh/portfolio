import React from 'react'
import './contact.css'
import Separator from '../../common/separator/index'
import SocialContact from '../../common/social_contact/index'

function Contact() {
    return (
        <div className="contact">
            <Separator/>
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Want to explore more? See my profiles.</p>
                    <SocialContact />
                </div>
                <div className="download">
                    <a download href="https://bit.ly/aparsh_gupta">
                       <i className="fas fa-cloud-download-alt"/> Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
