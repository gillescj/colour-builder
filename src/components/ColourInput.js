import React from 'react';
import styled from 'styled-components';

import ColourAdjuster from './ColourAdjuster';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(5rem, 10rem));
    grid-gap: 0.5rem;
    justify-content: start;
`;

const ColourInput = () => {
    return (
        <Container>
            <ColourAdjuster colourCodeAttribute={'hue'} minValue={0} maxValue={359} />
            <ColourAdjuster
                colourCodeAttribute={'saturation'}
                minValue={0}
                maxValue={100}
            />
            <ColourAdjuster
                colourCodeAttribute={'lightness'}
                minValue={0}
                maxValue={100}
            />
        </Container>
    );
};

export default ColourInput;
