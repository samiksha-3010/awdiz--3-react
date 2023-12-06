
import { useState } from "react";
function Counter() {

    const [counter, setCounter] = useState(1); // 2 3
    const [state, setState] = useState(100); // 104,108

    const [isLoggedIn, setIsLoggedIn] = useState(false);

function change(){
    setIsLoggedIn((prevValue)=>!prevValue)
}
function Increment(){
    setCounter((prevValue)=>prevValue +1)
}
function Decrement(){
    setCounter((prevValue)=>prevValue -1)
}

function IncrementBy2(){
    setCounter((prevValue)=>prevValue +2)
}
function DecrementBy2(){
    setCounter((prevValue)=> prevValue - 2)
}
function test (){
    setCounter(counter + 1)
}
function hIghDecrement(){
    setState((prevValue) => prevValue +4)

}

function LowerIncrement(){
    setState((prevValue) =>prevValue -4)
}

function Reset(){
    setState(100)
}
    return (
        <div>
            <h1>Counter - {counter}</h1><br />
            <h2>State:{state}</h2>
            <button style={{marginLeft:"10%" , color:"red",width:"8%"}}   onClick={Increment} >+</button><br />
            <button style={{marginLeft:"10%" , color:"red",width:"8%"}}onClick={Decrement}>-</button><br />
            <button style={{marginLeft:"10%" , color:"red",width:"8%"}} onClick={test}>+</button><br />
            <button style={{marginLeft:"10%" , color:"red",width:"8%"}} onClick={IncrementBy2}>+2</button><br />
            <button style={{marginLeft:"10%" , color:"red",width:"8%"}} onClick={DecrementBy2}>-2</button><br/>
            <button style={{marginLeft:"10%" , color:"red",width:"8%"}} onClick={hIghDecrement}>+4</button><br/>
            <button style={{marginLeft:"10%" , color:"red",width:"8%"}} onClick={LowerIncrement}>-4 </button><br/>
            <button style={{marginLeft:"10%" , color:"red",width:"8%"}} onClick={Reset}>Reset</button>
            {isLoggedIn ? <button onClick={change} >Logout</button> : <button  style={{marginLeft:"10%",color:"red",width:"8%"}} onClick={change}>Login</button>}
        </div>
    )
}

export default Counter;