import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 1rem;
    display: grid;
    grid-template-columns: 2.5rem 4rem 2.5rem;
`;

const SideButton = styled.button`
    font-size: 1.5rem;
    color: hsl(150, 3%, 13%);
    border: 2px solid black;
    background: none;
    cursor: pointer;
    width: 2.5rem;
`;

const NumberInput = styled.input`
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

const NumberSelector = ({ minValue = -1000, maxValue = 1000 }) => {
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
