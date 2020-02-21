import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    margin-bottom: 20px;
    background: #69779b;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: solid black 1px;
    @media (max-width: 500px) {
        flex-wrap: wrap;
    }
`
export const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 50%;
    @media (max-width: 500px) {
        order: 3;
        min-width: 90%;
    }
`
export const StyledLink = styled(NavLink)`
    color: white;
    font-size: 1.3rem;
    margin: 0 3vw;
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
        font-size: 1.3rem;
        margin: 0 1vw;
    }
`
export const TitleWrapper = styled.p`
    @media (max-width: 500px) {
        display: flex;
        order: 1;
    }
`
export const NameStyle = styled.p`
    font-size: 1.3rem;
    color: white;
    line-height: 5px;
    @media (max-width: 500px) {
        display: flex;
        font-size: 1.3rem;
        color: white;
        margin: 0;
    }
`
export const TitleStyle = styled.p`
    font-size: 1.3rem;
    color: white;
    line-height: 5px;
    @media (max-width: 500px) {
        display: none;
    }
`
export const IconWrapper = styled.div`
    @media (max-width: 500px) {
        order: 2;
        padding-left: 31px;
    }
`
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    margin: 0 2vw;
    cursor: pointer;
    @media (max-width: 500px) {
        margin: 0 6vw 0 0;
        :last-child {
            margin: 0;
        }
    }
`