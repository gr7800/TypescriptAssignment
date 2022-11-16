import React, { memo, useEffect, useState } from 'react'

const Timer = () => {
    // console.log("TImer Rerender")
    const [counter,setCounter] = useState<number>(0)
    useEffect(()=>{
        let id = setInterval(() => {
            setCounter((pre)=>pre+1)
        }, 1000);
        return ()=>clearInterval(id);
    },[])
  return (
    <div>
      <h2>Counter: {counter}</h2>
    </div>
  )
}

export default Timer

export const MemoisedTimer = memo(Timer)