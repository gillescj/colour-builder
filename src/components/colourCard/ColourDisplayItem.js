import React, { useContext } from 'react';
import styled from 'styled-components';

import colourObjectToCSS from '../../utils/colourObjectToCSS';
import StoreContext from '../StoreContext';

const Container = styled.div.attrs((props) => ({
    style: {
        background: props.cssColourCode,
    },
}))`
    width: ${(props) => props.size || '2rem'};
    height: ${(props) => props.size || '2rem'};
    cursor: pointer;
    border: 1px solid hsl(60, 6%, 19%);
    &:hover {
        border: 2px solid black;
    }
`;

const ColourDisplayItem = ({
    size,
    itemColour = { hue: 280, saturation: 50, lightness: 50 },
    primary = false,
}) => {
    const { setSelectedColour } = useContext(StoreContext);
    const cssColourCode = colourObjectToCSS(itemColour);

    const handleColourDisplayItemClick = () => {
        if (primary) return;
        setSelectedColour(itemColour);
    };

    return (
        <Container
            size={size}
            itemColour={itemColour}
            cssColourCode={cssColourCode}
            onClick={() => handleColourDisplayItemClick()}
        />
    );
};

export default ColourDisplayItem;
