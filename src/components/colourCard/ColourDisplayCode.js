import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Button } from '../../styles/styledComponents';
import { ReactComponent as ClipboardSVG } from '../../assets/svgs/clipboard.svg';
import { ReactComponent as CheckmarkSVG } from '../../assets/svgs/checkmark.svg';

import colourObjectToCSS from '../../utils/colourObjectToCSS';

const Container = styled.div`
    display: grid;
    grid-template-columns: 3rem minmax(1rem, 10rem);
    grid-gap: 0.5rem;
    input {
        background: none;
        border: none;
        font-size: 1rem;
        color: hsl(0, 0%, 15%);
        outline: none;
    }
`;

const ClipboardButton = styled(Button)`
    display: grid;
    align-items: center;
    justify-content: center;
    width: 3rem;
    padding: 0.5rem 0;
    svg {
        grid-row: 1/-1;
        grid-column: 1/-1;
        fill: white;
    }
`;

const ClipboardSVGStyled = styled(ClipboardSVG)`
    animation: ${(props) =>
        props.copied === 'true' ? `disappear 0.2s linear forwards` : ''};
    @keyframes disappear {
        0% {
            transform: translateY(0);
            opacity: 1;
        }

        100% {
            transform: translateY(10px);
            opacity: 0;
        }
    }
`;

const CheckmarkSVGStyled = styled(CheckmarkSVG)`
    opacity: 0;
    transform: translateY(-10px);
    animation: ${(props) =>
        props.copied === 'true' ? `appear 0.2s linear forwards` : ''};
    @keyframes appear {
        0% {
            transform: translateY(-10px);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;

const ColourDisplayCode = ({ selectedColour }) => {
    const [copiedColourCode, setCopiedColourCode] = useState();

    const cssColourCode = colourObjectToCSS(selectedColour);
    const colourCodeInputRef = useRef();

    const handleButtonCopy = (event) => {
        event.preventDefault();
        event.clipboardData.setData('text/plain', 'test');
    };

    const handleButtonClick = () => {
        colourCodeInputRef.current.select();
        document.execCommand('copy');
        setCopiedColourCode(cssColourCode);
    };

    return (
        <Container>
            <ClipboardButton
                onCopy={(event) => handleButtonCopy(event)}
                onClick={() => handleButtonClick()}
            >
                <ClipboardSVGStyled
                    copied={(copiedColourCode === cssColourCode).toString()}
                />
                <CheckmarkSVGStyled
                    copied={(copiedColourCode === cssColourCode).toString()}
                />
            </ClipboardButton>
            <input ref={colourCodeInputRef} value={cssColourCode} readOnly />
        </Container>
    );
};

export default ColourDisplayCode;
