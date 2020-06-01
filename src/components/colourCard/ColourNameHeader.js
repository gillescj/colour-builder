import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as HeartSVG } from '../../assets/svgs/8-bit-heart.svg';
import { ReactComponent as BrokenHeartSVG } from '../../assets/svgs/8-bit-heart-broken.svg';

const Container = styled.header`
    display: grid;
    grid-template-columns: minmax(1rem, 22rem) auto;
    grid-gap: 1rem;
    input {
        background: hsl(10, 10%, 90%);
        border: solid 2px hsl(10, 10%, 70%);
        font-size: 1.5rem;
        padding: 0.5rem;
    }
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

const ColourNameHeader = () => {
    const [colourName, setColourName] = useState('');

    const handleColourNameInputChange = (event) => {
        setColourName(event.target.value);
    };

    return (
        <Container>
            <input
                value={colourName}
                type="text"
                placeholder="Name Here..."
                onChange={(event) => handleColourNameInputChange(event)}
            />
            <SaveButton>
                <SaveLogo></SaveLogo>
            </SaveButton>
        </Container>
    );
};

export default ColourNameHeader;
