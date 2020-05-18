import React from 'react';
import styled from 'styled-components';

import colourCodeObjectToCSS from '../utils/colourCodeObjectToCSS';

import ColourDisplayItem from './ColourDisplayItem';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(2rem, 1fr));
    grid-gap: 0.2rem;
`;

const ColourDisplayList = ({ colourCode }) => {
    const renderedLightnessList = [10, 20, 30, 40, 50, 60, 70, 80, 90].map(
        (lightnessValue) => {
            return (
                <ColourDisplayItem
                    key={`${colourCode.hue}-${colourCode.saturation}-${lightnessValue}`}
                    size="2rem"
                    colourCode={{ ...colourCode, lightness: lightnessValue }}
                />
            );
        }
    );

    return <Container className="colour-display-list">{renderedLightnessList}</Container>;
};

export default ColourDisplayList;
