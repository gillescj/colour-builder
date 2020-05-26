import React, { useContext } from 'react';
import styled from 'styled-components';

import colourCodeObjectToCSS from '../utils/colourCodeObjectToCSS';
import StoreContext from './StoreContext';

const Container = styled.div.attrs((props) => ({
    style: {
        background: props.cssColourCode,
    },
}))`
    width: ${(props) => props.size || '2rem'};
    height: ${(props) => props.size || '2rem'};
    cursor: pointer;
    border: 1px solid hsl(60, 6%, 19%);
`;

const ColourDisplayItem = ({
    size,
    colourCode = { hue: 280, saturation: 50, lightness: 50 },
    primary = false,
}) => {
    const { setColourCode } = useContext(StoreContext);
    const cssColourCode = colourCodeObjectToCSS(colourCode);

    const handleColourDisplayItemClick = () => {
        if (primary) return;
        setColourCode(colourCode);
    };

    return (
        <Container
            size={size}
            colourCode={colourCode}
            cssColourCode={cssColourCode}
            onClick={() => handleColourDisplayItemClick()}
        />
    );
};

export default ColourDisplayItem;
