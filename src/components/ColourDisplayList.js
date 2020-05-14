import React from 'react';
import styled from 'styled-components';

import ColourDisplayItem from './ColourDisplayItem';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(2rem, 1fr));
    grid-gap: 0.2rem;
`;

const ColourDisplayList = () => {
    return (
        <Container className="colour-display-list">
            <ColourDisplayItem size="2rem" />
            <ColourDisplayItem size="2rem" />
            <ColourDisplayItem size="2rem" />
            <ColourDisplayItem size="2rem" />
            <ColourDisplayItem size="2rem" />
        </Container>
    );
};

export default ColourDisplayList;
