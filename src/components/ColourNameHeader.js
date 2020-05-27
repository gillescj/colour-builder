import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SaveLogo } from '../assets/svgs/save.svg';
import { Button } from '../styles/styledComponents';

const Container = styled.header`
    display: grid;
    grid-template-columns: minmax(1rem, 15rem) auto;
    input {
        justify-self: start;
        background: hsl(10, 10%, 90%);
        border: solid 2px hsl(10, 10%, 70%);
        font-size: 1.5rem;
        padding: 0.5rem;
    }
`;

const SaveButton = styled(Button)`
    justify-self: end;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background: hsl(340, 82%, 52%);
    svg {
        fill: white;
        width: 2rem;
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
                <SaveLogo />
            </SaveButton>
        </Container>
    );
};

export default ColourNameHeader;
