import React from 'react';

import { ToDoStyledComponents } from '../../AppStyles';
import { ContextConsumer } from './Context';
import editImg from '../../source/images/main_images/todo_images/edit.svg'
import deleteImg from '../../source/images/main_images/todo_images/delete.svg'

interface IProps {
    title: string;
    id: number;
    completed: boolean;
}

const ToDoItem: React.FC<IProps> = ({title, id, completed}) => {
    return(
        <ContextConsumer>
            {appContext => appContext && (
                <ToDoStyledComponents.Item>
                    <ToDoStyledComponents.ItemStatus>
                        <label htmlFor={id+''}>{completed?'completed':'active'}</label>
                        <input
                            type="checkbox"
                            checked={completed}
                            onChange={() => appContext.toggleToDo(id)}
                            id={id+''}
                        />
                    </ToDoStyledComponents.ItemStatus>
                    <ToDoStyledComponents.ItemText className={completed?'comp':'notcomp'}>
                        &nbsp;
                        <span>{title}</span>
                        &nbsp;
                    </ToDoStyledComponents.ItemText>
                    <ToDoStyledComponents.ItemControls>
                        <button><img src={editImg} alt="editBtn" /></button>
                        <button onClick={() => appContext.removeToDo(id)}><img src={deleteImg} alt="deleteBtn" /></button>
                    </ToDoStyledComponents.ItemControls>
                </ToDoStyledComponents.Item>
            )}
        </ContextConsumer>
    );
};

export default ToDoItem;
