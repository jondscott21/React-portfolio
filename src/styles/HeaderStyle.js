import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


export const StyledHeader = styled.header`
    background: #69779b;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const StyledLink = styled(NavLink)`
    color: white;
    font-size: 1.3rem;
    margin: 0 4vw;
    width: 100px;
    height: 100%;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    transition: color .5s ease;
    /* transition: background-color .5s ease; */
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        color: black;
        /* background-color: white; */
    }
    @media (max-width: 600px) {
        font-size: 1.1rem;
        margin: 0 1vw;
    }
`