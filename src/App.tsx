import React from 'react';
import { AppStyledComponents } from './AppStyles';
import HeaderComponent from './components/Header/HeaderComponent';

const App: React.FC = () => {
    return (
        <AppStyledComponents.AppDiv>
            <AppStyledComponents.GlobalStyle />
            <HeaderComponent />
        </AppStyledComponents.AppDiv>
    );
}

export default App;
