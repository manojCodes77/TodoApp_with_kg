import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
const WelcomeMessage = () => {
    const {todoItems} = useContext(TodoItemsContext);
    return todoItems.length===0 && <h1 className="text-2xl text-rose-100 font-black">Welcome to our todolist !</h1>;
}
export default WelcomeMessage;