import React from 'react';
import styled from 'styled-components';

import NumberSelector from './NumberSelector';
import ColourDisplay from './ColourDisplay';

const Container = styled.div`
    padding: 1rem;
    border: solid 2px black;
    border-radius: 0.5rem;
`;

const ColourCard = () => {
    return (
        <Container className="colour-card">
            <h1>Colour Name</h1>
            <ColourDisplay />
            <NumberSelector />
        </Container>
    );
};

export default ColourCard;
