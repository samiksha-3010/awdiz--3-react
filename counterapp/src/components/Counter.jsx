


import {useState} from 'react'

const Counter = () => {
    const  [ Counter, setCounter]= useState(0);
    // console.log(Counter,"Counter")
    function add (){
       setCounter  ((prevalue) => prevalue + 1)
    }
    function subtrack(){
        setCounter ((prevalue) => prevalue - 1)
    }
  return (
    <div>
        <h1>Counter: {Counter}</h1>
        <button onClick={add}>+ add by one samiksha</button>
        <button onClick={subtrack}>- add by 1 tanu </button>
         
       

    </div>
  )
}

export default Counter;


// import  { useState } from 'react'

// const Counter = () => {
//     const [counter, setCounter] = useState(0)
//      console.log(counter, "setCounter")
//      function add (){
//         setCounter((prevalue) => prevalue + 1 )
//         // function subtrack(){
//         //     setCounter((prevalue) => prevalue - 1)
//         // }


//      }
//   return (
//     <div>
//         <h1>Counter:{Counter}</h1>
//         <button onClick={add}> add+1</button>
//         {/* <button onClick={subtrack}>tanu- 1</button> */}
//     </div>
//   )
// }

// export default Counter