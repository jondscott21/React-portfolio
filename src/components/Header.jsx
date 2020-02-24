import React from 'react'
import { StyledHeader, LinkWrapper, StyledLink, TitleWrapper, NameStyle, TitleStyle, IconWrapper, StyledFontAwesomeIcon } from '../styles/HeaderStyle'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    const openWindow = (url) => {
        let newWindow = window.open()
        newWindow.opener = null;
        newWindow.location = url; 
    }
    return(
        <StyledHeader>
            <TitleWrapper>
                <NameStyle>Jonathan Scott</NameStyle>
                <TitleStyle>Full-Stack Developer</TitleStyle>
            </TitleWrapper>
            <LinkWrapper>
                <StyledLink activeStyle={{borderBottom: 'black solid 1px', color: 'black'}} to='/about'>About</StyledLink>
                <StyledLink activeStyle={{borderBottom: 'black solid 1px', color: 'black'}} to='/projects'>Projects</StyledLink>
                <StyledLink activeStyle={{borderBottom: 'black solid 1px', color: 'black'}} to='/skills'>Skills</StyledLink>
                <StyledLink activeStyle={{borderBottom: 'black solid 1px', color: 'black'}} to='/resume'>Resume</StyledLink>
            </LinkWrapper>
            <IconWrapper>
                <StyledFontAwesomeIcon onClick={() => openWindow("https://github.com/jondscott21")} icon={faGithubSquare} size='3x' color='white' />
                <StyledFontAwesomeIcon onClick={() => openWindow("https://www.linkedin.com/in/jonathandavidscott/")} icon={faLinkedin} size='3x' color='white' />
                <StyledFontAwesomeIcon onClick={() => openWindow("mailto:jonathan.scott@gmail.com")} icon={faEnvelope} size='3x' color='white' />
            </IconWrapper>
        </StyledHeader>
    )
}

export default Header