import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faJava, faCss3Alt, faHtml5, faReact, faGitAlt, faPython, faNode } from '@fortawesome/free-brands-svg-icons'
import { faGem, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { SkillsContainer } from '../styles/SkillsStyles'


const Skills = () => {
    return(
        <SkillsContainer>
            <div>
                <FontAwesomeIcon style={{margin: '0 4vw'}} icon={faGitAlt} size='4x' color='white' />
                <p>Github</p>
            </div>
            <div>
                <FontAwesomeIcon style={{margin: '0 4vw'}} icon={faJs} size='4x' color='white' />
                <p>JavaScript</p>
            </div>
            <div>
                <FontAwesomeIcon style={{margin: '0 4vw'}} icon={faReact} size='4x' color='white' />
                <p>React</p>
            </div>
            <div>
                <FontAwesomeIcon style={{margin: '0 4vw'}} icon={faCss3Alt} size='4x' color='white' />
                <p>CSS</p>
            </div>
            <div>
                <FontAwesomeIcon style={{margin: '0 4vw'}} icon={faHtml5} size='4x' color='white' />
                <p>HTML</p>
            </div>
            <div>
                <FontAwesomeIcon style={{margin: '0 4vw'}} icon={faPython} size='4x' color='white' />
                <p>Python</p>
            </div>
            <div>
                <FontAwesomeIcon style={{margin: '0 4vw'}} icon={faDatabase} size='4x' color='white' />
                <p>SQL</p>
            </div>
            <div>
                <FontAwesomeIcon style={{margin: '0 4vw'}} icon={faJava} size='4x' color='white' />
                <p>Java</p>
            </div>
            <div>
                <FontAwesomeIcon style={{margin: '0 4vw'}} icon={faNode} size='4x' color='white' />
                <p>Node</p>
            </div>
            <div>
                <FontAwesomeIcon style={{margin: '0 4vw'}} icon={faDatabase} size='4x' color='white' />
                <p>Postgres</p>
            </div>
            <div>
                <FontAwesomeIcon style={{margin: '0 4vw'}} icon={faPython} size='4x' color='white' />
                <p>Django</p>
            </div>
            <div>
                <FontAwesomeIcon style={{margin: '0 4vw'}} icon={faGem} size='4x' color='white' />
                <p>Ruby</p>
            </div>
        </SkillsContainer>
    )
}

export default Skills