import React from 'react';
import styled from 'styled-components';

import colourObjectToCSS from '../../utils/colourObjectToCSS';

import ColourDisplayItem from './ColourDisplayItem';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(2.3rem, 1fr));
    grid-gap: 0.2rem;
`;

const ColourDisplayList = ({ selectedColour, colourCodeAttribute, divisionArray }) => {
    const renderedAttributeList = divisionArray.map((attributeValue) => {
        return (
            <ColourDisplayItem
                key={colourObjectToCSS({
                    ...selectedColour,
                    [colourCodeAttribute]: attributeValue,
                })}
                size="2.3rem"
                itemColour={{
                    ...selectedColour,
                    [colourCodeAttribute]: attributeValue,
                }}
            />
        );
    });

    return <Container>{renderedAttributeList}</Container>;
};

export default ColourDisplayList;
