import React, { useContext } from 'react';
import styled from 'styled-components';

import StoreContext from '../StoreContext';
import colourObjectToCSS from '../../utils/colourObjectToCSS';

const Container = styled.button.attrs((props) => ({
    style: {
        background: props.selected ? 'hsl(0, 0%, 13%)' : 'white',
        color: props.selected ? 'white' : '',
        boxShadow: `-3px 3px 0 ${props.colourCodeCSS}`,
    },
}))`
    border: 3px solid hsl(0, 0%, 13%);
    font-size: 1rem;
    padding: 0.4rem;
    cursor: pointer;
    margin: 0 10px 10px 0;
    &:hover {
        background: hsl(60, 6%, 19%);
        color: white;
    }
`;

const SavedColourItem = ({ selected, savedColourObject }) => {
    const { setSelectedColour } = useContext(StoreContext);

    const colourCodeCSS = colourObjectToCSS(savedColourObject);

    const handleSavedColourItemClick = () => {
        setSelectedColour({ ...savedColourObject });
    };

    return (
        <Container
            onClick={() => handleSavedColourItemClick()}
            selected={selected}
            colourCodeCSS={colourCodeCSS}
        >
            {savedColourObject.name !== '' ? savedColourObject.name : colourCodeCSS}
        </Container>
    );
};

export default SavedColourItem;
