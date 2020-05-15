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
            <ColourAdjuster name={'hue'} minValue={0} maxValue={359} />
            <ColourAdjuster name={'saturation'} minValue={0} maxValue={100} />
            <ColourAdjuster name={'lightness'} minValue={0} maxValue={100} />
        </Container>
    );
};

export default ColourInput;
