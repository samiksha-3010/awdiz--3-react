import React, { memo } from 'react'



    const Todos = ({ addTodo, todos }) => {
    console.log("Calling  todos component...")

  

  return (
    <div>
        <h1>
            {todos.map((todo) => (
                <p>{todo}</p>
            ))}
        </h1>
        <button onClick={addTodo}>Add todo</button>


    </div>
  )
            }


export default memo(Todos);