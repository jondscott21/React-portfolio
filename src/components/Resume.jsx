import React, { useEffect } from 'react'
import MyResume from "../assets/jonathan-resume.pdf"
import { StyledMobileIFrame, StyledDesktopIFrame } from '../styles/ResumeStyle'


const Resume = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    return(
        <>
            <StyledMobileIFrame title="Jonathan Scott's Resume" src={`${MyResume}#zoom=30`} />
            <StyledDesktopIFrame title="Jonathan Scott's Resume" src={`${MyResume}#zoom=100`} />
        </>
    )   
}

export default Resume