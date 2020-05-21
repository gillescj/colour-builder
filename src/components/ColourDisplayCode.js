import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import colourCodeObjectToCSS from '../utils/colourCodeObjectToCSS';

const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 0.5rem;
    input {
        background: none;
        border: none;
        /* width: auto; */
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
            <button
                onCopy={(event) => handleButtonCopy(event)}
                onClick={() => handleButtonClick()}
            >
                Copy
            </button>
            <input ref={colourCodeInputRef} value={cssColourCode} readonly />
        </Container>
    );
};

export default ColourDisplayCode;
