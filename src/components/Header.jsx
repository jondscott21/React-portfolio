import React from 'react'
import { StyledHeader, LinkWrapper, StyledLink, TitleWrapper, TitleStyle, TitleStyleMobile, IconWrapper } from '../styles/HeaderStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    // const [opacity, setOpacity] = useState({opacity: '1'})
    const openLinkedIn = () => {
        window.open("https://www.linkedin.com/in/jonathandavidscott/")
      }
    const openGithub = () => {
        window.open("https://github.com/jondscott21")
    }
    const openEmail = () => {
        window.open("mailto:jonathan.scott@gmail.com")
    }
    return(
        <StyledHeader>
            <TitleWrapper>
                <TitleStyle>Jonathan Scott</TitleStyle>
                <TitleStyle>Full Stack Developer</TitleStyle>
                <TitleStyleMobile>Jonathan Scott Full Stack Dev</TitleStyleMobile>
            </TitleWrapper>
            <LinkWrapper>
                <StyledLink activeStyle={{borderBottom: 'black solid 1px', color: 'black'}} to='/about'>About</StyledLink>
                <StyledLink activeStyle={{borderBottom: 'black solid 1px', color: 'black'}} to='/projects'>Projects</StyledLink>
                <StyledLink activeStyle={{borderBottom: 'black solid 1px', color: 'black'}} to='/skills'>Skills</StyledLink>
                <StyledLink activeStyle={{borderBottom: 'black solid 1px', color: 'black'}} to='/resume'>Resume</StyledLink>
            </LinkWrapper>
            <IconWrapper>
                <FontAwesomeIcon onClick={openGithub} style={{margin: '0 2vw', cursor: 'pointer'}} icon={faGithubSquare} size='3x' color='white' />
                <FontAwesomeIcon onClick={openLinkedIn} style={{margin: '0 2vw', cursor: 'pointer'}} icon={faLinkedin} size='3x' color='white' />
                <FontAwesomeIcon onClick={openEmail} style={{margin: '0 2vw', cursor: 'pointer'}} icon={faEnvelope} size='3x' color='white' />
            </IconWrapper>
        </StyledHeader>
    )
}

export default Header