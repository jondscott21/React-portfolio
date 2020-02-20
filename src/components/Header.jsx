import React from 'react'
import { StyledHeader, StyledLink } from '../styles/HeaderStyle'
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
    // const listenForScroll = () => {
    //     if(window.scrollY === 0) {
    //         setOpacity({opacity: '1'})
    //     }
    //     else {
    //         setOpacity({opacity: '0.5'})
    //     }
    // }
    // useEffect(() => {
    //     window.addEventListener('scroll', listenForScroll)
    // },[])
    return(
        <StyledHeader>
            <StyledLink activeStyle={{borderBottom: 'black solid 1px', color: 'black'}} to='/about'>About</StyledLink>
            <StyledLink activeStyle={{borderBottom: 'black solid 1px', color: 'black'}} to='/projects'>Projects</StyledLink>
            <StyledLink activeStyle={{borderBottom: 'black solid 1px', color: 'black'}} to='/skills'>Skills</StyledLink>
            {/* <StyledLink activeStyle={{borderBottom: 'black solid 1px', color: 'black'}} to='/contact'>Contact</StyledLink> */}
            <StyledLink activeStyle={{borderBottom: 'black solid 1px', color: 'black'}} to='/resume'>Resume</StyledLink>
            <FontAwesomeIcon onClick={openGithub} style={{margin: '0 1vw', cursor: 'pointer'}} icon={faGithubSquare} size='4x' color='white' />
            <FontAwesomeIcon onClick={openLinkedIn} style={{margin: '0 1vw', cursor: 'pointer'}} icon={faLinkedin} size='4x' color='white' />
            <FontAwesomeIcon onClick={openEmail} style={{margin: '0 1vw', cursor: 'pointer'}} icon={faEnvelope} size='4x' color='white' />
        </StyledHeader>
    )
}

export default Header