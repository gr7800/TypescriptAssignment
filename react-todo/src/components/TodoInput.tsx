import React, { ChangeEvent, FormEvent, useState } from 'react'

type TodoInputProps={
    onAdd:Function
}
const TodoInput = (props:TodoInputProps) => {
    const {onAdd}=props;
    const [value, setValue] = useState<string>("");
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value);
    }
    const handleSubmitEvent = (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        if(value.length>0){
            onAdd(value);
            setValue("");
        }
    }
  return (
    <form onSubmit={handleSubmitEvent}>
        <input type="text" value={value} onChange={handleOnChange} placeholder="Enter Content for Todo" />
        <button type='submit' onClick={()=>{}}>Add</button>
    </form>
  )
}

export default TodoInput
