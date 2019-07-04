import React from 'react';

import { AppStyledComponents } from './AppStyles';
import HeaderComponent from './components/Header/HeaderComponent';
import FooterComponent from './components/Footer/FooterComponent';

const App: React.FC = () => {
    return (
        <AppStyledComponents.AppDiv>
            <AppStyledComponents.GlobalStyle />
            <HeaderComponent />
            <FooterComponent />
        </AppStyledComponents.AppDiv>
    );
}

export default App;
