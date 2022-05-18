
import React, { useState } from 'react'
import styles from './Todo.module.css';

const TodoList = ({elem , onDelete}) => {
// console.log(elem)
  const [Iscomplted,setIscompleted] = useState(elem.Iscomplted)

  return (
    <>
    <div  className={styles.todo} key={elem.id}>
    <input type="checkbox" checked={Iscomplted}  onChange={(e)=>{setIscompleted(e.target.checked)}}/>
    <div className={Iscomplted ? styles.striked : ""}>{elem.value}</div>
    <div> <button className={styles.btn} onClick={()=>onDelete(elem.id)} >Delete</button></div>
    </div>
   
      
    </>
  )
}

export default TodoList
