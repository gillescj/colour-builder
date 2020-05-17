import React from 'react';
import styled from 'styled-components';

const ColourCodeObjectToCSS = (colourCodeObject) => {
    const cssString = `hsl(
        ${colourCodeObject.hue},
        ${colourCodeObject.saturation}%,
        ${colourCodeObject.lightness}%
    )`;
    return cssString;
};

const ColourSquare = styled.div`
    background: ${(props) => ColourCodeObjectToCSS(props.colourCode)};
    width: ${(props) => props.size || '2rem'};
    height: ${(props) => props.size || '2rem'};
`;

const ColourDisplayItem = ({
    size,
    colourCode = { hue: 280, saturation: 50, lightness: 50 },
}) => {
    return <ColourSquare size={size} colourCode={colourCode} />;
};

export default ColourDisplayItem;
