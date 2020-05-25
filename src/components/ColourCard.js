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

const MainContent = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1rem;
    align-items: flex-start;
    @media (max-width: 680px) {
        grid-template-columns: auto;
    }
`;

const ColourCard = () => {
    return (
        <Container className="colour-card">
            <ColourNameHeader />
            <MainContent>
                <ColourDisplay />
                <ColourInput />
            </MainContent>
        </Container>
    );
};

export default ColourCard;
