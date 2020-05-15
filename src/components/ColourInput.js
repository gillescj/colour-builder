import React from 'react';
import styled from 'styled-components';

import ColourAdjuster from './ColourAdjuster';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 30rem;
`;

const ColourInput = () => {
    return (
        <Container>
            <ColourAdjuster name={'hue'} />
            <ColourAdjuster name={'saturation'} />
            <ColourAdjuster name={'lightness'} />
        </Container>
    );
};

export default ColourInput;
