import React, { useState, useMemo } from 'react';
import ColourCardList from './ColourCardList';
import StoreContext from './StoreContext';

const App = () => {
    const [colourCode, setColourCode] = useState({
        hue: 240,
        saturation: 50,
        lightness: 50,
    });
    const store = useMemo(
        () => ({
            colourCode,
            setColourCode,
        }),
        [colourCode, setColourCode]
    );

    return (
        <StoreContext.Provider value={store}>
            <div className="container">
                <ColourCardList />
            </div>
        </StoreContext.Provider>
    );
};

export default App;
