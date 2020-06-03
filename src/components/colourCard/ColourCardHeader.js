import React from 'react';
import styled from 'styled-components';
import { ReactComponent as HeartSVG } from '../../assets/svgs/8-bit-heart.svg';
import { ReactComponent as BrokenHeartSVG } from '../../assets/svgs/8-bit-heart-broken.svg';
import ColourNameInput from './ColourNameInput';

const Container = styled.header`
    display: grid;
    grid-template-columns: minmax(1rem, 22rem) auto;
    grid-gap: 1rem;
`;

const SaveButton = styled.div`
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

const ColourCardHeader = ({ saved }) => {
    const renderSaveLogo = saved ? <UnsaveLogo /> : <SaveLogo />;

    return (
        <Container>
            <ColourNameInput />
            <SaveButton>{renderSaveLogo}</SaveButton>
        </Container>
    );
};

export default ColourCardHeader;