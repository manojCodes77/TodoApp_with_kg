// import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
function TodoItems({ todos, onDeleteItem }) {
    return (
        <div className="items-container w-full bg-black py-4 px-3 rounded-2xl">
            {todos.map((item, index) => (
                <TodoItem key={index} id={index} todoName={item.todoName} todoDate={item.todoDate} onDeleteItem={onDeleteItem}/>
            ))}
        </div>
    );
}
export default TodoItems;