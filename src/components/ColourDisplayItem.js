import React, { useContext } from 'react';
import styled from 'styled-components';

import colourCodeObjectToCSS from '../utils/colourCodeObjectToCSS';
import StoreContext from './StoreContext';

const Container = styled.div`
    background: ${(props) => props.cssColourCode};
    width: ${(props) => props.size || '2rem'};
    height: ${(props) => props.size || '2rem'};
    cursor: pointer;
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
