import _ from 'lodash';

import React, { useContext } from 'react';
import styled from 'styled-components';

import StoreContext from '../StoreContext';
import SavedColourItem from './SavedColourItem';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;

    background: hsl(240, 10%, 80%);
    border: 3px solid hsl(60, 6%, 19%);
`;

const SavedColours = () => {
    const { selectedColour, savedColoursList } = useContext(StoreContext);

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
        }

        return (
            <SavedColourItem
                key={colour.id}
                savedColourObject={savedColourObject}
                selected={selected}
            />
        );
    });

    return <Container>{renderedSavedColourItems}</Container>;
};

export default SavedColours;
