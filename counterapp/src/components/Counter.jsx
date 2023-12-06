


import {useState} from 'react'

const Counter = () => {
    const  [ Counter, setCounter]= useState(0);
    const [state,setState] = useState(2)
    // console.log(Counter,"Counter")
    function add (){
       setCounter  ((prevalue) => prevalue + 1)
    }
    function subtrack(){
        setCounter ((prevalue) => prevalue - 1)
    }

    function  Multiplication (){
      setState((prevalue)=>prevalue * 2)
    }
    function  Divded (){
      setState((prevalue)=>prevalue / 2)
    }
  return (
    <div>
        <h1>Counter: {Counter}</h1>
        <h2>state:{state}</h2>
        <button onClick={add}>+ add by one samiksha</button><br/>
        <button onClick={subtrack}>- add by 1 tanu </button><br/>
        <button onClick={Multiplication}> * Increment  By 2</button><br/>
        <button onClick={Divded}> / Divded By 2</button>
       
         
       

    </div>
  )
}

export default Counter;

