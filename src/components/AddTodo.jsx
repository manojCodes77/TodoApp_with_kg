// import styles from "./AddTodo.module.css";
import { useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";
function AddTodo({onNewItem}) {
    const[todoName, setTodoName] = useState("");
    const[todoDate, setTodoDate] = useState("");
    const handleNameChange = (e) => {
        setTodoName(e.target.value);
        // console.log(todoName);
    }
    const handleDateChange = (e) => {
        setTodoDate(e.target.value);
        // console.log(todoDate);
    }
    const handleAddButtonClicked=(event)=>{
        event.preventDefault();
        onNewItem(todoName,todoDate);
        setTodoDate("");
        setTodoName("");
    }
    return (
        <form
        onSubmit={handleAddButtonClicked}
        className="grid grid-cols-3 gap-4 mb-4 bg-slate-700 p-2 rounded-lg">
            <div className="text-black flex items-center justify-center">
                <input type="text" className="p-1 rounded-md" placeholder="Add Task" value={todoName} onChange={handleNameChange} required />
            </div>
            <div className="text-black flex items-center justify-center">
                <input type="date" className="p-1 rounded-md" value={todoDate} onChange={handleDateChange} required />
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