import React, { useState, useEffect } from 'react';

import { ToDoStyledComponents } from '../../AppStyles';
import ToDoList from './ToDoList';
import AddItem from './AddItem';
import { ContextProvider } from './Context';

interface IState {
    id: number;
    title: string;
    text: string;
    completed: boolean;
    date: string;
}

const ToDoComponent: React.FC = () => {
    const [toDoArray, setToDoArray] = useState<IState[]>([]);
    const [toDoTitle, setToDoTitle] = useState('');
    const [toDoText, setToDoText] = useState('');
    const [toDoDate, setToDoDate] = useState('');
    const [show, setShow] = useState(false);

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
                    text: toDoText,
                    completed: false,
                    date: toDoDate

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

    const handleToggleClick = () => {
        setShow(!show);
    }

    const eventFunc = (event: any): any => {
        setToDoTitle(event.target.value);
    }

    const eventFunc2 = (event: any): any => {
        setToDoText(event.target.value);
    }

    const eventFunc3 = (event: any): any => {
        setToDoDate(event.target.value);
    } 

    const handleSubmit = (event: any) => {
        setToDoArray([
            ...toDoArray,
            {
                id: Date.now(),
                title: toDoTitle,
                text: toDoText,
                completed: false,
                date: toDoDate
            }
        ]);
        setToDoTitle('');
        setShow(false);
        event.preventDefault();
    }

    return (
        <ContextProvider value={{
            removeToDo, toggleToDo, addToDo, eventFunc, handleSubmit, eventFunc2, eventFunc3
        }}>
            <ToDoStyledComponents.ToDoApp>
                {/* div.MyLists */}
                <ToDoStyledComponents.AddItemButton onClick={handleToggleClick} />
                <AddItem show={show} toDoTitle={toDoTitle} toDoText={toDoText} toDoDate={toDoDate} />
                <ToDoList toDoArray={toDoArray}/>
            </ToDoStyledComponents.ToDoApp>
        </ContextProvider>
    );
};

export default ToDoComponent;
