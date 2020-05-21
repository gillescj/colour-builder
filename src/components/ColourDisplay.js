import _ from 'lodash';

import React, { useContext, useState } from 'react';
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
    const [secondaryContent, setSecondaryContent] = useState('lightness');

    const renderColourDisplayList = (attribute) => {
        if (attribute === 'hue') {
            return (
                <ColourDisplayList
                    colourCode={colourCode}
                    colourCodeAttribute="hue"
                    divisionArray={_.range(10, 360, 10)}
                />
            );
        } else {
            return (
                <ColourDisplayList
                    colourCode={colourCode}
                    colourCodeAttribute={attribute}
                    divisionArray={_.range(10, 100, 10)}
                />
            );
        }
    };

    const cycleSecondaryContent = () => {
        const secondaryContentNames = ['hue', 'saturation', 'lightness'];
        const index = secondaryContentNames.indexOf(secondaryContent);
        if (index === secondaryContentNames.length - 1) {
            setSecondaryContent(secondaryContentNames[0]);
        } else {
            setSecondaryContent(secondaryContentNames[index + 1]);
        }
    };

    return (
        <Container className="colour-display">
            <ColourDisplayItem size="4rem" colourCode={colourCode} primary={true} />
            <div className="colour-secondary-content">
                <ColourDisplayCode colourCode={colourCode} />
                <button onClick={() => cycleSecondaryContent()}>Swap</button>
                {renderColourDisplayList(secondaryContent)}
            </div>
        </Container>
    );
};

export default ColourDisplay;
