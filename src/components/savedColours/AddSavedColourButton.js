import React, { useContext } from 'react';
import styled from 'styled-components';

import StoreContext from '../StoreContext';
import { ReactComponent as AddSVG } from '../../assets/svgs/add.svg';

const Container = styled.button`
    display: flex;
    align-items: center;
    border: 3px solid hsl(0, 0%, 13%);
    padding: 0.25rem;
    cursor: pointer;
    margin: 0 10px 10px 0;
    box-shadow: -3px 3px 0 hsl(60, 6%, 19%);
    font-weight: 900;
    &:hover {
        background: hsl(60, 6%, 19%);
        color: white;
        svg {
            fill: white;
        }
    }
`;

const AddLogo = styled(AddSVG)`
    width: 1rem;
    height: 1rem;
    margin-right: 0.3rem;
    fill: hsl(60, 6%, 19%);
`;

const AddSavedColourButton = () => {
    const { setSelectedColour, setFocusColourNameInput } = useContext(StoreContext);

    const handleAddSavedColourButtonClick = () => {
        setSelectedColour({
            hue: 240,
            saturation: 50,
            lightness: 50,
            name: '',
        });
        setFocusColourNameInput(true);
    };

    return (
        <Container onClick={() => handleAddSavedColourButtonClick()}>
            <AddLogo /> New Colour
        </Container>
    );
};

export default AddSavedColourButton;
