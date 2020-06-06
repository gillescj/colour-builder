import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 0;
    display: grid;
    box-shadow: -3px 3px 0 hsl(60, 6%, 19%);
`;

const Top = styled.div`
    display: grid;
    grid-template-columns: minmax(2rem, 7rem) minmax(2rem, 4rem) minmax(2rem, 7rem);
    height: 2.5rem;
`;

const Bottom = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    height: 2.2rem;
`;

const AlterNumberButton = styled.button`
    font-size: 1.2rem;
    color: hsl(150, 3%, 13%);
    border: 2px solid black;
    background: hsl(180, 10%, 23%);
    color: hsl(0, 0%, 100%);
    cursor: pointer;
    &:hover {
        background: hsl(60, 6%, 25%);
        color: white;
        svg {
            fill: white;
        }
    }
`;

const AlterNumberButtonBottomRight = styled(AlterNumberButton)`
    border-top: none;
    border-left: none;
`;

const AlterNumberButtonBottomLeft = styled(AlterNumberButton)`
    border-top: none;
`;

const NumberInputContainer = styled.div`
    color: hsl(0, 0%, 13%);
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    border-left: none;
    border-right: none;
`;

const NumberInput = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    font-size: 0.9rem;
    text-align: center;
    font-weight: bold;
    -moz-appearance: textfield;
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        display: none;
    }
`;

const NumberSelector = ({
    attributeName,
    attributeValue,
    minValue = 0,
    maxValue = 255,
    defaultValue = 0,
    editSelectedColour,
}) => {
    const [numberValue, setNumberValue] = useState(defaultValue);

    const handleAlterNumberButtonClick = (quantity) => {
        editSelectedColour(attributeName, Number(numberValue) + quantity);
        setNumberValue((previousNumberValue) => Number(previousNumberValue) + quantity);
    };

    const handleNumberInputChange = (event) => {
        setNumberValue(event.target.value);
        editSelectedColour(attributeName, event.target.value);
    };

    useEffect(() => {
        setNumberValue(attributeValue);
    }, [attributeValue]);

    return (
        <Container className="number-selector">
            <Top>
                <AlterNumberButton
                    className="decrement"
                    onClick={() => handleAlterNumberButtonClick(-1)}
                >
                    -
                </AlterNumberButton>
                <NumberInputContainer>
                    <NumberInput
                        type="number"
                        max={maxValue}
                        min={minValue}
                        value={numberValue}
                        onChange={(event) => handleNumberInputChange(event)}
                    />
                </NumberInputContainer>
                <AlterNumberButton
                    className="increment"
                    onClick={() => handleAlterNumberButtonClick(1)}
                >
                    +
                </AlterNumberButton>
            </Top>
            <Bottom>
                <AlterNumberButtonBottomLeft
                    onClick={() => handleAlterNumberButtonClick(-5)}
                >
                    --
                </AlterNumberButtonBottomLeft>
                <AlterNumberButtonBottomRight
                    onClick={() => handleAlterNumberButtonClick(5)}
                >
                    ++
                </AlterNumberButtonBottomRight>
            </Bottom>
        </Container>
    );
};

export default NumberSelector;
