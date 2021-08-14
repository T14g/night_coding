import styled from 'styled-components';

export const SolidButton = styled.button`
    background: ${props => props.background ? props.background : '#000' };
    color: ${props => props.color ? props.color : '#fff' };
    border: 2px ${props => props.border ? props.border : '#000' } solid;
    width: 100%;
    max-width: 300px;
    margin: 0 auto 15px;
    display: block;
    padding: 8px 15px;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 800;

    &:hover{
        cursor: pointer;
    }

    &.float-right{
        float:right;
    }

    &.mb-0{
        margin-bottom: 0;
    }
`