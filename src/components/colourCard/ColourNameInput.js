import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import StoreContext from '../StoreContext';

const Container = styled.input`
    background: hsl(10, 10%, 90%);
    border: solid 2px hsl(10, 10%, 70%);
    font-size: 1.5rem;
    padding: 0.5rem;
`;

const ColourNameInput = () => {
    const [colourName, setColourName] = useState('');
    const { setSelectedColour } = useContext(StoreContext);

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
