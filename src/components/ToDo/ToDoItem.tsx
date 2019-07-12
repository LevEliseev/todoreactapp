import React from 'react';

import { ToDoStyledComponents } from '../../AppStyles';
import { ContextConsumer } from './Context';
import editImg from '../../source/images/main_images/todo_images/edit.svg'
import deleteImg from '../../source/images/main_images/todo_images/delete.svg'

interface IProps {
    title: string;
    text: string;
    id: number;
    completed: boolean;
    date: string;
}

const ToDoItem: React.FC<IProps> = ({title, id, completed, text, date}) => {
    return(
        <ContextConsumer>
            {appContext => appContext && (
                <ToDoStyledComponents.Item>
                    <ToDoStyledComponents.ItemStatus>
                        <input
                            type="checkbox"
                            checked={completed}
                            onChange={() => appContext.toggleToDo(id)}
                            id={id+''}
                        />
                        <label htmlFor={id+''}>{completed?'done':'active'}</label>
                    </ToDoStyledComponents.ItemStatus>
                    <ToDoStyledComponents.ItemText className={completed?'comp':'notcomp'}>
                        <span>{title}</span>
                        <p>{text}</p>
                    </ToDoStyledComponents.ItemText>
                    <ToDoStyledComponents.ItemDate>
                        <span>{date}</span>
                    </ToDoStyledComponents.ItemDate>
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
