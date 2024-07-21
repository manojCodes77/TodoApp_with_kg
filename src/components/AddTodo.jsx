// import styles from "./AddTodo.module.css";
import {useRef } from 'react';
import { IoIosAddCircle } from "react-icons/io";
function AddTodo({onNewItem}) {
    let todoNameElement = useRef();
    let todoDateElement = useRef();
    const handleAddButtonClicked=(event)=>{
        event.preventDefault();
        let todoName = todoNameElement.current.value;
        let dueDate=todoDateElement.current.value;
        console.log("jai shree ram",todoName,dueDate);
        onNewItem(todoName,dueDate);
        todoNameElement.current.value=null;
        todoDateElement.current.value=null;
        // noOfUpdates.current = 0; // Reset the count after submitting
    }
    return (
        <form
        onSubmit={handleAddButtonClicked}
        className="grid grid-cols-3 gap-4 mb-4 bg-slate-700 p-2 rounded-lg">
            <div className="text-black flex items-center justify-center">
                <input type="text" ref={todoNameElement} className="p-1 rounded-md" placeholder="Add Task" required />
            </div>
            <div className="text-black flex items-center justify-center">
                <input type="date" ref={todoDateElement} className="p-1 rounded-md" required />
            </div>
            <div className="flex items-center justify-center">
                <button
                // onClick={handleAddButtonClicked}
                 className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    <IoIosAddCircle />
                </button>
            </div>
        </form>
    );
}
export default AddTodo;