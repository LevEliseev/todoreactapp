import React from 'react';

import { MainStyledComponents } from '../../AppStyles';
import ToDoComponent from '../ToDo/ToDoComponent';

const MainComponent: React.FC = () => {
    return (
        <MainStyledComponents.MainDiv>
            <ToDoComponent />
        </MainStyledComponents.MainDiv>
    );
};

export default MainComponent;
