import React from 'react';
import styled from 'styled-components';

import colourCodeObjectToCSS from '../utils/colourCodeObjectToCSS';

const Container = styled.div``;

const ColourDisplayCode = ({ colourCode }) => {
    const cssColourCode = colourCodeObjectToCSS(colourCode);
    return <Container>{cssColourCode}</Container>;
};

export default ColourDisplayCode;
