import React, { useContext } from 'react';
import styled from 'styled-components';

import ColourDisplayItem from './ColourDisplayItem';
import ColourDisplayList from './ColourDisplayList';
import ColourDisplayCode from './ColourDisplayCode';
import StoreContext from './StoreContext';

const Container = styled.div`
    display: grid;
    grid-template-columns: 5rem minmax(2rem, 20rem);
    .colour-secondary-content {
        display: grid;
        align-content: space-between;
    }
`;

const ColourDisplay = () => {
    const { colourCode } = useContext(StoreContext);

    const colourCodeObjectToCSS = (colourCodeObject) => {
        const cssString = `hsl(${colourCodeObject.hue},
                ${colourCodeObject.saturation}%,
                ${colourCodeObject.lightness}%)
                `;
        return cssString;
    };

    return (
        <Container className="colour-display">
            <ColourDisplayItem
                size="4rem"
                colourCode={colourCode}
                cssColourCode={colourCodeObjectToCSS(colourCode)}
            />
            <div className="colour-secondary-content">
                <ColourDisplayCode cssColourCode={colourCodeObjectToCSS(colourCode)} />
                <ColourDisplayList />
            </div>
        </Container>
    );
};

export default ColourDisplay;
