import React from 'react';
import styled from 'styled-components';

import colourCodeObjectToCSS from '../utils/colourCodeObjectToCSS';

import ColourDisplayItem from './ColourDisplayItem';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(2rem, 1fr));
    grid-gap: 0.2rem;
`;

const ColourDisplayList = ({ colourCode, colourCodeAttribute, divisionArray }) => {
    const renderedAttributeList = divisionArray.map((attributeValue) => {
        return (
            <ColourDisplayItem
                key={colourCodeObjectToCSS({
                    ...colourCode,
                    [colourCodeAttribute]: attributeValue,
                })}
                size="2rem"
                colourCode={{ ...colourCode, [colourCodeAttribute]: attributeValue }}
            />
        );
    });

    return <Container>{renderedAttributeList}</Container>;
};

export default ColourDisplayList;
