import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.header`
    display: grid;
    grid-template-columns: minmax(1rem, 15rem);
    input {
        background: none;
        border: none;
        font-size: 1.5rem;
    }
`;

const ColourNameHeader = () => {
    const [colourName, setColourName] = useState('Colour Name');

    const handleColourNameInputChange = (event) => {
        setColourName(event.target.value);
    };

    return (
        <Container>
            <input
                value={colourName}
                type="text"
                placeholder="Colour Name"
                onChange={(event) => handleColourNameInputChange(event)}
            />
        </Container>
    );
};

export default ColourNameHeader;
