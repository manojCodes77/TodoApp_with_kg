import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext(
    {
        todoItems: [],
        handleNewItem: () => { },
        handleDeleteItem: () => { }
    }
);
const reducer = (currTodoItems, action) => {
    let newTodoItems = currTodoItems;
    if (action.type === 'ADD') {
        newTodoItems = [...currTodoItems, action.payload];
    } else if (action.type === 'DELETE') {
        newTodoItems = currTodoItems.filter((item, i) => i !== action.payload);
    }
    return newTodoItems;
}
const TodoItemsContextProvider = ({ children }) => {

    const [todoItems, dispatch] = useReducer(reducer, []);
    const handleNewItem = (itemName, itemDueDate) => {
        console.log(`new item added ${itemName} due date ${itemDueDate}`);
        dispatch({ type: 'ADD', payload: { todoName: itemName, todoDate: itemDueDate } });
    }

    const handleDeleteItem = (index) => {
        console.log(`item deleted at index ${index}`);
        dispatch({ type: 'DELETE', payload: index });
    }
    return (
        <TodoItemsContext.Provider value={
            {
                todoItems: todoItems,
                handleNewItem: handleNewItem,
                handleDeleteItem: handleDeleteItem
            }
        }>
            {children}
        </TodoItemsContext.Provider>
    );
}

export default TodoItemsContextProvider;