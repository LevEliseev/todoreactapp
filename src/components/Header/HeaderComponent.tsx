import React from 'react';

import { HeaderStyledComponents } from '../../AppStyles';
import logo from '../../source/images/header_images/logo.svg';

const HeaderComponent: React.FC = () => {
    return (
        <HeaderStyledComponents.HeaderDiv>
            <HeaderStyledComponents.LogoDiv>
                <HeaderStyledComponents.LogoImageDiv>
                    <img src={logo} alt="logo" width="100px"/>
                </HeaderStyledComponents.LogoImageDiv>
                <HeaderStyledComponents.LogoTextDiv>
                    <p>To-Do List</p>
                </HeaderStyledComponents.LogoTextDiv>
            </HeaderStyledComponents.LogoDiv>
        </HeaderStyledComponents.HeaderDiv>
    );
}

export default HeaderComponent;
