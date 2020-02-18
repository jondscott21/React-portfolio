import React from 'react'
import { ContactWrapper, AnchorStyle } from '../styles/ContactStyle'


const Contact = () => {
    const openLink = url => {
        window.open(url)
    }
    return(
        <ContactWrapper>
            <h1>Contact Me Through:</h1>
            <div>
                <h2>Linkedin: <AnchorStyle href="https://www.linkedin.com/in/jonathandavidscott/" target="_blank">https://www.linkedin.com/in/jonathandavidscott/</AnchorStyle></h2> 
                  
            </div>
            <div>
                <h2>Email: <AnchorStyle href="https://github.com/jondscott21" target="_blank">https://github.com/jondscott21</AnchorStyle></h2>
                
            </div>
            <div>
                <h2>Phone: <AnchorStyle href="https://github.com/jondscott21" target="_blank">https://github.com/jondscott21</AnchorStyle></h2>
                
            </div>
            <div>
                <h2>Github: <AnchorStyle href="https://github.com/jondscott21" target="_blank">https://github.com/jondscott21</AnchorStyle></h2>
                
            </div>
        </ContactWrapper>
    )
}

export default Contact