// import{ useEffect, useState} from"react";

// function Type2UseEffect(){
// const[ counter, setCounter]=useState(0);
// useEffect(() => {

// console.log("Inside useEffect")
// },[])

// function addCounter (){
//     setCounter ((preValue) => preValue+1)
// }
//  useEffect(() => {
//     alert ('welcome!')
//  })
// //  useEffect(() => {  // it'll execute the code only on first render of component, (first time page open, hard refersh)
// //     // console.log("Inside useEffect"  )
// //     alert('Welcome!')


// // useEffect(()=>{

// // },[])
//   function addCounter(){
//     setCounter((preValue)=> preValue + 1)
//    }
//     return(
//         <div>
//             <h1>Type2UseEffect</h1>
//             <h1>{counter}</h1>
//             <button onClick={addCounter}></button>
//         </div>
//     )
// }
// export default Type2UseEffect;


import React, { useEffect, useState } from 'react'

const Type2UseEffect = () => {
    const [Counter, setCounter] = useState (0);
    useEffect (() =>{
        console.log("Inside UseEffect")

    },[])
    function addCounter(){
        setCounter ((preValue) => preValue + 1);
    }
    useEffect(() => {
        alert ("welome!")
    })
       

  return (
    <div>
        <h1>Type2UseEffect</h1>
        <h2>{Counter}</h2>
        <button  onClick={addCounter}>add Counter</button>
    </div>
  )
}

export default Type2UseEffect