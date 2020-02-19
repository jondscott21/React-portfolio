import styled from 'styled-components'


export const IFrameWrapper = styled.div`
    margin-top: 60px;
   
    /* min-width: 490px; */
    width: 99.5%;
    height: 100%;
    /* @media (max-width: 500px) {
        width: 70%;
    } */
`

export const StyledIFrame = styled.iframe`
    margin-top: 60px;
    min-width: 99.5%;
    /* max-width: 90vw; */
    width: 1px;
    /* height: 100%; */
    min-height: 1180px;
    @media (max-width: 500px) {
        min-width: 99%;
    }
`