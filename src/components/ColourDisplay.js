import React from 'react';
import styled from 'styled-components';

import ColourDisplayItem from './ColourDisplayItem';
import ColourDisplayList from './ColourDisplayList';
import ColourDisplayCode from './ColourDisplayCode';

const Container = styled.div`
    display: grid;
    grid-template-columns: 5rem minmax(2rem, 20rem);
    .colour-secondary-content {
        display: grid;
        align-content: space-between;
    }
`;

const ColourDisplay = () => {
    return (
        <Container className="colour-display">
            <ColourDisplayItem size="4rem" />
            <div className="colour-secondary-content">
                <ColourDisplayCode />
                <ColourDisplayList />
            </div>
        </Container>
    );
};

export default ColourDisplay;
