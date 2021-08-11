import styled from 'styled-components'

export const Form = styled.div`
    box-shadow: 5px 5px 26px 12px rgba(108,105,105,0.75);
    padding: 50px 20px;
    max-width: 400px;
    margin: 250px  auto;
    background: none;
    border: 3px #fff solid;
    height: 450px;
`

export const H2 = styled.h2`
    color: #fff;
    font-size: 35px;
    text-align:center;
    text-transform: uppercase;
`
    
export const Input = styled.input`
    display: block;
    background: none;
    border: 2px #fff solid;
    color: #000;
    width: 100%;
    max-width: 273px;
    margin: 0 auto 20px;
    padding: 15px 10px;
    font-size:14px;

    &:last-child{
        margin-bottom: 0;
    }

    &::placeholder{
        color: #fff;
        font-size: 14px;
    }
`

export const Button = styled.button`
    background: #000;
    color: #000;
    border: 2px #000 solid;
    display: block;
    padding: 10px;
    margin: 0 auto;
    width: 100%;
    max-width: 180px;
    font-size: 20px;
`