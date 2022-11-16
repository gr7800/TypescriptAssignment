import React from 'react';
import './App.css';
import Timer from './hook/Timer';

const formatTime =(timer:number)=>{
  const getSeconds=`0${(timer%60)}`.slice(-2);
  const minutes = `${Math.floor(timer / 60)}`
  const getMinutes = `0${+(minutes )% 60}`.slice(-2)
  const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
  return `${getHours} : ${getMinutes} : ${getSeconds}`
}

function App() {

  return (
    <div className="App">
     <Timer />
     
    </div>
  );
}

export default App;
