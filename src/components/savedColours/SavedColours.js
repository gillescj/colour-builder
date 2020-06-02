import React, { useContext } from 'react';
import styled from 'styled-components';

import StoreContext from '../StoreContext';
import SavedColourItem from './SavedColourItem';
import colourObjectToCSS from '../../utils/colourObjectToCSS';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;

    background: hsl(240, 10%, 80%);
    border: 3px solid hsl(60, 6%, 19%);
`;

const SavedColours = () => {
    const { savedColoursList } = useContext(StoreContext);

    const renderedSavedColourItems = savedColoursList.map((colour) => {
        const colourCodeCSS = colourObjectToCSS(colour);
        return (
            <SavedColourItem
                key={colour.id}
                name={colour.name}
                colourCodeCSS={colourCodeCSS}
            />
        );
    });

    return (
        <Container>
            {renderedSavedColourItems}
            <SavedColourItem
                key={'100'}
                name="Ridiculous Royal Blue"
                colourCodeCSS="hsl(233, 83%, 42%)"
                selected
            />
        </Container>
    );
};

export default SavedColours;
