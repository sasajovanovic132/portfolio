
import './About.scss';
import React from 'react';
import Title from './Title';
import ImageSection from './ImageSection';
import SkillsSection from './SkillsSection';
import RenderSmoothImage from '../RenderSmoothImage/RenderSmoothImage';
import aboutPhoto from '../../Images/code.jpg';
import Typical from 'react-typical';



function About() {
    return (
        <div className="About" >
            <div className='title'>
                <Title title={' ABOUT'} span={'ABOUT ME'} />
            </div>
            <div className='main-content'>
                <div className="top">
                    <ImageSection />
                </div>
                <div className='skills'>
                    <div className='skills-title'>
                        <Title title={'skills'} span={'SKILLS'} />
                    </div>
                    <div className="skillsContainer">
                        <SkillsSection skill={'Web Design'} progress={<img src="https://img.icons8.com/color/48/000000/web-design.png" />} width={'70%'} />
                        <SkillsSection skill={'JavaScript'} progress={<img src="https://img.icons8.com/color/48/000000/javascript.png" />} width={'85%'} />
                        <SkillsSection skill={'React.js'} progress={<img src="https://img.icons8.com/bubbles/50/000000/react.png" />} width={'70%'} />
                        <SkillsSection skill={'Redux.js'} progress={<img src="https://img.icons8.com/color/48/000000/redux.png" />} width={'60%'} />
                        <SkillsSection skill={'Node.js'} progress={<img src="https://img.icons8.com/color/48/000000/nodejs.png" />} width={'50%'} />
                        <SkillsSection skill={'Java'} progress={<img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" />} width={'70%'} />
                        <SkillsSection skill={'SQL'} progress={<img src="https://img.icons8.com/color/48/000000/sql-database-administrators-group.png" />} width={'85%'} />
                        <SkillsSection skill={'chess'} progress={<img src="https://img.icons8.com/color/48/000000/chessboard.png" />} width={'99%'} />
                    </div> */

                </div>
                <div className='education'>

                </div>
            </div>


        </div>
    )
}
export default About;
//<img src="https://img.icons8.com/color/48/000000/chessboard.png"/>
/* <div className="skillsContainer">
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
            </div> */