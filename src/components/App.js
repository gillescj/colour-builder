import React from 'react';
import StoreProvider from './StoreProvider';
import NameProvider from './NameProvider';
import MainContainer from './MainContainer';

const App = () => {
    return (
        <StoreProvider>
            <NameProvider>
                <div className="container">
                    <MainContainer />
                </div>
            </NameProvider>
        </StoreProvider>
    );
};

export default App;
