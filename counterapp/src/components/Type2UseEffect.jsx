import{ useEffect, useState} from"react";

function Type2UseEffect(){
const[ counter, setCounter]=useState(0);
useEffect(() => {

console.log("Inside useEffect")
},[])
alert ('welcome')


   function addCounter(){
    setCounter((preValue)=> preValue + 1)
   }
    return(
        <div>
            <h1>Type2UseEffect</h1>
            <h1>{}counter</h1>
            <button onClick={addCounter}></button>
        </div>
    )
}
export default Type2UseEffect;