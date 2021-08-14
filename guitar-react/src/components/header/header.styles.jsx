import styled from 'styled-components';

export const HeaderContainer = styled.header`
    border-bottom: 2px #fff solid;
    padding: 20px 15px;
    background:none;

    &:after{
        display: table;
        clear: both;
        content: "";
    }
`

export const Logo = styled.a`
    font-size: 25px;
    text-transform: uppercase;
    font-weight: 900;
    line-height: 45px;
`

export const Username = styled.span`
    float: right;
    font-weight: 800;
    font-size: 25px;
    text-transform: uppercase;

`

export const HeaderTimer = styled.span`
    display: block;
    position: absolute;
    left: 50%;
    top: 25px;
    transform: translatex(-50%);
    text-transform: uppercase;
    line-height: 45px;
`