import React, { useEffect } from 'react'
import MyResume from "../assets/jonathan-resume.pdf"
import { StyledMobileIFrame, StyledDesktopIFrame } from '../styles/ResumeStyle'


const Resume = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    return(
        <>
            <StyledDesktopIFrame className='desktop' title="Jonathan Scott's Resume" src={`${MyResume}#zoom=100`} />
            <StyledMobileIFrame className='mobile' title="Jonathan Scott's Resume" src={`${MyResume}#zoom=45`} />
        </>
    )   
}

export default Resume