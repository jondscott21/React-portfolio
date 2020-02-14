import React from 'react'
import { StyledHeader, StyledLink } from '../styles/HeaderStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Header = () => {
    const openLinkedIn = () => {
        window.open("https://www.linkedin.com/in/jonathandavidscott/")
      }
    const openGithub = () => {
    window.open("https://github.com/jondscott21")
    }
    return(
        <StyledHeader>
            <StyledLink activeStyle={{background: '#acdbdf', color: 'black'}} to='/about'>About</StyledLink>
            <StyledLink activeStyle={{background: '#acdbdf', color: 'black'}} to='/projects'>Projects</StyledLink>
            <StyledLink activeStyle={{background: '#acdbdf', color: 'black'}} to='/skills'>Skills</StyledLink>
            <StyledLink activeStyle={{background: '#acdbdf', color: 'black'}} to='/contact'>Contact</StyledLink>
            <StyledLink activeStyle={{background: '#acdbdf', color: 'black'}} to='/resume'>Resume</StyledLink>
            <FontAwesomeIcon onClick={openGithub} style={{margin: '0 4vw', cursor: 'pointer'}} icon={faGithubSquare} size='4x' color='white' />
            <FontAwesomeIcon onClick={openLinkedIn} style={{margin: '0 4vw', cursor: 'pointer'}} icon={faLinkedin} size='4x' color='white' />
        </StyledHeader>
    )
}

export default Header