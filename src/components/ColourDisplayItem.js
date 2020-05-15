import React from 'react';
import styled from 'styled-components';

const ColourSquare = styled.div`
    background: green;
    border: black 2px solid;
    width: ${(props) => props.size || '2rem'};
    height: ${(props) => props.size || '2rem'};
`;

const ColourDisplayItem = ({ size }) => {
    return <ColourSquare size={size} />;
};

export default ColourDisplayItem;