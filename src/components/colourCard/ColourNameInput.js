import _ from 'lodash';

import React, { useState, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import StoreContext from '../StoreContext';

const Container = styled.input`
    background: white;
    border: solid 2px hsl(60, 6%, 19%);
    font-size: 1.5rem;
    padding: 0.5rem;
    height: 3rem;
    @media (max-width: 480px) {
        font-size: 1.3rem;
    }
`;

const ColourNameInput = () => {
    const [colourName, setColourName] = useState('');
    const {
        selectedColour,
        setSelectedColour,
        selectedColourSaved,
        focusColourNameInput,
        setFocusColourNameInput,
        setSavedColoursList,
    } = useContext(StoreContext);
    const colourNameInputRef = useRef();

    useEffect(() => {
        setColourName(selectedColour.name);
    }, [selectedColour.name]);

    useEffect(() => {
        colourNameInputRef.current.focus();
        return () => {
            setFocusColourNameInput(false);
        };
    }, [focusColourNameInput]);

    const handleColourNameInputChange = (event) => {
        const value = event.target.value;
        setColourName(value);
        setSelectedColour((previousSelectedColour) => {
            return { ...previousSelectedColour, name: value };
        });
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (!selectedColourSaved) {
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
        }
    };

    return (
        <Container
            value={colourName}
            type="text"
            placeholder="Enter Colour Name"
            ref={colourNameInputRef}
            onChange={(event) => handleColourNameInputChange(event)}
            onKeyDown={(event) => handleKeyDown(event)}
        ></Container>
    );
};

export default ColourNameInput;
