import React from 'react'

type TodoItemProps ={
    index:number;
    id:number;
    content:string;
    isCompleted:boolean;
    toggleStatus:Function;
    deleteTodo:(id:number)=>void;
}

const TodoItem = ({index,id,content,isCompleted,toggleStatus,deleteTodo}:TodoItemProps) => {
  return (
    <div>
        <div onClick={()=>{toggleStatus(id)}}>
            <span>{index+1} :- {content}</span>
            ---------
            <span>{isCompleted?"Completed":"NotCompleted"}</span>
        </div>
        <button onClick={()=>deleteTodo(id)} >Delete</button>
    </div>
  )
}

export default TodoItem