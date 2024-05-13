import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


const intialValue = 0;

function App() {
  const [counter, setCounter] = useState(intialValue);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const resetCounter = () => {
    setCounter(intialValue);
  }


  const handleWhitchNumber = (numer) =>{
    console.log(numer);
    num1 === 0 ? handlleClickNum1(numer) : handlleClickNum2(numer);
  }

  console.log(num1, num2,"num1 > num2");

  const handlleClickNum1 = (num1) => {
    setNum1(num1);
  }

  const handlleClickNum2 = (num2) => {
    setNum2(num2);
  }

  const handleCalculate = () => {
    setCounter(num1 + num2)
  }






  const calculatorElemnt = () => {
    return (
      <React.Fragment>
        <div style={{display:'flex'}}>
        <button onClick={()=> {handleWhitchNumber(1)}}>1</button>
        <button onClick={()=> {handleWhitchNumber(2)}}>2</button>
        <button>3</button>
        <button>+</button>
        </div>
        <div style={{display:'flex'}}>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        </div>
        <div style={{display:'flex'}}>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button onClick={()=>{handleCalculate()}}>=</button>
        </div>
        <button>0</button>
      </React.Fragment>
    )
  }

  const counterElement = () => {
    // STATE JE POPUT NEKE VARIJABLE GDE CEMO MI DA CUVAMO VREDNOST ABD,
    // SETSTATE JE FUNKCIJA KOJA CE DA PROMENI VREDNOST STATE-A
    return (
      <React.Fragment>
      <h1>Our fist counter</h1>
      <h2>{counter}</h2>
      </React.Fragment>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img onClick={()=>console.log("Mervan je trodupli neradnik")} src={logo} classNa￼Enable access ➔
me="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
          <button disabled={counter <= 0} onClick={()=>setCounter(counter-1)}>decrement</button>
          <button onClick={()=>setCounter(counter+1)}>increment</button>
          <button onClick={resetCounter}>reset</button>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a> */}
        {counterElement()}
        {calculatorElemnt()}
      </header>
    </div>
  );
}

export default App;
