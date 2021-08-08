import React from 'react';
import { SolidButton } from './custom-button.styles'

const CustomButton = ({ title, type, color, background, handleClick }) => {

    const renderHelper = () => {
        switch (type) {
            case 'solid':
                return (
                    <SolidButton
                        color={color}
                        background={background}
                        onClick={handleClick}
                    >
                        {title}
                    </SolidButton>
                );

            case 'bordered':


        }
    }

    return (
        renderHelper()
    );
}

export default CustomButton;