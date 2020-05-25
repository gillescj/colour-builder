import React, { useContext } from 'react';
import styled from 'styled-components';

import ColourDisplay from './ColourDisplay';
import ColourInput from './ColourInput';
import ColourNameHeader from './ColourNameHeader';
import StoreContext from './StoreContext';
import colourCodeObjectToCSS from '../utils/colourCodeObjectToCSS';

const Container = styled.div.attrs((props) => ({
    style: {
        boxShadow: `-10px 10px 0 ${props.cssColourCode}`,
        borderBottom: `1px solid ${props.cssColourCode}`,
        borderLeft: `1px solid ${props.cssColourCode}`,
    },
}))`
    display: grid;
    grid-gap: 1rem;
    padding: 1rem;
    background: hsl(0, 0%, 100%);
    border-top: 1px solid black;
    border-right: 1px solid black;
`;

const MainContent = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1rem;
    align-items: flex-start;
    @media (max-width: 680px) {
        grid-template-columns: auto;
    }
`;

const ColourCard = () => {
    const { colourCode } = useContext(StoreContext);

    return (
        <Container cssColourCode={colourCodeObjectToCSS(colourCode)}>
            <ColourNameHeader />
            <MainContent>
                <ColourDisplay />
                <ColourInput />
            </MainContent>
        </Container>
    );
};

export default ColourCard;
