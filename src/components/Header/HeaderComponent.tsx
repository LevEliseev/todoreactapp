import React from 'react';

import { HeaderStyledComponents } from '../../AppStyles';
import logo from '../../source/images/header_images/logo.svg';

const HeaderComponent: React.FC = () => {
    return (
        <HeaderStyledComponents.Header>
            <HeaderStyledComponents.Logo>
                <HeaderStyledComponents.LogoImage>
                    <a href="/"><img src={logo} alt="logo" /></a>
                </HeaderStyledComponents.LogoImage>
                <HeaderStyledComponents.LogoText>
                    <a href="/"><h1>To-Do List</h1></a>
                </HeaderStyledComponents.LogoText>
            </HeaderStyledComponents.Logo>
            <HeaderStyledComponents.ButtonsNav>
                <HeaderStyledComponents.NavButton>Log in</HeaderStyledComponents.NavButton>
                <HeaderStyledComponents.NavButton>Sign up</HeaderStyledComponents.NavButton>
            </HeaderStyledComponents.ButtonsNav>
        </HeaderStyledComponents.Header>
    );
};

export default HeaderComponent;
