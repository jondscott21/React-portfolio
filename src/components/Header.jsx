import React from 'react'
import { StyledHeader, LinkWrapper, StyledLink, TitleWrapper, NameStyle, TitleStyle, IconWrapper, StyledFontAwesomeIcon } from '../styles/HeaderStyle'
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
                <StyledFontAwesomeIcon onClick={openGithub} icon={faGithubSquare} size='3x' color='white' />
                <StyledFontAwesomeIcon onClick={openLinkedIn} icon={faLinkedin} size='3x' color='white' />
                <StyledFontAwesomeIcon onClick={openEmail} icon={faEnvelope} size='3x' color='white' />
            </IconWrapper>
        </StyledHeader>
    )
}

export default Header