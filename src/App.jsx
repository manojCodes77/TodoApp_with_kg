import AppName from './components/AddName.jsx'
import AddTodo from './components/AddTodo.jsx'
import TodoItems from './components/TodoItems.jsx'
import WelcomeMessage from './components/WelcomeMessage.jsx'
import {TodoItemsContext} from './store/todo-items-store.jsx'
import { useState } from 'react'

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item added ${itemName} due date ${itemDueDate}`);
    setTodoItems((currValue) => {
      const newTodoItems = [...currValue, { todoName: itemName, todoDate: itemDueDate }];
      return newTodoItems;
    });
  }

  const handleDeleteItem = (index) => {
    console.log(`item deleted at index ${index}`);
    let newTodoItems = todoItems.filter((item, i) => i !== index);
    setTodoItems(newTodoItems);
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
            <AddTodo/>
            <WelcomeMessage />
            <TodoItems/>
          </center>
        </div>
      </TodoItemsContext.Provider>
    </>
  )
}
export default App