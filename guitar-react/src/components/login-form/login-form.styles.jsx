import styled from 'styled-components'

export const Form = styled.form`
    box-shadow: 5px 5px 26px 12px rgba(108,105,105,0.75);
    padding: 100px 20px;
    max-width: 350px;
    margin: 250px  auto;
    background: #fff;
`

export const H2 = styled.h2`
    color: #fff;
    font-size: 35px;
    text-align:center;
`
    
export const Input = styled.input`
    display: block;
    background: none;
    border: 1px #000 solid;
    color: #000;
    margin-bottom: 10px;
    width: 100%;
    max-width: 200px;
    margin: 0 auto 10px;
    padding: 10px 8px;

    &::placeholder{
        color: #000;

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