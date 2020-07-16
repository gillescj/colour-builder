import React, { useState, useMemo } from 'react';
import NameContext from './NameContext';
import useLocalStorage from '../utils/useLocalStorage';

const NameProvider = (props) => {
    const [colourName, setColourName] = useState('');

    const store = useMemo(
        () => ({
            colourName,
            setColourName,
        }),
        [colourName]
    );

    return <NameContext.Provider value={store}>{props.children}</NameContext.Provider>;
};

export default NameProvider;
