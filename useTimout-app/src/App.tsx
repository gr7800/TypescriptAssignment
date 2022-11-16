import React from 'react';
import './App.css';
import useTimout from './hooks/useTimout';

function App() {
  const toShow=useTimout(2);
  console.log(toShow);
  if(!toShow){
    return <h1 style={{textAlign:"center"}}>Loading for your data.....</h1>
  }
  return (
    <div className="App">
     <h1 style={{color:"red"}}>Hello Typescipt</h1>
     <img style={{height:"400px", marginTop:"0px"}} src="https://newsd.in/wp-content/uploads/2021/03/Masai-School-1.jpg" alt="img" />
    </div>
  );
}

export default App;
