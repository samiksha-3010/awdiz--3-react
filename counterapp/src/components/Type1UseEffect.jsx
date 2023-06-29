 import  {useEffect, useState} from "react";
 function Type1UseEffect(){
    const [ counter, setCounter] = useState(0);
    const[ samiksha, setSamiksha] = useState(87666);

    useEffect(() => {
        console.log("Inside  UseEffect")
    });

    function  addCounter() {
        setCounter((preValue) => preValue + 1)
}
function  addCounter() {
    setCounter((preValue) => preValue + 1)
}
// useEffect(() =>{

// })

    return(
        <div>
            <h1>Type1UseEffect</h1>
            <h1>counter:{counter}</h1>
            <button onClick={addCounter}>Add counter</button>
            <h1>samiksha:{samiksha}</h1>
            <button onClick={addCounter}>Add samiksha</button>
        </div>

    )
 }
 export default Type1UseEffect;

