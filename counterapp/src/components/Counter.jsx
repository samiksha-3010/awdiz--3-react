import { useState } from "react";

function Counter (){
    const [ Counter, setCounter] = useState(0);
    console.log (Counter, "Counter")
    function add(){
        setCounter((prevalue) => prevalue + 1)
        
    }
    function subract(){
     setCounter((prevalue) => prevalue -1)
    }

    return( 
<div>
     <h1>Counter:{Counter}</h1>
     <button onClick={add}>+ Add by 1</button>
     <button onClick={subract}>- Add by 1</button>
</div>
 )
}

export default Counter;
