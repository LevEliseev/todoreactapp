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
    const time = new Date();
    
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel orci ut tellus imperdiet volutpat et at ligula. Morbi faucibus sem at malesuada tincidunt. Sed eget dui vitae tortor aliquam volutpat. Vivamus elementum scelerisque tortor sit amet molestie. Mauris non fermentum est. Cras sem augue, tristique nec libero non, ultricies auctor justo. Vestibulum vel ipsum consequat nulla commodo sollicitudin ac eget justo. Vestibulum facilisis dapibus libero. Nunc accumsan purus porttitor vulputate blandit. Nullam euismod dictum ullamcorper.</p>
                    </ToDoStyledComponents.ItemText>
                    <ToDoStyledComponents.ItemDate>
                        <span>{time.toLocaleDateString()}</span>
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
