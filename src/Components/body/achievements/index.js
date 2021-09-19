import React from 'react'
import './achievements.css'
import Separator from '../../common/separator/index'
import AchievemntsData from '../../data/achievements'

function Achievements() {
    const data = AchievemntsData;
    return (
        <div className="achievements">
            <Separator />
            <label className="section-title">Achievements</label>
            <div className="achievement-section">
                <img src={require("../../../images/achievement.png").default} className="achievement-image"/>
                <ul className="achievement-list">
                    {data.map((item) => {
                        return (
                            <li>
                                <div className="achievement-list-item">
                                    <p className="achievement-text">{item.achievement}</p>
                                    {item.certificate &&
                                        <a href={item.certificate} className="achievement-certificate-button" target="_blank">certificate</a>}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Achievements
