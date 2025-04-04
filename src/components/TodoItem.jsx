import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
function TodoItem1({id,todoName, todoDate}) {
    const{handleDeleteItem}=useContext(TodoItemsContext);
    return (
        <div className="grid grid-cols-3 gap-4 py-2 px-1 bg-slate-600 my-2 rounded-2xl">
            <div className="flex items-center justify-center">
                <p>{todoName}</p>
            </div>
            <div className="flex items-center justify-center">
                <p>{todoDate}</p>
            </div>
            <div className="flex items-center justify-center">
                <button type="button"
                onClick={()=>handleDeleteItem(id)}
                className="py-1 px-1 rounded-md bg-rose-500 hover:bg-rose-700">
                    <MdDelete />
                </button>
            </div>
        </div>
    );
}

export default TodoItem1;