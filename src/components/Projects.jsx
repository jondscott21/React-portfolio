import React, { useEffect } from 'react'
import { ProjectsContainer, ProjectDiv, ProjectTextWrapper, ProjectFontAwesomeIcon } from '../styles/ProjectsStyle'
import didactSnap from '../assets/didactSnap.PNG'
import schoolSnap from '../assets/internationalSchoolSnap.PNG'
import passportSnap from '../assets/passportSnap.PNG'
import bookrSnap from '../assets/bookrSnap.PNG'

import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'


const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    const openGithub = (url) => {
        window.open(`${url}`)
    }
    return (
        <ProjectsContainer>
            <ProjectDiv>
                <a href="https://didact-fe.netlify.com/landing" target="_blank" rel="noopener noreferrer"><h2>Didact</h2></a>
                <img src={didactSnap} alt='Didact screen shot' ></img>
                <ProjectTextWrapper>
                    <p>Didact is a web app that combines online learning resources in one location to combat the issue of unfinished online courses.</p>
                    <p>Tech Stack: Used a React/Redux front end with an Express backend and a PostgreSQL database.</p>
                    <ul style={{paddingLeft: '20px'}}>
                        <li>Didact was built to the specifications of the stakeholder</li>
                        <li>Worked as a full-stack developer with a team of 5 developers and  a UX designer</li>
                        <li>Implemented a drag/drop feature for re-ordering your course playlist</li>
                        <li>Backend and frontend functionality for cascading checkmarks</li>
                        <li>Udemy API integration for adding courses</li>
                        <a href="https://github.com/Lambda-School-Labs/didact-be" target="_blank" rel="noopener noreferrer"><li>https://github.com/Lambda-School-Labs/didact-be</li></a>
                    </ul>
                    <ProjectFontAwesomeIcon onClick={() => openGithub("https://github.com/Lambda-School-Labs/didact-fe")} icon={faGithubSquare} size='3x' />
                </ProjectTextWrapper>
            </ProjectDiv>
            <ProjectDiv>
                <a href="https://restaurants-nearby.netlify.com/home" target="_blank" rel="noopener noreferrer"><h2>Restaurant Passport</h2></a>
                <img src={passportSnap} alt='Restaurant Passport screen shot'></img>
                <ProjectTextWrapper>
                    <p>Restaurant Passport is a web app designed for finding nearby restaurants that fit your location/taste.</p>
                    <p>Tech Stack: A React/Redux front end</p>
                    <ul style={{paddingLeft: '20px'}}>
                        <li>Restaurant Passport was built to the specifications of the UX designer</li>
                        <li>Worked as a front end developer with a team of 5 developers and a UX designer</li>
                        <li>Zomato API integration State management implemented from backend data</li>
                    </ul>
                    <ProjectFontAwesomeIcon onClick={() => openGithub("https://github.com/Build-Week-Restaurant-Passport/Front-End")} icon={faGithubSquare} size='3x' />
                </ProjectTextWrapper>
            </ProjectDiv>
            <ProjectDiv>
                
                <a href="https://bookrlambda.netlify.com/" target="_blank" rel="noopener noreferrer"><h2>Bookr</h2></a>
                <img src={bookrSnap} alt='Bookr screen shot' ></img>
                <ProjectTextWrapper>
                    <p>A web app designed for rating and reviewing textbooks.</p>
                    <p>Tech Stack: A React front end</p>
                    <ul style={{paddingLeft: '20px'}}>
                        <li>Bookr was built to the specifications of the UX designer.</li>
                        <li>Worked as a front end developer with a team of 4 and a UX designer</li>
                        <li>State management implemented from backend data</li>
                        <li>Context API implemented for users</li>
                    </ul>
                    <ProjectFontAwesomeIcon onClick={() => openGithub("https://github.com/bookr-buildweek/Front-End")} icon={faGithubSquare} size='3x' />
                </ProjectTextWrapper>
            </ProjectDiv>
            <ProjectDiv>
            <a href="https://jondscott21-internationschool.herokuapp.com/swagger-ui.html" target="_blank" rel="noopener noreferrer"><h2>International School</h2></a>
                <img src={schoolSnap} alt='API code screen shot'></img>
                <ProjectTextWrapper>
                    <p>An API designed to interface with a school and handle student and admin data.</p>
                    <p>Tech Stack: Java/Spring Boot with a PostgreSQL Database</p>
                    <ul style={{paddingLeft: '20px'}}>
                        <li>API handles student and admin data for a school</li>
                        <li>Tracks visits to students from the school administration</li>
                        <li>Admin CMS implemented</li>
                        <li>Oath2 implemented</li>
                    </ul>
                    <ProjectFontAwesomeIcon style={{position: 'absolute', left: '85%', top: '90%'}} onClick={() => openGithub("https://github.com/International-School-Social-Worker-BW/Back-End.git")} icon={faGithubSquare} size='3x' />
                </ProjectTextWrapper>
            </ProjectDiv>
        </ProjectsContainer>
    )
}

export default Projects