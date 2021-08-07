import React from 'react';
import { SolidButton } from './custom-button.styles'

const CustomButton = ({ title, type, color, background }) => {

    const renderHelper = () => {
        switch (type) {
            case 'solid':
                return (
                    <SolidButton
                        color={color}
                        background={background}
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