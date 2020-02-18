import React from 'react'
import MyResume from "../assets/jonathan-resume.pdf"
import {StyledIFrame} from '../styles/ResumeStyle'


const Resume = () => {
    return(
        <StyledIFrame  title="Jonathan Scott's Resume" src={MyResume} />
    )   
}

export default Resume