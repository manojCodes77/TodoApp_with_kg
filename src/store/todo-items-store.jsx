import { createContext } from "react";

export const TodoItemsContext=createContext(
    {
        todoItems:[],
        handleNewItem:()=>{},
        handleDeleteItem:()=>{}
    }
);