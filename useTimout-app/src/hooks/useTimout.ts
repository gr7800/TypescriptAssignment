import  { useEffect, useState } from 'react'

const useTimout = (delay:number) => {
    const [toShow, setToShow]=useState<any>(false);
    useEffect(()=>{
        let id=setTimeout(()=>{
            setToShow(true);

        },delay*5000)
        return ()=>clearTimeout(id);
    },[])
  return (
    toShow
  );
}

export default useTimout