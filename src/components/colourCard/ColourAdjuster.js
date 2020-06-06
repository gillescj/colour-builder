import React, { useContext } from 'react';
import styled from 'styled-components';

import StoreContext from '../StoreContext';
import NumberSelector from './NumberSelector';

const Container = styled.div`
    display: grid;
    grid-template-columns: 12rem;
    justify-self: center;
    @media (max-width: 680px) {
        grid-template-columns: minmax(10rem, 17rem);
    }
`;

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
