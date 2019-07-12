import React from 'react';

import { ToDoStyledComponents } from '../../AppStyles';
import ToDoItem from './ToDoItem';

interface IProps {
    toDoArray: {id: number, title: string, text: string, completed: boolean, date: string}[];
}

const ToDoList: React.FC<IProps> = ({toDoArray}) => {
    return(
        <ToDoStyledComponents.List>
            <ToDoStyledComponents.ListName>
                <h2>My List 1</h2>
            </ToDoStyledComponents.ListName>
            <ToDoStyledComponents.ListItems>
                {toDoArray.map(item => <ToDoItem key={item.id} {...item} />)}
            </ToDoStyledComponents.ListItems>
        </ToDoStyledComponents.List>
    );
};

export default ToDoList;
