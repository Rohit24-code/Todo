import React, { useState } from 'react'
import styles from './Todo.module.css';
import TodoList from './TodoList';


const Todo = () => {
    let [newTask, setNewTask] = useState("");
    const [task, setTask] = useState([])

    const onDelete=(id)=>{
            let newtask = task.filter((elem) => elem.id !== id)
            setTask(newtask)
    }


    return (
        <div>
            Todo
            <input placeholder='Write Something' style={{margin:"20px"}} value={newTask} onChange={(e) => setNewTask(e.target.value) //e is event,target is inside that event and then its value
            } />

            <button style={{color:"white", backgroundColor:"black",borderRadius:"8px"}} onClick={() => {
                setTask([...task, { id: Date.now(), value: newTask }]);//this is similar to add new values to the old present in it.
                setNewTask("");               //this is to empty the input. It is similar to empty newTask.
            }}>Add</button>
    
            <div className={styles.todoList}>
                {task.map((elem) => (
                    <TodoList  key={elem.id} elem={elem}  onDelete={onDelete} />
                ))}
            </div>
        </div>
    )
}

export default Todo
