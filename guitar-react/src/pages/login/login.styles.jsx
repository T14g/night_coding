import styled from 'styled-components';

export const Row = styled.div`
    display:flex;
    min-height: calc(100vh - 130px);
`
export const Column = styled.div`
    position: relative;

    background: ${props => props.background ? 
    `url(../images/${props.background}) no-repeat left center /contain` 
    : 'none'};

    
    width: ${props => props.width + '%'};
`

export const BigTitle = styled.h1`
    text-transform: uppercase;
    font-size: 60px;
    max-width: 500px;
    position: absolute;
    right: 200px;
    top: 250px;
`