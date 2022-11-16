import React, { useState } from 'react'
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

type Todo = {
    id:number;
    content:string;
    isCompleted:boolean;
}

const TodoApp = () => {
    // What is type of variable we pass to usState;
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (content:string)=>{
        setTodos([
            ...todos,
            {
                id:Date.now(),
                content,
                isCompleted:false,
            }
        ])
    }

    const toggleStatus=(id:number)=>{
        let updatedTodos= todos.map((todo)=>{
            if(todo.id===id){
                todo.isCompleted=!todo.isCompleted; 
            }
            return todo;
        })
        setTodos(updatedTodos)
    }

    const deleteTodo=(id:number)=>{
        let updatedTodos=todos.filter((todo)=>todo.id!==id);
        setTodos(updatedTodos);
    }

  return (
    <div>
      <h2>TodoApp</h2>
      <TodoInput onAdd={addTodo} />
      {
        todos.map((todo,index)=>(
            <TodoItem index={index} key={todo.id} {...todo} toggleStatus={toggleStatus} deleteTodo={deleteTodo} />
        ))
      }
    </div>
  )
}

export default TodoApp