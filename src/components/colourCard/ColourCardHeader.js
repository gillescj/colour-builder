import React from 'react';
import styled from 'styled-components';
import ColourNameInput from './ColourNameInput';
import SaveButton from './SaveButton';

const Container = styled.header`
    display: grid;
    grid-template-columns: minmax(1rem, 22rem) auto;
    grid-gap: 1rem;
`;

const ColourCardHeader = ({ saved }) => {
    return (
        <Container>
            <ColourNameInput />
            <SaveButton saved={saved} />
        </Container>
    );
};

export default ColourCardHeader;
