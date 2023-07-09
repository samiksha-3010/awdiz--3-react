import React, { useMemo, useState } from 'react'

const UseMemo = () =>{
const [todos, SetTodos] = useState(["Awdiz", "student"])
const [counter, SetCounter] = useState(0)

//  const Number = expensiveCalculation(counter);


 const  Number = useMemo(() =>  {  return  expensiveCalculation(counter) } ,[counter])
 function addTodo(){
    SetTodos([...todos, "New todo"])

 }

 


 
  return (
    <div>
        <h1>Expensive Calculation:{Number} </h1>
        <h1>Count:{counter}</h1>
        <button onClick={() => SetCounter((prevValue) => prevValue+1)}>+</button>
        <h1>Todos:</h1>
        {todos.map((todo, i) => (
                <h3 key={i} >{todo}</h3>
            ))}
             <button onClick={addTodo}>Add new Todo</button>


    </div>
  )
}

const expensiveCalculation = (number) =>{
    console.log("Inside expensive calculation...")

    for (var i = 0; i < 100000000; i++) {
        number = number + 1;
    }
    return number
}

export default UseMemo