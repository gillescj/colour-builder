import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: ${(props) => props.cssColourCode};
    width: ${(props) => props.size || '2rem'};
    height: ${(props) => props.size || '2rem'};
`;

const ColourDisplayItem = ({
    size,
    colourCode = { hue: 280, saturation: 50, lightness: 50 },
    cssColourCode = 'hsl(280, 50%, 50%)',
}) => {
    return (
        <Container size={size} colourCode={colourCode} cssColourCode={cssColourCode} />
    );
};

export default ColourDisplayItem;
