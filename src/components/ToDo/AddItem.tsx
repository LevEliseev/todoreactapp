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
                    <form onSubmit={appContext.handleSubmit}>
                        <label htmlFor="addItemInput">Add item: </label><br />
                        <input
                            id="addItemInput"
                            type="text"
                            value={toDoTitle}
                            onChange={(event) => appContext.eventFunc(event)}
                            onKeyPress={appContext.addToDo}
                        /><br />
                        <input type="submit" name="addItemSubmit" id="addItemSubmitId" value="Отправить" />
                    </form>                    
                </ToDoStyledComponents.AddItem>
            )}
        </ContextConsumer>
    );
};

export default AddItem;
