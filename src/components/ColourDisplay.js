import _ from 'lodash';

import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../styles/styledComponents';
import { ReactComponent as CycleIcon } from '../assets/svgs/cycle.svg';

import ColourDisplayItem from './ColourDisplayItem';
import ColourDisplayList from './ColourDisplayList';
import ColourDisplayCode from './ColourDisplayCode';
import StoreContext from './StoreContext';

const Container = styled.div`
    display: grid;
    grid-template-columns: 5rem minmax(2rem, 20rem);
    grid-gap: 0.5rem;
    .colour-secondary-content {
        display: grid;
        align-content: space-between;
        grid-gap: 0.5rem;
    }
    @media (max-width: 520px) {
        grid-template-columns: minmax(2rem, 20rem);
    }
`;

const ColourListHeader = styled.header`
    display: flex;
    justify-content: space-between;
    h3 {
        font-weight: normal;
        margin-right: 0.5rem;
    }

    button {
    }
    @media (max-width: 520px) {
        flex-direction: column;
        h3 {
            text-align: center;
        }
    }
`;

const CycleButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    padding: 0.5rem 0;
    svg {
        fill: white;
    }
`;

const ColourDisplay = () => {
    const { colourCode } = useContext(StoreContext);
    const [secondaryContent, setSecondaryContent] = useState('hue');

    const renderColourDisplayList = (attribute) => {
        if (attribute === 'hue') {
            return (
                <ColourDisplayList
                    colourCode={colourCode}
                    colourCodeAttribute="hue"
                    divisionArray={_.range(0, 360, 10)}
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
                <ColourListHeader>
                    <h3>{secondaryContent} levels</h3>
                    <CycleButton onClick={() => cycleSecondaryContent()}>
                        <CycleIcon />
                    </CycleButton>
                </ColourListHeader>
                {renderColourDisplayList(secondaryContent)}
            </div>
        </Container>
    );
};

export default ColourDisplay;
