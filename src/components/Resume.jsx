import React from 'react'
import MyResume from "../assets/jonathan-resume.pdf"
import {StyledIFrame, IFrameWrapper} from '../styles/ResumeStyle'


const Resume = () => {
    return(
        // <IFrameWrapper>
        //     <StyledIFrame  title="Jonathan Scott's Resume" src={MyResume} />
        // </IFrameWrapper>
        <StyledIFrame  title="Jonathan Scott's Resume" src={MyResume} />
    )   
}

export default Resume