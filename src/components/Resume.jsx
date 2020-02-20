import React, {useState, useEffect} from 'react'
import MyResume from "../assets/jonathan-resume.pdf"
import { StyledMobileIFrame, StyledDesktopIFrame } from '../styles/ResumeStyle'


const Resume = () => {
    const [url, setUrl] = useState(`${MyResume}#zoom=100`)
    const [loading, setLoading] = useState(false)
    // useEffect(() => {
    //    window.addEventListener('resize', handleResize)
    // },[])
    // const handleResize = () => {
    //     if (window.visualViewport.width <= 600) {
    //         setLoading(true)
    //         setUrl(`${MyResume}#zoom=57`)
    //         setLoading(false)
    //     }
    //     else if (window.visualViewport.width > 600) {
    //         setLoading(true)
    //         setUrl(`${MyResume}#zoom=100`)
    //         setLoading(false)
    //     }
    // }
    return(
        <>
            {/* {!loading ? <StyledIFrame title="Jonathan Scott's Resume" src={url}  /> : null} */}
            <StyledDesktopIFrame className='desktop' title="Jonathan Scott's Resume" src={`${MyResume}#zoom=100`} />
            <StyledMobileIFrame className='mobile' title="Jonathan Scott's Resume" src={`${MyResume}#zoom=57`} />
        </>
    )   
}

export default Resume