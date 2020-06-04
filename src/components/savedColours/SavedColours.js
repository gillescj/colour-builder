import _ from 'lodash';

import React, { useContext } from 'react';
import styled from 'styled-components';

import StoreContext from '../StoreContext';
import SavedColourItem from './SavedColourItem';

const Container = styled.div`
    display: ${(props) => (props.displaySavedColours ? `flex` : `none`)};
    flex-wrap: wrap;
    padding: 1rem;

    background: hsl(240, 10%, 80%);
    border: 3px solid hsl(60, 6%, 19%);
`;

const SavedColours = () => {
    const { selectedColour, setSelectedColourSaved, savedColoursList } = useContext(
        StoreContext
    );

    const displaySavedColours = !(savedColoursList.length === 0);

    let selectionIsSaved = false;

    const renderedSavedColourItems = savedColoursList.map((colour) => {
        let selected = false;
        const savedColourObject = _.pick(colour, [
            'hue',
            'saturation',
            'lightness',
            'name',
        ]);

        if (_.isEqual(savedColourObject, selectedColour)) {
            selected = true;
            selectionIsSaved = true;
        }

        return (
            <SavedColourItem
                key={colour.id}
                savedColourObject={savedColourObject}
                selected={selected}
            />
        );
    });

    setSelectedColourSaved(selectionIsSaved);

    return (
        <Container displaySavedColours={displaySavedColours}>
            {renderedSavedColourItems}
        </Container>
    );
};

export default SavedColours;
