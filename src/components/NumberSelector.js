import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 0;
    display: grid;
    box-shadow: -3px 3px 0 hsl(60, 6%, 19%);
`;

const Top = styled.div`
    display: grid;
    grid-template-columns: minmax(2rem, auto) 4rem minmax(2rem, auto);
`;

const Bottom = styled.div`
    display: grid;
    grid-template-columns: auto auto;
`;

const AlterNumberButton = styled.button`
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

const NumberSelector = ({
    name,
    minValue = 0,
    maxValue = 255,
    defaultValue = 0,
    handleChange,
}) => {
    const [numberValue, setNumberValue] = useState(defaultValue);

    const handleAlterNumberButtonClick = (quantity) => {
        handleChange(name, Number(numberValue) + quantity);
        setNumberValue((previousNumberValue) => Number(previousNumberValue) + quantity);
    };

    const handleNumberInputChange = (event) => {
        setNumberValue(event.target.value);
        handleChange(name, event.target.value);
    };

    return (
        <Container className="number-selector">
            <Top>
                <AlterNumberButton
                    className="decrement"
                    onClick={() => handleAlterNumberButtonClick(-1)}
                >
                    -
                </AlterNumberButton>
                <NumberInput
                    type="number"
                    max={maxValue}
                    min={minValue}
                    value={numberValue}
                    onChange={(event) => handleNumberInputChange(event)}
                />
                <AlterNumberButton
                    className="increment"
                    onClick={() => handleAlterNumberButtonClick(1)}
                >
                    +
                </AlterNumberButton>
            </Top>
            <Bottom>
                <AlterNumberButton onClick={() => handleAlterNumberButtonClick(-5)}>
                    --
                </AlterNumberButton>
                <AlterNumberButton onClick={() => handleAlterNumberButtonClick(5)}>
                    ++
                </AlterNumberButton>
            </Bottom>
        </Container>
    );
};

export default NumberSelector;
