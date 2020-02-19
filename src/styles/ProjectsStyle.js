import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 80px;
    width: 90%;
    height: 100vh;
    font-size: 1rem;
`

export const ProjectDiv = styled.div`
    width: 35%;
    height: 500px;
    margin: 25px;
    border: solid white 1px;
    border-radius: 8px;
    background-color: #69779b;
    color: #000;
    font-weight: bold;
    @media (max-width: 500px) {
        width: 90%
    }
    img {
        width: 80%;
    }
`