import React from 'react';
import StoreProvider from './StoreProvider';
import MainContainer from './MainContainer';

const App = () => {
    return (
        <StoreProvider>
            <div className="container">
                <MainContainer />
            </div>
        </StoreProvider>
    );
};

export default App;
