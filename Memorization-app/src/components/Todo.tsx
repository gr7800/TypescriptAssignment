import { useCallback, useState } from "react";
import { MemoisedSingleItem } from "./SingleItem";
import styles from './Todo.module.css';

export type listType = {
    id: number;
    title: string;
    body: string;
    verify: boolean;
}

const Todo = () => {
   const [title,setTitle] = useState("");
   const [body,setBody] = useState("");
   const [list,setList] = useState<listType[]>([]);

   const handleToggle = (id: number)=>{
        setList(list.map((l)=> l.id===id? {...l,verify:!l.verify}: l))
   }

   const callback = useCallback(handleToggle,[list])

  return (
      <>
    <div className={styles.container}>
        <input type="text" onChange={(e:any)=>setTitle(e.target.value)} placeholder='enter title'/>
        <textarea onChange={(e:any)=>setBody(e.target.value)} placeholder='descriptions' className='textarea'
   
        />
        <button onClick={()=>{
            const data: listType = {
                id: Math.random(),
                title: title,
                body: body,
                verify: false
            }
            setList([...list,data])
        }}>Submit</button>
    </div>
        <div>{list.map((item)=>{
            return <MemoisedSingleItem key={item.id} {...item} handleToggle={callback}/>
        })}</div>
    </>
  )
}

export default Todo;