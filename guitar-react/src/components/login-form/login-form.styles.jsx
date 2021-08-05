import styled from 'styled-components'

export const Form = styled.form`
    border: 1px #fff solid;
    padding: 30px 20px;
    max-width: 250px;
    margin: 250px  auto;
`

export const H2 = styled.h2`
    color: #fff;
    font-size: 35px;
    text-align:center;
`
    
export const Input = styled.input`
    display: block;
    background: none;
    border: 1px #fff solid;
    color: #fff;
    margin-bottom: 10px;
    width: 100%;
    max-width: 200px;
    margin: 0 auto 10px;
    padding: 10px 8px;

    &::placeholder{
        color: #fff;

    }
`

export const Button = styled.button`
    background: #000;
    color: #fff;
    border: 2px #fff solid;
    display: block;
    padding: 10px;
    margin: 0 auto;
    width: 100%;
    max-width: 180px;
    font-size: 20px;
`