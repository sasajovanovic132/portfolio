
import './About.scss';
import React from 'react';
import Title from './Title';
import ImageSection from './ImageSection';
import SkillsSection from './SkillsSection';




function About() {
    return (
        <div className="About">
            <Title title={'About'} span={'About Me'} />
            <ImageSection />
            <br></br>
            <Title className='skill-title' title={' Skills'} span={'Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Web Design'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Command Line'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Git'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'JavaScript'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'React.js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Redux.js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Node.js'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'MySQL'} progress={'85%'} width={'85%'} />
                <SkillsSection skill={'Postgre'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Java'} progress={'70%'} width={'70%'} />
            </div>
            <Title title={'Education'} span={'Education'} />

        </div>
    )
}
export default About;