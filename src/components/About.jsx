import React from 'react'
import Particles from 'react-particles-js'

const About = () => {
    return(
        <>
        <Particles style={{position: 'absolute', zIndex: '1', top: '60px', left: '0', maxHeight: 'calc(100vh - 60px)', maxWidth:'100vw'}} />
        <h2 style={{color: 'white'}}>Hi, I'm Jonathan</h2>
        <p>I'm a full stack developer with a passion for learning and excellence.</p>
        </>
    )
}

export default About