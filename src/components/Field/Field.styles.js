import styled from 'styled-components'

export const Main = styled.div`
    height: 100vh;
    margin: -8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Title = styled.div`
    position: fixed;
    top: 50px;
    font-size: 64px;
    font-weight: 700;
`

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TurnTitle = styled.div`
    font-size: 25px;
    font-weight: 700;
    padding-bottom: 10px;
`

export const RestartButton = styled.div`
    font-size: 20px;
    padding: 5px;
    margin-top: 10px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
`

export const TimeLapseBox = styled.div`
    position: absolute;
    width: 100px;
    left: 175px;
    top: 28px;
`

export const TimeLapseButton = styled.div`
    font-size: 15px;
    padding: 5px;
    margin-top: 10px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
`