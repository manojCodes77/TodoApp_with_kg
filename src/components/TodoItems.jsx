import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
import TodoItem from "./TodoItem";
function TodoItems() {
    const {todoItems} = useContext(TodoItemsContext);
    return (
        todoItems.length>0&&
        <div className="items-container w-full bg-black py-4 px-3 rounded-2xl">
            {todoItems.map((item, index) => (
                <TodoItem key={index} id={index} todoName={item.todoName} todoDate={item.todoDate}/>
            ))}
        </div>
    );
}
export default TodoItems;