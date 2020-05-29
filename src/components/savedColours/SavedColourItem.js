import React from 'react';
import styled from 'styled-components';

const Container = styled.button.attrs((props) => ({
    style: {
        background: props.selected ? 'hsl(60, 6%, 19%)' : 'white',
        color: props.selected ? 'white' : 'hsl(60, 6%, 19%)',
    },
}))`
    border: 3px solid hsl(60, 6%, 19%);
    padding: 0.25rem;
    cursor: pointer;
    box-shadow: -3px 3px 0 hsl(60, 6%, 19%);
    margin: 0 10px 10px 0;
`;

const SavedColourItem = ({ name, selected }) => {
    return <Container selected={selected}>{name}</Container>;
};

export default SavedColourItem;
