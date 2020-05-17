import React, { useContext } from 'react';
import styled from 'styled-components';

import StoreContext from './StoreContext';
import NumberSelector from './NumberSelector';

const Container = styled.div``;

const ColourAdjuster = ({ colourCodeAttribute, minValue, maxValue }) => {
    const { colourCode, setColourCode } = useContext(StoreContext);

    const editColourCode = (colourCodeAttribute, colourCodeAttributeValue) => {
        setColourCode((previousColourCode) => {
            return {
                ...previousColourCode,
                [colourCodeAttribute]: colourCodeAttributeValue,
            };
        });
    };

    return (
        <Container>
            <header>{colourCodeAttribute}</header>
            <NumberSelector
                name={colourCodeAttribute}
                minValue={minValue}
                maxValue={maxValue}
                defaultValue={colourCode[colourCodeAttribute]}
                handleChange={editColourCode}
            />
        </Container>
    );
};

export default ColourAdjuster;
