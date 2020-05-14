import React from 'react';
import styled from 'styled-components';

import ColourDisplayItem from './ColourDisplayItem';
import ColourDisplayList from './ColourDisplayList';
// import ColourDisplayCode from './ColourDisplayCode'

const Container = styled.div`
    display: grid;
    grid-template-columns: 5rem minmax(2rem, 20rem);
`;

const ColourDisplay = () => {
    return (
        <Container className="colour-display">
            <div>
                <ColourDisplayItem size="4rem" />
            </div>
            <div>
                <div>hsl(120, 100%, 25%)</div>
                <ColourDisplayList />
            </div>
        </Container>
    );
};

export default ColourDisplay;
