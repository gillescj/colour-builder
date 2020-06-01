import React, { useState, useMemo } from 'react';
import MainContainer from './MainContainer';
import StoreContext from './StoreContext';
import _ from 'lodash';

const App = () => {
    const [colourCode, setColourCode] = useState({
        hue: 240,
        saturation: 50,
        lightness: 50,
    });

    const [colourList, setColourList] = useState([
        {
            id: _.uniqueId(),
            name: 'Cool Orange',
            hue: 25,
            saturation: 65,
            lightness: 50,
        },
        {
            id: _.uniqueId(),
            name: 'Stylish Sugar Red',
            hue: 0,
            saturation: 70,
            lightness: 50,
        },
        {
            id: _.uniqueId(),
            name: 'Just Blue',
            hue: 220,
            saturation: 70,
            lightness: 50,
        },
        {
            id: _.uniqueId(),
            name: 'Country Wide Lavender',
            hue: 280,
            saturation: 70,
            lightness: 60,
        },
        {
            id: _.uniqueId(),
            name: 'Tan Burnt Brown',
            hue: 40,
            saturation: 55,
            lightness: 35,
        },
        {
            id: _.uniqueId(),
            name: 'Simple Cyan',
            hue: 180,
            saturation: 100,
            lightness: 50,
        },
        {
            id: _.uniqueId(),
            name: 'Fromage Yellow',
            hue: 60,
            saturation: 80,
            lightness: 55,
        },
    ]);

    const store = useMemo(
        () => ({
            colourCode,
            setColourCode,
            colourList,
            setColourList,
        }),
        [colourCode, setColourCode, colourList, setColourList]
    );

    return (
        <StoreContext.Provider value={store}>
            <div className="container">
                <MainContainer />
            </div>
        </StoreContext.Provider>
    );
};

export default App;
