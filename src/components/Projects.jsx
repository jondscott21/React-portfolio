import React from 'react'
import { ProjectsContainer, ProjectDiv } from '../styles/ProjectsStyle'
import didactGif from '../assets/didact.gif'
import didactSnap from '../assets/didactSnap.PNG'
import schoolSnap from '../assets/internationalSchoolSnap.PNG'
import passportSnap from '../assets/passportSnap.PNG'
import bookrSnap from '../assets/bookrSnap.PNG'


const Projects = () => {
    return (
        <ProjectsContainer>
            <ProjectDiv>
                <h2>Didact</h2>
                <img src={didactSnap} ></img>
                <p>A web app that combines online learning resources in one location to combat the issue of unfinished online courses.</p>
<p>Tech Stack: Used a React/Redux front end with an Express backend.
Built to the specifications of the stakeholder. Worked as a full stack developer with a team of 5 developers and  a U/X designer
Front end functionality including drag/drop
Backend and frontend functionality for cascading checkmarks
Udemy Api integration
</p>
            </ProjectDiv>
            <ProjectDiv>
                <h2>Restaurant Passport</h2>
                <img src={passportSnap} ></img>
                <p>A web app designed for finding nearby restaurants that fit your location/taste
Tech Stack: A React/Redux front end
Built to the specifications of the U/X designer. Worked as a front end developer with a team of 5 developers and a U/X designer
Zomato Api integration
State management implemented from backend data
</p>
            </ProjectDiv>
            <ProjectDiv>
                <h2>Bookr</h2>
                <img src={bookrSnap} ></img>
                <p>A web app designed for rating and reviewing textbooks
Tech Stack: A React front end
Built to the specifications of the U/X designer. Worked as a front end developer with a team of 4 and a U/X designer
Context Api implemented
State management implemented from backend data
</p>
            </ProjectDiv>
            <ProjectDiv>
                <h2>International School</h2>
                <img src={schoolSnap} ></img>
            </ProjectDiv>
        </ProjectsContainer>
    )
}

export default Projects