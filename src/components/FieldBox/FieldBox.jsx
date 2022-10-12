import React from 'react';
import { Row, SquareBox } from './FieldBox.styles';

export const FieldBox = ({ squareBoxValue, handleSquareBoxValue}) => {
    return (
        <>
            <Row>
                {squareBoxValue.slice(0, 3).map((value, idx) => 
                <SquareBox onClick={() => handleSquareBoxValue(idx)}>{value}</SquareBox>
            )}
            </Row>
            <Row>
                {squareBoxValue.slice(3, 6).map((value, idx) => 
                <SquareBox onClick={() => handleSquareBoxValue(idx + 3)}>{value}</SquareBox>
            )}
            </Row>
            <Row>
                {squareBoxValue.slice(6, 9).map((value, idx) => 
                <SquareBox onClick={() => handleSquareBoxValue(idx + 6)}>{value}</SquareBox>
            )}
            </Row>
        </>
    );
}