import React from 'react';
import styled from 'styled-components';

import ColourDisplay from './ColourDisplay';
import ColourInput from './ColourInput';

const Container = styled.div`
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    background: hsl(0, 0%, 100%);
`;

const ColourCard = () => {
    return (
        <Container className="colour-card">
            <h1>Colour Name</h1>
            <ColourDisplay />
            <ColourInput />
        </Container>
    );
};

export default ColourCard;
