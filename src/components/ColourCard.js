import React from 'react';
import styled from 'styled-components';

import ColourDisplay from './ColourDisplay';
import ColourInput from './ColourInput';
import ColourNameHeader from './ColourNameHeader';

const Container = styled.div`
    display: grid;
    grid-gap: 1rem;
    padding: 1rem;
    background: hsl(0, 0%, 100%);
    box-shadow: -10px 10px 0 black;
    border: 1px solid black;
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
