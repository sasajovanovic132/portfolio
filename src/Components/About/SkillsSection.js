import React from 'react'
import './SkillsSection.scss';
function SkillsSection({ skill, progress, width }) {
    return (
        <div className="SkillsSection">
            <div className="skills-container">
                <div className="skill-bar">
                    <p className="skill-text">{progress}</p>
                    <div className="skill-progress">
                        <div className="progress">
                            <div className="inner-pregress" style={{ width: width }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection;