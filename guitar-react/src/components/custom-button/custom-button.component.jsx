import React from 'react';
import { SolidButton } from './custom-button.styles'

const CustomButton = ({ title, type, color, background, handleClick, customClass }) => {

    const renderHelper = () => {
        switch (type) {
            case 'solid':
                return (
                    <SolidButton
                        className={customClass}
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