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

export const HeaderTimer = styled.div`
    position: absolute;
    left: 50%;
    top: 25px;
    transform: translatex(-50%);
    text-transform: uppercase;
    line-height: 45px;
`

export const MenuHamburguerBox = styled.div`
    width: 50px;
    height: 50px;
    border: 2px #fff solid;
    float: right;
    
    &:hover{
        cursor: pointer;
    }
`

export const MenuHamburguerBar = styled.div`
    background: #fff;
    width: 30px;
    height: 5px;
    margin: 8px auto;

    &:last-child{
        margin-bottom: 0;
    }

`
