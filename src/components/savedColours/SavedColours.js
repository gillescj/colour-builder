import React from 'react';
import styled from 'styled-components';

import SavedColourItem from './SavedColourItem';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;

    background: hsl(240, 10%, 80%);
    border: 3px solid hsl(60, 6%, 19%);
`;

const SavedColours = () => {
    return (
        <Container>
            <SavedColourItem name="Cool Orange" />
            <SavedColourItem name="Stylish Sugar Red" />
            <SavedColourItem name="Just Blue" />
            <SavedColourItem name="Cool Orange" selected />
            <SavedColourItem name="Country Wide Lavender" />
            <SavedColourItem name="Just Blue" />
            <SavedColourItem name="Cool Orange" />
            <SavedColourItem name="Country Wide Lavender" />
            <SavedColourItem name="Just Blue" />
            <SavedColourItem name="Tan Burnt Brown" />
            <SavedColourItem name="Simple Cyan" />
            <SavedColourItem name="Fromage Yellow" />
            <SavedColourItem name="Stylish Sugar Red" />
        </Container>
    );
};

export default SavedColours;
