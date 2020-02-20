import styled from 'styled-components'


export const StyledDesktopIFrame = styled.iframe`
    margin-top: 80px;
    min-width: 99.5%;
    width: 1px;
    min-height: 1180px;
    @media (max-width: 500px) {
        display: none
    }
`
export const StyledMobileIFrame = styled.iframe`
        display: none;
        margin-top: 80px;
        width: 1px;
        min-height: 1180px;
        min-width: 99%;
        width:99%;
    @media (max-width: 500px) {
        display: block;
    }
`