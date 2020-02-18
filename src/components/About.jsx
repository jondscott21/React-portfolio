import React from 'react'
import Particles from 'react-particles-js'

const About = () => {
    return(
        <>
        <Particles style={{position: 'absolute', zIndex: '1', top: '60px', left: '0', maxHeight: 'calc(100vh - 60px)', maxWidth:'100vw'}} />
        <div style={{color: 'white'}}>Jonathan Scott</div>
        </>
    )
}

export default About