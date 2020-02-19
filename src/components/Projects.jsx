import React from 'react'
import { ProjectsContainer, ProjectDiv, ProjectTextWrapper } from '../styles/ProjectsStyle'
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
                <ProjectTextWrapper>
                    <p>A web app that combines online learning resources in one location to combat the issue of unfinished online courses.</p>
                    <p>Tech Stack: Used a React/Redux front end with an Express backend.</p>
                    <p>Built to the specifications of the stakeholder. Worked as a full stack developer with a team of 5 developers and  a U/X designer Front end functionality including drag/drop Backend and frontend functionality for cascading checkmarks Udemy Api integration</p>
                </ProjectTextWrapper>
            </ProjectDiv>
            <ProjectDiv>
                <h2>Restaurant Passport</h2>
                <img src={passportSnap} ></img>
                <ProjectTextWrapper>
                    <p>A web app designed for finding nearby restaurants that fit your location/taste</p>
                    <p>Tech Stack: A React/Redux front end</p>
                    <p>Built to the specifications of the U/X designer. Worked as a front end developer with a team of 5 developers and a U/X designer Zomato Api integration State management implemented from backend data</p>
                </ProjectTextWrapper>
            </ProjectDiv>
            <ProjectDiv>
                <h2>Bookr</h2>
                <img src={bookrSnap} ></img>
                <ProjectTextWrapper>
                    <p>A web app designed for rating and reviewing textbooks</p>
                    <p>Tech Stack: A React front end</p>
                    <p>Built to the specifications of the U/X designer. Worked as a front end developer with a team of 4 and a U/X designer Context Api implemented State management implemented from backend data</p>
                </ProjectTextWrapper>
            </ProjectDiv>
            <ProjectDiv>
                <h2>International School</h2>
                <img src={schoolSnap} ></img>
                <ProjectTextWrapper>
                    <p>An API designed to interface with a school and handle student and admin data.</p>
                    <p>Tech Stack: Java/Spring Boot with a Postgres Database</p>
                    <p>Handles student and admin data for a school and tracks visits to students from the school administration. </p>
                </ProjectTextWrapper>
            </ProjectDiv>
        </ProjectsContainer>
    )
}

export default Projects