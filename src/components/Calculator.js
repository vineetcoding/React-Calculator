import React,{ useState } from 'react'
import './Calculator.css'


export default function Calculator() {

    const [result, setResult]=useState("");
    
    function handleClick(e){
        // console.log(e.target.innerText)
        setResult(result.concat(e.target.innerText))
    }

    function clearDisplay(){
        setResult("");
    }
    function Eval(){
        setResult(eval(result));
    }
    function add(){
        console.log()
        
        // setResult(result.value)
    }



  return (
    <div className="calc">
     <input type="text" className='input' placeholder='0' value={result}/>
     <button className='btn' onClick={clearDisplay}>AC</button>
     <button className='btn' onClick={clearDisplay}>C</button>
     <button className='btn' onClick={handleClick}>%</button>
     <button className='btn' onClick={handleClick}>/</button>
     <button className='btn' onClick={handleClick}>7</button>
     <button className='btn' onClick={handleClick}>8</button>
     <button className='btn' onClick={handleClick}>9</button>
     <button className='btn' onClick={handleClick}>*</button>
     <button className='btn' onClick={handleClick}>4</button>
     <button className='btn' onClick={handleClick}>5</button>
     <button className='btn' onClick={handleClick}>6</button>
     <button className='btn' onClick={handleClick}>-</button>
     <button className='btn' onClick={handleClick}>1</button>
     <button className='btn' onClick={handleClick}>2</button>
     <button className='btn' onClick={handleClick}>3</button>
     <button className='btn' onClick={handleClick}>+</button>
     <button className='btn' onClick={clearDisplay}>Clear</button>
     <button className='btn' onClick={handleClick}>0</button>
     <button className='btn' onClick={handleClick}>.</button>
     <button className='btn' onClick={Eval}>=</button>
     {/* <button></button> */}
    </div>
  )
}
