import React from 'react'
import './skill_card.css'

function SkillCard({skill}) {
    return (
        <div className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <label className="skill-label">{skill.name}</label>
        </div>
    )
}

export default SkillCard
