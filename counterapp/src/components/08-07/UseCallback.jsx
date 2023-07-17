import React, { useCallback, useState } from 'react'  
import Todos from './Todos';


const UseCallback =() => {

    const[ todos, setTodos] = useState(["eat", "lunch"]);
    const [counter, setCounter] = useState(0);

    const addTodo = useCallback(() => {
        setTodos([...todos, "come in"])
    }, [todos])
    
  return (
    <div>
        <Todos todos= {todos} addTodo ={addTodo }/>
        <h1>counter:{counter} </h1>
        <button onClick={() => setCounter((prevState) => prevState + 1)}>ADD</button>
    </div>
  )
}

export default UseCallback;