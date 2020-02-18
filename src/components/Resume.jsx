import React, {useState, useEffect} from 'react'
import MyResume from "../assets/jonathan-resume.pdf"
import {StyledIFrame, IFrameWrapper} from '../styles/ResumeStyle'


const Resume = () => {
    const [percent, setPercent] = useState(100)
    useEffect(() => {
        if (window.innerWidth === 500) {
            setPercent(57)
        }
    },[window.innerWidth])
    return(
        // <IFrameWrapper>
        //     <StyledIFrame  title="Jonathan Scott's Resume" src={MyResume} />
        // </IFrameWrapper>
        <StyledIFrame  title="Jonathan Scott's Resume" src={`${MyResume}#zoom=${percent}`} />
    )   
}

export default Resume