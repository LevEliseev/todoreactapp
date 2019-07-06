import React from 'react';

import { HeaderStyledComponents } from '../../AppStyles';
import logo from '../../source/images/header_images/logo.svg';

const HeaderComponent: React.FC = () => {
    return (
        <HeaderStyledComponents.HeaderDiv>
            <HeaderStyledComponents.LogoDiv>
                <HeaderStyledComponents.LogoImageDiv>
                    <a href="/"><img src={logo} alt="logo" /></a>
                </HeaderStyledComponents.LogoImageDiv>
                <HeaderStyledComponents.LogoTextDiv>
                    <a href="/"><h1>To-Do List</h1></a>
                </HeaderStyledComponents.LogoTextDiv>
            </HeaderStyledComponents.LogoDiv>
            <HeaderStyledComponents.HeaderNav>
                <HeaderStyledComponents.HeaderNavButton>Log in</HeaderStyledComponents.HeaderNavButton>
                <HeaderStyledComponents.HeaderNavButton>Sign up</HeaderStyledComponents.HeaderNavButton>
            </HeaderStyledComponents.HeaderNav>
        </HeaderStyledComponents.HeaderDiv>
    );
};

export default HeaderComponent;
