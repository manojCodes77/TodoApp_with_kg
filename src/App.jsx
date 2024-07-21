import AppName from './components/AddName.jsx'
import AddTodo from './components/AddTodo.jsx'
import TodoItems from './components/TodoItems.jsx'
import WelcomeMessage from './components/WelcomeMessage.jsx'
import { useState } from 'react'

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item added ${itemName} due date ${itemDueDate}`);
    setTodoItems((currValue)=>{
      const newTodoItems = [...currValue, { todoName: itemName, todoDate: itemDueDate }];
      return newTodoItems;
    });
  }

  const handleDeleteItem = (index) => {
    console.log(`item deleted at index ${index}`);
    let newTodoItems = todoItems.filter((item, i) => i !== index);
    setTodoItems(newTodoItems);
    // console.log(event);
  }

  return (
    <>k
      <div className="BigContainer bg-red-800 text-white min-h-screen p-9">
        <center className="todo-container" >
          <AppName />
          <AddTodo onNewItem={handleNewItem} />
          {todoItems.length === 0 && <WelcomeMessage />}
          {todoItems.length>0 && <TodoItems todos={todoItems}  onDeleteItem={handleDeleteItem}/>}
        </center>
      </div>
    </>
  )
}
export default App