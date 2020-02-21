import styled from 'styled-components'


export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 500px) {
    }
`
export const PhotoStyle = styled.img`
    z-index: 2;
    height: 225px;
    width: 225px;
    border-radius: 50%;
    @media (max-width: 500px) {
        flex-direction: column;
    }
    
`
export const TextWrapper = styled.div`
    margin-left: 30px;
    /* text-align: justify; */
`