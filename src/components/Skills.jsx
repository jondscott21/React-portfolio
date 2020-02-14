import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faJs } from '@fortawesome/free-brands-svg-icons'


const Skills = () => {
    return(
        <div>
            <FontAwesomeIcon style={{margin: '0 4vw', cursor: 'pointer'}} icon={faGithubSquare} size='4x' color='white' />
            <FontAwesomeIcon style={{margin: '0 4vw', cursor: 'pointer'}} icon={faJs} size='4x' color='white' />
        </div>
    )
}

export default Skills