import React, { useContext } from 'react';
import styled from 'styled-components';

import ColourDisplay from './ColourDisplay';
import ColourInput from './ColourInput';
import ColourCardHeader from './ColourCardHeader';
import StoreContext from '../StoreContext';
import colourObjectToCSS from '../../utils/colourObjectToCSS';

const Container = styled.div`
    display: grid;
    grid-gap: 1rem;
    padding: 1rem;
    background: hsl(240, 11%, 90%);
    border: 3px solid hsl(60, 6%, 19%);
    box-shadow: -10px 10px 0 ${(props) => props.cssColourCode};
    @media (max-width: 480px) {
        box-shadow: 0 10px 0 ${(props) => props.cssColourCode};
    }
`;

const MainContent = styled.div`
    display: grid;
    grid-template-columns: auto 12rem;
    grid-gap: 1.5rem;
    align-items: flex-start;
    justify-content: space-evenly;
    @media (max-width: 680px) {
        grid-template-columns: 1fr;
        justify-content: center;
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
