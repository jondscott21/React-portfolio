import React, {useState, useEffect} from 'react'
import MyResume from "../assets/jonathan-resume.pdf"
import {StyledIFrame, IFrameWrapper} from '../styles/ResumeStyle'


const Resume = () => {
    const [url, setUrl] = useState(`${MyResume}#zoom=100`)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
       handleResize()
       window.addEventListener('resize', handleResize)
    },[window.innerWidth, url])
    const handleResize = () => {
        if (window.innerWidth <= 500) {
            setLoading(true)
            setUrl(`${MyResume}#zoom=57`)
            setLoading(false)
        }
    }
    console.log(url)
    return(
        // <IFrameWrapper>
        //     <StyledIFrame  title="Jonathan Scott's Resume" src={MyResume} />
        // </IFrameWrapper>
        <>
            {!loading ? <StyledIFrame title="Jonathan Scott's Resume" src={url}  /> : null}
        </>
    )   
}

export default Resume