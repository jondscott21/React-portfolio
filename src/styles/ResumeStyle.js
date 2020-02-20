import styled from 'styled-components'


export const StyledDesktopIFrame = styled.iframe`
    margin-top: 80px;
    min-width: 99.5%;
    width: 1px;
    min-height: 1180px;
    @media only screen and (max-device-width: 550px) {
        display: none
    }
`
export const StyledMobileIFrame = styled.iframe`
        margin-top: 80px;
        min-width: 90%;
        /* width: 1px; */
        min-height: 812px;
        display: none;
    @media only screen and (max-device-width: 550px) {
        display: block;
    }
`