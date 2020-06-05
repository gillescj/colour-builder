import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import StoreContext from '../StoreContext';

const Container = styled.input`
    background: hsl(10, 10%, 90%);
    border: solid 2px hsl(10, 10%, 70%);
    font-size: 1.5rem;
    padding: 0.5rem;
    height: 3rem;
    @media (max-width: 480px) {
        font-size: 1.3rem;
    }
`;

const ColourNameInput = () => {
    const [colourName, setColourName] = useState('');
    const { selectedColour, setSelectedColour } = useContext(StoreContext);

    useEffect(() => {
        setColourName(selectedColour.name);
    }, [selectedColour.name]);

    const handleColourNameInputChange = (event) => {
        const value = event.target.value;
        setColourName(value);
        setSelectedColour((previousSelectedColour) => {
            return { ...previousSelectedColour, name: value };
        });
    };
    return (
        <Container
            value={colourName}
            type="text"
            placeholder="Enter Colour Name"
            onChange={(event) => handleColourNameInputChange(event)}
        ></Container>
    );
};

export default ColourNameInput;
