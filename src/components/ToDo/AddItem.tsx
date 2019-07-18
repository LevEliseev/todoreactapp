import React from 'react';

import { ToDoStyledComponents } from '../../AppStyles';
import { ContextConsumer } from './Context';

interface IProps {
    show: boolean;
    toDoTitle: string;
    toDoText: string;
    toDoDate: string;
}

const AddItem: React.FC<IProps> = ({show, toDoTitle, toDoText, toDoDate}) => {
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
                            autoComplete="off"
                            value={toDoTitle}
                            onChange={(event) => appContext.eventFunc(event)}
                            onKeyPress={appContext.addToDo}
                        /><br />
                        <input
                            id="addItemText"
                            type="text"
                            autoComplete="off"
                            value={toDoText}
                            onChange={(event) => appContext.eventFunc2(event)}
                            onKeyPress={appContext.addToDo}
                        />
                        <input
                            id="addItemDate"
                            type="date"
                            value = {toDoDate}
                            onChange={(event) => appContext.eventFunc3(event)}
                            onKeyPress={appContext.addToDo}
                        />
                        <input type="submit" name="addItemSubmit" id="addItemSubmitId" value="Отправить" />
                    </form>                    
                </ToDoStyledComponents.AddItem>
            )}
        </ContextConsumer>
    );
};

export default AddItem;
