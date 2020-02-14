import React from 'react'
import { ProjectsContainer, ProjectDiv } from '../styles/ProjectsStyle'


const Projects = () => {
    return (
        <ProjectsContainer>
            <ProjectDiv>
                <h3>Didact</h3>
                <p>A web app that combines online learning resources in one location to combat the issue of unfinished online courses. 
Tech Stack: Used a React/Redux front end with an Express backend.
Built to the specifications of the stakeholder. Worked as a full stack developer with a team of 5 developers and  a U/X designer
Front end functionality including drag/drop
Backend and frontend functionality for cascading checkmarks
Udemy Api integration
</p>
            </ProjectDiv>
            <ProjectDiv>
                <h3>Restaurant Passport</h3>
                <p>A web app designed for finding nearby restaurants that fit your location/taste
Tech Stack: A React/Redux front end
Built to the specifications of the U/X designer. Worked as a front end developer with a team of 5 developers and a U/X designer
Zomato Api integration
State management implemented from backend data
</p>
            </ProjectDiv>
            <ProjectDiv>
                <h3>Bookr</h3>
                <p>A web app designed for rating and reviewing textbooks
Tech Stack: A React front end
Built to the specifications of the U/X designer. Worked as a front end developer with a team of 4 and a U/X designer
Context Api implemented
State management implemented from backend data
</p>
            </ProjectDiv>
            <ProjectDiv>
                <h3>International School</h3>
            </ProjectDiv>
        </ProjectsContainer>
    )
}

export default Projects