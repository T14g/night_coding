import styled from 'styled-components';

export const Table = styled.div`
    padding: 50px 20px;
    border: 2px #fff solid;
    margin-top: 100px;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-around;
`

export const Column = styled.div`
    width: 12%;
    padding: 0 15px;
`

export const TableTitle = styled.h2`
  text-align: center;
  font-size: 50px;
  margin-top: 0;
`

export const ColumnBlock = styled.div`
    background: white;
    height: 50px;
    width:100%;
    margin-bottom: 20px;
`

export const TextBlock = styled.p`
    margin: 0;
    color: #000;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    line-height: 50px;
`