import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 0;
    display: grid;
    grid-template-columns: 2rem 3.2rem 2rem;
`;

const SideButton = styled.button`
    font-size: 1rem;
    color: hsl(150, 3%, 13%);
    border: 2px solid black;
    background: hsl(0, 0%, 13%);
    color: hsl(0, 0%, 100%);
    cursor: pointer;
`;

const NumberInput = styled.input`
    color: hsl(0, 0%, 13%);
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    border-left: none;
    border-right: none;
    text-align: center;
    font-weight: bold;
    -moz-appearance: textfield;
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        display: none;
    }
`;

const NumberSelector = ({ minValue = 0, maxValue = 255 }) => {
    const [numberValue, setNumberValue] = useState(0);

    const handleDecrementClick = () => {
        setNumberValue((previousNumberValue) => previousNumberValue - 1);
    };

    const handleIncrementClick = () => {
        setNumberValue((previousNumberValue) => Number(previousNumberValue) + 1);
    };

    return (
        <Container className="number-selector">
            <SideButton className="decrement" onClick={() => handleDecrementClick()}>
                -
            </SideButton>
            <NumberInput
                type="number"
                max={maxValue}
                min={minValue}
                value={numberValue}
                onChange={(event) => setNumberValue(event.target.value)}
            />
            <SideButton className="increment" onClick={() => handleIncrementClick()}>
                +
            </SideButton>
        </Container>
    );
};

export default NumberSelector;
