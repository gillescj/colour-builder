import React from 'react';
import styled from 'styled-components';

import ColourDisplay from './ColourDisplay';
import ColourInput from './ColourInput';
import ColourNameHeader from './ColourNameHeader';

const Container = styled.div`
    display: grid;
    grid-gap: 1rem;
    padding: 1rem;
    border: none;
    border-radius: 1.5rem;
    background: hsl(0, 0%, 100%);
    box-shadow: 0 5rem 3rem -5rem rgba(0, 0, 0, 0.35);
`;

const ColourCard = () => {
    return (
        <Container className="colour-card">
            <ColourNameHeader />
            <ColourDisplay />
            <ColourInput />
        </Container>
    );
};

export default ColourCard;
