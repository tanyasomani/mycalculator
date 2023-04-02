
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
 
  const [response, setResponse] = useState("");
  const inputRef = useRef(null);

  useEffect(()=>{
    inputRef.current.focus();
  })
  const clearResponse = ()=>{
    setResponse("");
  }

  const backspace = ()=>{
    if(response === "Error"){
      setResponse("");
     }
     else{
      setResponse(response.slice(0,-1));
     }
  }

  const clickEvent = (e)=>{
       if(response === "Error"){
        setResponse(e.target.name);
       }
       else{
        setResponse(response + e.target.name);
       }
  }

  const result = ()=>{
   try{

    if(response!== "Error"){
      setResponse(eval(response).toString());
    }
   }catch(error){
     setResponse("Error");
   }
  }

  return (
    <div className="App">
    <div className="blur">
     <h1>Calculator </h1>

     <div className="calc-box">
      <input type="text" value={response} ref={inputRef} readOnly/>
      <div className="keyboard">
        <button id="clear" onClick={clearResponse} > Clear </button>
        <button id="backspace" onClick={backspace}> C</button>
        <button name="+" onClick={clickEvent} className="operator">+</button>
        <button name="7"  onClick={clickEvent}>7</button>
        <button name="8"  onClick={clickEvent}>8</button>
        <button name="9"  onClick={clickEvent}>9</button>
        <button name="-"  onClick={clickEvent} className="operator">-</button>
        <button name="4"  onClick={clickEvent}>4</button>
        <button name="5"  onClick={clickEvent}>5</button>
        <button name="6"  onClick={clickEvent}>6</button>
        <button name="*"  onClick={clickEvent} className="operator">&times;</button>
        <button name="1"  onClick={clickEvent}>1</button>
        <button name="2" onClick={clickEvent}>2</button>
        <button name="3" onClick={clickEvent}>3</button>
        <button name="/" onClick={clickEvent} className="operator">/</button>
        <button name="." onClick={clickEvent}>.</button>
        <button name="0" onClick={clickEvent}>0</button>
        <button name="%" onClick={clickEvent}className="operator">%</button>
        
         <button id="result"onClick={result} >=</button>
      </div>
     </div>
     </div>
    </div>
  )
}

export default App
