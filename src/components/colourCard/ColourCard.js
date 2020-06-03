import React, { useContext } from 'react';
import styled from 'styled-components';

import ColourDisplay from './ColourDisplay';
import ColourInput from './ColourInput';
import ColourCardHeader from './ColourCardHeader';
import StoreContext from '../StoreContext';
import colourObjectToCSS from '../../utils/colourObjectToCSS';

const Container = styled.div.attrs((props) => ({
    style: {
        boxShadow: `-10px 10px 0 ${props.cssColourCode}`,
    },
}))`
    display: grid;
    grid-gap: 1rem;
    padding: 1rem;
    background: hsl(0, 0%, 100%);
    border: 3px solid hsl(60, 6%, 19%);
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
    const { selectedColour } = useContext(StoreContext);

    return (
        <Container cssColourCode={colourObjectToCSS(selectedColour)}>
            <ColourCardHeader />
            <MainContent>
                <ColourDisplay />
                <ColourInput />
            </MainContent>
        </Container>
    );
};

export default ColourCard;
