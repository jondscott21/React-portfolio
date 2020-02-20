import styled from 'styled-components'


export const StyledDesktopIFrame = styled.iframe`
    margin-top: 60px;
    min-width: 99.5%;
    width: 1px;
    min-height: 1180px;
    @media (max-width: 500px) {
        min-width: 99%;
        width: 480px;
        display: none

    }
`
export const StyledMobileIFrame = styled.iframe`
    margin-top: 60px;
    min-width: 99.5%;
    width: 1px;
    min-height: 1180px;
    display: none;
    @media (max-width: 500px) {
        min-width: 99%;
        width: 480px;
        display: block
    }
`