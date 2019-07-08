import React from 'react';

import { AppStyledComponents } from './AppStyles';
import HeaderComponent from './components/Header/HeaderComponent';
import MainComponent from './components/Main/MainComponent';
import FooterComponent from './components/Footer/FooterComponent';

const App: React.FC = () => {
    return (
        <AppStyledComponents.App>
            <AppStyledComponents.GlobalStyle />
            <HeaderComponent />
            <MainComponent />
            <FooterComponent />
        </AppStyledComponents.App>
    );
};

export default App;
