import React, { useEffect, useState } from 'react'

const UseTimeout = (delay:number) => {
    const [color,setColor]=useState("");
    useEffect(()=>{
        let id=setTimeout(()=>{
            setColor(Math.random().toString(16).substr(-6));
        },delay*1000);
        console.log('color',color);
        return ()=>clearTimeout(id) //cleanUp
    },[])
  return color;
}

export default UseTimeout