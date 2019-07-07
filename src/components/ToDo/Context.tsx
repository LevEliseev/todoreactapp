import React from 'react';

type ContextProps = {
    removeToDo: (id: number) => void;
    toggleToDo: (id: number) => void;
};

const Context = React.createContext<ContextProps | null>(null);

export const ContextProvider = Context.Provider;
export const ContextConsumer = Context.Consumer;
