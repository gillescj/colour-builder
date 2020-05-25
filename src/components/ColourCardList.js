import React from 'react';
import styled from 'styled-components';

import ColourCard from './ColourCard';

const Container = styled.div`
    padding: 2rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: minmax(auto, 45rem);
    @media (max-width: 520px) {
        padding: 0.5rem;
    }
`;

const ColourCardList = () => {
    return (
        <Container>
            <ColourCard />
        </Container>
    );
};

export default ColourCardList;
