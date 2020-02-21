import styled from 'styled-components'


export const StyledDesktopIFrame = styled.iframe`
    margin-top: 80px;
    min-width: 99.5%;
    width: 1px;
    min-height: 1180px;
    @media(max-width: 500px) {
        display: none
    }
`
export const StyledMobileIFrame = styled.iframe`
        margin-top: 80px;
        min-width: 99%;
        width: 1px;
        min-height: 812px;
        display: none;
    @media (max-width: 500px) {
        display: block;
        body {
            max-width: 99vw !important;
        }
    }
`