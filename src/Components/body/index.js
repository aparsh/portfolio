import React from 'react'
import './body.css'
import About from './about/index'
import Work from './work/index'
import Skills from './skills/index'
import Contact from './contact/index'
import Projects from './projects/index'
import Achievements from './achievements/index'

function Body() {
    return (
        <div className="body">
            <section id='about'>
                <About></About>
            </section>
            <section id='work'>
                <Work></Work>
            </section>
            <section id='achievements'>
                <Achievements></Achievements>
            </section>
            <section id='projects'>
                <Projects></Projects>
            </section>
            <section id='skills'>
                <Skills></Skills>
            </section>
            <section id='contact'>
                <Contact></Contact>
            </section>
        </div>
    )
}

export default Body
