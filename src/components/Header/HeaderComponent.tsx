import React from 'react';

import { HeaderStyledComponents } from '../../AppStyles';
import logo from '../../source/images/logo.svg';

const HeaderComponent: React.FC = () => {
    return (
        <HeaderStyledComponents.HeaderDiv>
            <HeaderStyledComponents.LogoDiv>
                <HeaderStyledComponents.LogoImageDiv>
                    <img src={logo} className="App-logo" alt="logo" width="100px"/>
                </HeaderStyledComponents.LogoImageDiv>
                <HeaderStyledComponents.LogoTextDiv>
                    <p>To-Do List</p>
                </HeaderStyledComponents.LogoTextDiv>
            </HeaderStyledComponents.LogoDiv>
        </HeaderStyledComponents.HeaderDiv>
    );
}

export default HeaderComponent;
