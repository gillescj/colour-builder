import React from 'react';
import styled from 'styled-components';

import NumberSelector from './NumberSelector';

const Container = styled.div``;

const ColourAdjuster = ({ name }) => {
    return (
        <Container>
            <header>{name}</header>
            <NumberSelector />
        </Container>
    );
};

export default ColourAdjuster;
