import React, { useRef } from 'react';
import styled from 'styled-components';
import { Button } from '../styles/styledComponents';
import { ReactComponent as ClipboardSVG } from '../assets/svgs/clipboard.svg';

import colourCodeObjectToCSS from '../utils/colourCodeObjectToCSS';

const Container = styled.div`
    display: grid;
    grid-template-columns: 3rem minmax(1rem, 10rem);
    grid-gap: 0.5rem;
    input {
        background: none;
        border: none;
        font-size: 1rem;
        color: hsl(0, 0%, 25%);
        outline: none;
    }
`;

const ClipboardButton = styled(Button)`
    width: 3rem;
    padding: 0.5rem 0;
    svg {
        fill: white;
    }
`;

const ColourDisplayCode = ({ colourCode }) => {
    const cssColourCode = colourCodeObjectToCSS(colourCode);
    const colourCodeInputRef = useRef();

    const handleButtonCopy = (event) => {
        event.preventDefault();
        event.clipboardData.setData('text/plain', 'test');
    };

    const handleButtonClick = () => {
        colourCodeInputRef.current.select();
        document.execCommand('copy');
    };

    return (
        <Container>
            <ClipboardButton
                onCopy={(event) => handleButtonCopy(event)}
                onClick={() => handleButtonClick()}
            >
                <ClipboardSVG />
            </ClipboardButton>
            <input ref={colourCodeInputRef} value={cssColourCode} readOnly />
        </Container>
    );
};

export default ColourDisplayCode;
