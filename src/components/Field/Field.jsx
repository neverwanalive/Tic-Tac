import React, { useState, useMemo } from 'react';

import { Main, Title, Container, TurnTitle, RestartButton, TimeLapseBox, TimeLapseButton } from './Field.styles';
import { FieldBox } from '../FieldBox/FieldBox';
import { X, O, emptyArray } from '../../constants/common'
import { checkWinner } from '../../utils/isWin';

export const Field = () => {
    const [squareBoxValue, updateSquareBoxValue] = useState(emptyArray)
    const [player, updatePlayer] = useState(X)
    const [lastIndex, updateLastIndex] = useState()
    const [timeLapse, updateTimeLapse] = useState([])
    const [isTimeLapsed, updateIsTimeLapsed] = useState(false)
    const winner = useMemo(() => checkWinner(squareBoxValue), [squareBoxValue])
    const isDraw = useMemo(() => !winner && squareBoxValue.every(value => value), [winner, squareBoxValue])

    const handleSquareBoxValue = (id) => {
        if(!winner && !squareBoxValue[id]) {
            if (isTimeLapsed) {
                updateTimeLapse(timeLapse.slice(0, lastIndex + 1))
                updateIsTimeLapsed(false)
            }
            updatePlayer(currPlayer => currPlayer === X ? O : X)
            updateSquareBoxValue(squareBoxValue.map((currValue, idx) => idx === id ? player : currValue));
            updateTimeLapse(currValue => [...currValue, {
                value:  squareBoxValue.map((currValue, idx) => idx === id ? player : currValue),
                player: player === X ? O : X
            }])
        }
    }

    const handleRestartGame = () => {
        updateSquareBoxValue(emptyArray);
        updatePlayer(X);
        updateLastIndex();
        updateTimeLapse([]);
        updateIsTimeLapsed(false);
    }

    const handleTimeLapse = (idx) => {
        updateSquareBoxValue(timeLapse[idx].value)
        updatePlayer(timeLapse[idx].player)
        updateLastIndex(idx)
        if(timeLapse[idx].value.join() !== squareBoxValue.join()) updateIsTimeLapsed(true) 
    }
    
    return (
        <Main>
            <Title>Tic-Tac Game</Title>
            <Container>
                <TurnTitle>
                    {isDraw && 'Draw'}
                    {winner && `Winner is ${winner}`}
                    {!isDraw && !winner && `Next player ${player}`}
                </TurnTitle>
                <FieldBox
                    squareBoxValue={squareBoxValue}
                    handleSquareBoxValue={handleSquareBoxValue}
                />
                <RestartButton onClick={handleRestartGame}>Restart game</RestartButton>
                <TimeLapseBox>
                    {timeLapse.map((_, idx) =>
                    <TimeLapseButton onClick={() => handleTimeLapse(idx)}>{`Back to turn ${idx + 1}`}</TimeLapseButton>)}
                </TimeLapseBox>
            </Container>
        </Main>
    );
}