import _ from 'lodash';

import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import StoreContext from '../StoreContext';
import SavedColourItem from './SavedColourItem';
import AddSavedColourButton from './AddSavedColourButton';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem calc(1rem - 10px) calc(1rem - 10px) 1rem;
    background: hsl(240, 11%, 95%);
    border: 3px solid hsl(60, 6%, 19%);
`;

const SavedColours = () => {
    const { selectedColour, setSelectedColourSaved, savedColoursList } = useContext(
        StoreContext
    );

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

    useEffect(() => {
        setSelectedColourSaved(selectionIsSaved);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectionIsSaved]);

    return (
        <Container>
            <AddSavedColourButton />
            {renderedSavedColourItems}
        </Container>
    );
};

export default SavedColours;
