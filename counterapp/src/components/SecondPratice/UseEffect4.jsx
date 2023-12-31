import React, { useEffect, useState } from "react";

const UseEffect4 = () => {
  const [Counter, SetCounter] = useState(0);
  const [Counter2, SetCounter2] = useState(10);

  function Increment() {
    SetCounter(Counter + 1);
  }

  function Decrement() {
    SetCounter2(Counter2 - 2);
  }
  useEffect(() => {
    alert("Heelo UseEffect 4  ");
  }, [Counter, Counter2]);

  return (
    <div>
      <p style={{ color: "red" }}>UseEffect4</p>
      <br />
      <h2>Counter:{Counter}</h2>
      <br />
      <button onClick={Increment}>+Increment</button>
      <br />
      <h2>Counter2:{Counter2}</h2>
      <button onClick={Decrement}>-Decrement</button>
      <br />
    </div>
  );
};

export default UseEffect4;
