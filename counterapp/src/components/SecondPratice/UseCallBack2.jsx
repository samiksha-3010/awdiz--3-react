// import React, { useCallback, useState } from 'react'
// import TodoSecond from './TodoSecond'

// const UseCallBack2 = () => {
//       const [counter,setCounter] = useState(0)
//       const [todos, setTodos] = useState([]);

//       function AddTodo() {
//             setTodos((todo) => [...todo, "New Todo"])
//         }
//   return (
//     <div>
//       <div>
//             <h2>Counter:{counter}</h2>
//             <button onClick={()=>setCounter((c)=>c+1)}>+</button>
//       </div>
//       <TodoSecond Todos={todos} AddTodo={AddTodo}/>
//     </div>
//   )
// }
// export default UseCallBack2


import React, { useCallback, useState } from 'react'
import TodoSecond from './TodoSecond';


const  UseCallBack2 = () => {
    const [counter, setCounter] = useState(0);
    const [todos, setTodos] = useState([]);

    function AddTodo() {
        setTodos((todo) => [...todo, "New todo"])
    }

    // const AddTodo = useCallback(() => {
    //     setTodos((todo) => [...todo, "New todo"])
    // }, [todos])

    return (
        <div>
            <div>
                <h1>Counter : {counter}</h1>
                <button onClick={() => setCounter((c) => c + 1)}>+</button>
            </div>
            <TodoSecond  todos={todos} AddTodo={AddTodo} />
        </div>
    )
}

export default UseCallBack2