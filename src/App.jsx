import AppName from './components/AddName.jsx'
import AddTodo from './components/AddTodo.jsx'
import TodoItems from './components/TodoItems.jsx'
import WelcomeMessage from './components/WelcomeMessage.jsx'
import TodoItemsContextProvider from './store/todo-items-store.jsx'

function App() {
  return (
    <>
      <TodoItemsContextProvider>
        <div className="BigContainer bg-red-800 text-white min-h-screen p-9">
          <center className="todo-container" >
            <AppName />
            <AddTodo />
            <WelcomeMessage />
            <TodoItems />
          </center>
        </div>
      </TodoItemsContextProvider>
    </>
  )
}
export default App