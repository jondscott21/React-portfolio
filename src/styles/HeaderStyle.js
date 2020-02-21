import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


export const StyledHeader = styled.header`
    /* position: fixed;
    top: 0; */
    width: 100%;
    margin-bottom: 20px;
    background: #69779b;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 500px) {
        justify-content: flex-start;
        flex-wrap: wrap;
    }

`
export const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 50%;
    @media (max-width: 500px) {
        order: 3
    }
`
export const StyledLink = styled(NavLink)`
    color: white;
    font-size: 1.3rem;
    margin: 0 1vw;
    width: 90px;
    height: 50%;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    transition: color .5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        color: black;
    }
    @media (max-width: 500px) {
        font-size: 1.1rem;
    }
`
export const TitleWrapper = styled.p`
    /* max-width: 10%; */
    @media (max-width: 500px) {
        display: flex;
        max-width: 100%;
        order: 1
    }
`

export const TitleStyle = styled.p`
    font-size: 1.3rem;
    color: white;
    line-height: 5px;
    @media (max-width: 500px) {
        display: none;
        margin: 0 10px;
        font-size: 1rem;
    }
`
export const TitleStyleMobile = styled.p`
    display: none;
    @media (max-width: 500px) {
        display: flex;
        font-size: 1.1rem;
        color: white;
        line-height: 5px;
        margin: 0;
    }
`

export const IconWrapper = styled.div`
    /* min-width: 30%; */
    @media (max-width: 500px) {
        order: 2
    }
`