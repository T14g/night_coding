import React from 'react';
import { SolidButton } from './custom-button.styles'

const CustomButton = ({title, type}) => {

    const renderHelper = () => {
        switch(type){
            case 'solid':
                return <SolidButton>{title}</SolidButton>;
                
            case 'bordered':
            
            
        }
    }

    return (
        renderHelper()
    );
}

export default CustomButton;