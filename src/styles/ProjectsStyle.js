import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 100px;
    width: 90%;
    height: 100vh;
    font-size: 1rem;
    @media (max-width: 500px) {
        width: 100%;
    }
`

export const ProjectDiv = styled.div`
    width: 35%;
    height: 610px;
    margin: 25px;
    border: solid white 1px;
    background-color: #69779b;
    color: #000;
    h2 {
        margin-left: 5%;
        text-align: justify;
    }
    @media (max-width: 500px) {
        width: 99%;
    }
    img {
        width: 90%;
    }
`
export const ProjectTextWrapper = styled.div`
    margin: 10px 5%;
    text-align: justify;
`