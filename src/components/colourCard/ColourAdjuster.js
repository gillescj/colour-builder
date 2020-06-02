import React, { useContext } from 'react';
import styled from 'styled-components';

import StoreContext from '../StoreContext';
import NumberSelector from './NumberSelector';

const Container = styled.div``;

const ColourAdjuster = ({ colourCodeAttribute, minValue, maxValue }) => {
    const { selectedColour, setSelectedColour } = useContext(StoreContext);

    const editSelectedColour = (colourCodeAttribute, colourCodeAttributeValue) => {
        setSelectedColour((previousSelectedColour) => {
            return {
                ...previousSelectedColour,
                [colourCodeAttribute]: colourCodeAttributeValue,
            };
        });
    };

    return (
        <Container>
            <header>{colourCodeAttribute}</header>
            <NumberSelector
                attributeName={colourCodeAttribute}
                attributeValue={selectedColour[colourCodeAttribute]}
                minValue={minValue}
                maxValue={maxValue}
                defaultValue={selectedColour[colourCodeAttribute]}
                editSelectedColour={editSelectedColour}
            />
        </Container>
    );
};

export default ColourAdjuster;
