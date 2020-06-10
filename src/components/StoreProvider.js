import React, { useState } from 'react';
import StoreContext from './StoreContext';
import useLocalStorage from '../utils/useLocalStorage';

const StoreProvider = (props) => {
    const [selectedColour, setSelectedColour] = useState({
        hue: 240,
        saturation: 50,
        lightness: 50,
        name: '',
    });

    const [selectedColourSaved, setSelectedColourSaved] = useState(false);

    const [savedColoursList, setSavedColoursList] = useLocalStorage(
        'savedColoursList',
        []
    );

    const [focusColourNameInput, setFocusColourNameInput] = useState(false);

    const store = {
        selectedColour,
        setSelectedColour,
        savedColoursList,
        setSavedColoursList,
        selectedColourSaved,
        setSelectedColourSaved,
        focusColourNameInput,
        setFocusColourNameInput,
    };

    return <StoreContext.Provider value={store}>{props.children}</StoreContext.Provider>;
};

export default StoreProvider;
