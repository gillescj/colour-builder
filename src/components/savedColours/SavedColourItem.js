import React from 'react';
import styled from 'styled-components';

const Container = styled.button.attrs((props) => ({
    style: {
        background: props.selected ? 'hsl(0, 0%, 13%)' : '',
        color: props.selected ? 'white' : '',
        boxShadow: `-3px 3px 0 ${props.colourCodeCSS}`,
    },
}))`
    border: 3px solid hsl(0, 0%, 13%);
    padding: 0.25rem;
    cursor: pointer;
    margin: 0 10px 10px 0;
    &:hover {
        background: hsl(60, 6%, 19%);
        color: white;
    }
`;

const SavedColourItem = ({ name, selected, colourCodeCSS }) => {
    return (
        <Container selected={selected} colourCodeCSS={colourCodeCSS}>
            {name}
        </Container>
    );
};

export default SavedColourItem;
