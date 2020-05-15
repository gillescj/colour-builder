import React from 'react';
import styled from 'styled-components';

import ColourDisplay from './ColourDisplay';
import ColourInput from './ColourInput';
import ColourNameHeader from './ColourNameHeader';

const Container = styled.div`
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    background: hsl(0, 0%, 100%);
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
