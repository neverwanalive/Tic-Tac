import styled from 'styled-components'

export const Row = styled.div`
    display: flex;
    border-right: 1px solid black;
    :nth-child(4) {
        border-bottom: 1px solid black;
    }
`

export const SquareBox = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    font-size: 30px;
    :nth-child(1) {
        border-right: none;
        border-bottom: none;
    }
    :nth-child(2) {
        border-right: none;
        border-bottom: none;
    }
    :nth-child(3) {
        border-right: none;
        border-bottom: none;
    }
`
