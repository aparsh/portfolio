import React from 'react'
import './work_card.css'

function WorkCard({ item }) {
    return (
        <div className="work-card">
            <img src={item.companyLogo} className="work-logo"></img>
            <div className="work-info">
                <label className="company-name">{item.company}</label>
                <div className="work-dates">
                    <label>{item.dateJoining}</label> - <label>{item.dateEnd}</label>
                </div>
                <div className="work-description">
                    <p>{item.work}</p>
                </div>
                <div className="work-tags">
                    {item.tags.map((tag) => {
                        return(
                            <label className="work-tag">{tag}</label>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default WorkCard
