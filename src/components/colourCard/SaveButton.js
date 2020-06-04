import _ from 'lodash';

import React, { useContext } from 'react';
import styled from 'styled-components';
import { ReactComponent as HeartSVG } from '../../assets/svgs/8-bit-heart.svg';
import { ReactComponent as BrokenHeartSVG } from '../../assets/svgs/8-bit-heart-broken.svg';
import StoreContext from '../StoreContext';

const Container = styled.div`
    justify-self: end;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SaveLogo = styled(HeartSVG)`
    width: 3rem;
    height: 3rem;
    fill: hsl(0, 0%, 13%);
    cursor: pointer;
    filter: drop-shadow(-3px 3px 0 hsl(340, 60%, 59%));

    &:hover {
        fill: hsl(340, 80%, 45%);
        filter: drop-shadow(-3px 3px 0 hsl(340, 60%, 59%));
    }
`;

const UnsaveLogo = styled(BrokenHeartSVG)`
    width: 3rem;
    height: 3rem;
    fill: hsl(0, 0%, 13%);
    cursor: pointer;
    filter: drop-shadow(-3px 3px 0 hsl(340, 60%, 59%));

    &:hover {
        fill: hsl(340, 80%, 45%);
        filter: drop-shadow(-3px 3px 0 hsl(340, 60%, 59%));
    }
`;

const SaveButton = () => {
    const { selectedColour, selectedColourSaved, setSavedColoursList } = useContext(
        StoreContext
    );

    const renderSaveLogo = selectedColourSaved ? <UnsaveLogo /> : <SaveLogo />;

    const handleSaveButtonClick = () => {
        if (selectedColourSaved) {
            setSavedColoursList((previousSavedColoursList) => {
                return [...previousSavedColoursList].filter(
                    (savedColourObject) => savedColourObject.name !== selectedColour.name
                );
            });
        } else {
            setSavedColoursList((previousSavedColoursList) => {
                return [
                    ...previousSavedColoursList,
                    {
                        ...selectedColour,
                        id: _.uniqueId(),
                    },
                ];
            });
        }
    };

    return (
        <Container onClick={() => handleSaveButtonClick()}>{renderSaveLogo}</Container>
    );
};

export default SaveButton;
