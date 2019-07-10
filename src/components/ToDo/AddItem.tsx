import React from 'react';

import { ToDoStyledComponents } from '../../AppStyles';
import { ContextConsumer } from './Context';

interface IProps {
    show: boolean;
    toDoTitle: string;
}

const AddItem: React.FC<IProps> = ({show, toDoTitle}) => {
    if (!show) {
        return null;
    }
   
    return (
        <ContextConsumer>
            {appContext => appContext && (
                <ToDoStyledComponents.AddItem>
                    <p>Add Item:</p>
                    <input
                        type="text"
                        value={toDoTitle}
                        onChange={(event) => appContext.eventFunc(event)}
                        onKeyPress={appContext.addToDo}
                    />
                </ToDoStyledComponents.AddItem>
            )}
        </ContextConsumer>
    );
};

export default AddItem;
