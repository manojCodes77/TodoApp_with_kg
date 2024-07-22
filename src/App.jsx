import AppName from './components/AddName.jsx'
import AddTodo from './components/AddTodo.jsx'
import TodoItems from './components/TodoItems.jsx'
import WelcomeMessage from './components/WelcomeMessage.jsx'
import { TodoItemsContext } from './store/todo-items-store.jsx'
import { useReducer, useState } from 'react'

const reducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === 'ADD') {
    newTodoItems= [...currTodoItems, action.payload];
  } else if (action.type === 'DELETE') {
    newTodoItems= currTodoItems.filter((item, i) => i !== action.payload);
  }
  return newTodoItems;
}

function App() {
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
    <>
      <TodoItemsContext.Provider value={
        {
          todoItems: todoItems,
          handleNewItem: handleNewItem,
          handleDeleteItem: handleDeleteItem
        }
      }>
        <div className="BigContainer bg-red-800 text-white min-h-screen p-9">
          <center className="todo-container" >
            <AppName />
            <AddTodo />
            <WelcomeMessage />
            <TodoItems />
          </center>
        </div>
      </TodoItemsContext.Provider>
    </>
  )
}
export default App