import React from 'react'
import MyResume from "../assets/jonathan-resume.pdf"


const Resume = () => {
    return(
        <iframe title="Jonathan Scott's Resume" src={MyResume} height='800' width='800' />
    )   
}

export default Resume