import React from 'react'
import Particles from 'react-particles-js'
import myPhoto from '../assets/myPhoto.JPG'
import { PhotoStyle, AboutWrapper, TextWrapper } from '../styles/AboutStyle'

const About = () => {
    return(
        <>
        <Particles style={{position: 'absolute', zIndex: '1', top: '80px', left: '0', maxHeight: 'calc(100vh - 60px)', maxWidth:'100vw'}} />
        <AboutWrapper>
            <TextWrapper>
                <h2>Hi, I'm Jonathan.</h2>
                <p>I'm a full stack developer living near San Jose</p>
                <p>I bring hard work and a strong desire to suceed to any team I'm on.</p>
                <p>I love creating and fine-tuning projects, learning new technologies, and building team comraderie</p>
            </TextWrapper>
            <PhotoStyle  src={myPhoto} />
        </AboutWrapper>
        </>
    )
}

export default About