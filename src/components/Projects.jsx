import React, { useEffect } from 'react'
import { ProjectsContainer, ProjectDiv, ProjectTextWrapper } from '../styles/ProjectsStyle'
import didactSnap from '../assets/didactSnap.PNG'
import schoolSnap from '../assets/internationalSchoolSnap.PNG'
import passportSnap from '../assets/passportSnap.PNG'
import bookrSnap from '../assets/bookrSnap.PNG'


const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    return (
        <ProjectsContainer>
            <ProjectDiv>
                <h2>Didact</h2>
                <img src={didactSnap} alt='Didact screen shot' ></img>
                <ProjectTextWrapper>
                    <p>Didact is a web app that combines online learning resources in one location to combat the issue of unfinished online courses.</p>
                    <p>Tech Stack: Used a React/Redux front end with an Express backend and a PostgreSQL database.</p>
                    <ul style={{paddingLeft: '20px'}}>
                        <li>Built to the specifications of the stakeholder.</li>
                        <li>Worked as a full stack developer with a team of 5 developers and  a U/X designer</li>
                        <li>drag/drop functionality</li>
                        <li>Backend and frontend functionality for cascading checkmarks Udemy Api integration</li>
                    </ul>
                </ProjectTextWrapper>
            </ProjectDiv>
            <ProjectDiv>
                <h2>Restaurant Passport</h2>
                <img src={passportSnap} alt='Restaurant Passport screen shot' ></img>
                <ProjectTextWrapper>
                    <p>A web app designed for finding nearby restaurants that fit your location/taste</p>
                    <p>Tech Stack: A React/Redux front end</p>
                    <ul style={{paddingLeft: '20px'}}>
                        <li>Built to the specifications of the U/X designer.</li>
                        <li>Worked as a front end developer with a team of 5 developers and a U/X designer</li>
                        <li>Zomato Api integration State management implemented from backend data</li>
                    </ul>
                </ProjectTextWrapper>
            </ProjectDiv>
            <ProjectDiv>
                <h2>Bookr</h2>
                <img src={bookrSnap} alt='Bookr screen shot' ></img>
                <ProjectTextWrapper>
                    <p>A web app designed for rating and reviewing textbooks</p>
                    <p>Tech Stack: A React front end</p>
                    <ul style={{paddingLeft: '20px'}}>
                        <li>Built to the specifications of the U/X designer.</li>
                        <li>Worked as a front end developer with a team of 4 and a U/X designer</li>
                        <li>Context Api implemented State management implemented from backend data</li>
                    </ul>
                </ProjectTextWrapper>
            </ProjectDiv>
            <ProjectDiv>
                <h2>International School</h2>
                <img src={schoolSnap} alt='API code screen shot' ></img>
                <ProjectTextWrapper>
                    <p>An API designed to interface with a school and handle student and admin data.</p>
                    <p>Tech Stack: Java/Spring Boot with a PostgreSQL Database</p>
                    <ul style={{paddingLeft: '20px'}}>
                        <li>Handles student and admin data for a school</li>
                        <li>Tracks visits to students from the school administration.</li>
                        <li>Admin CMS</li>
                        <li>Oath2 implemented</li>
                    </ul>
                    <p></p>
                </ProjectTextWrapper>
            </ProjectDiv>
        </ProjectsContainer>
    )
}

export default Projects