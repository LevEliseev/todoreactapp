import React, { useState, useEffect } from 'react';

import { ToDoStyledComponents } from '../../AppStyles';
import ToDoList from './ToDoList';
import { ContextProvider } from './Context';

interface IState {
    id: number;
    title: string;
    completed: boolean;
}

const ToDoComponent: React.FC = () => {
    const [toDoArray, setToDoArray] = useState<IState[]>([]);
    const [toDoTitle, setToDoTitle] = useState('');

    useEffect(() => {
        const raw = localStorage.getItem('toDoArray');
        setToDoArray(JSON.parse(raw || '[]'));
    }, []);

    useEffect(() => {
        localStorage.setItem('toDoArray', JSON.stringify(toDoArray));
    }, [toDoArray]);

    const addToDo = (event: any): void => {
        if(event.key === 'Enter') {
            setToDoArray([
                ...toDoArray,
                {
                    id: Date.now(),
                    title: toDoTitle,
                    completed: false
                }
            ]);
            setToDoTitle('');
        }
    }

    const removeToDo = (id: number): void => {
        setToDoArray(toDoArray.filter(todoitem => {
            return todoitem.id !== id;
        }))
    }

    const toggleToDo = (id: number): void => {
        setToDoArray(toDoArray.map(todoitem => {
            if (todoitem.id === id) {
                todoitem.completed = !todoitem.completed;
            }
            return todoitem;
        }))
    }

    return (
        <ContextProvider value={{
            removeToDo, toggleToDo
        }}>
            <ToDoStyledComponents.ToDoApp>
                <div>
                    <p>Add Item:</p>
                    <input
                        type="text"
                        value={toDoTitle}
                        onChange={event => setToDoTitle(event.target.value)}
                        onKeyPress={addToDo}
                    />
                </div>
                <ToDoList toDoArray={toDoArray} />
            </ToDoStyledComponents.ToDoApp>
        </ContextProvider>
    );
};

export default ToDoComponent;
