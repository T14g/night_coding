import styled from 'styled-components';

export const SidebarContainer = styled.div`
    position: absolute;
    background: #000;
    top: 0;
    right: ${props => props.show ? 0 : '-500px'};
    height: 100%;
    width: 320px;
    border-left: 2px #fff solid;
    transition : 0.5s;

`