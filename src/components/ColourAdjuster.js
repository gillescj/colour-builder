import React from 'react';
import styled from 'styled-components';

import NumberSelector from './NumberSelector';

const Container = styled.div``;

const ColourAdjuster = ({ name, minValue, maxValue }) => {
    return (
        <Container>
            <header>{name}</header>
            <NumberSelector minValue={minValue} maxValue={maxValue} />
        </Container>
    );
};

export default ColourAdjuster;
