import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Type4UseEffect() {
    const [counter1, setCounter1] = useState(10);
    const [counter2, setCounter2] = useState(20);
    const [counter3, setCounter3] = useState(30);

    const router = useNavigate();   
    useEffect(() => {
        // it will Excute the code on intainal Render og component
        // it Will Excute the code on any depedency change
        console.log("Inside effect")
        if (counter2 == 22) {
            router('/home')
        }
    }, [counter2, counter3]);
    return (
        <div>
            <h1>Type 4 UseEffect</h1>
            <button onClick={() => router('/login')}>Redirect to login</button>
            <h1>Counter 1 : {counter1}</h1>
            <button onClick={() => setCounter1((num) => num + 1)}>+ 1 for counter 1</button>
            <h1>Counter 2 : {counter2}</h1>
            <button onClick={() => setCounter2((num) => num + 1)}>+ 1 for counter 2</button>
            <h1>Counter 3 : {counter3}</h1>
            <button onClick={() => setCounter3((num) => num + 1)}>+ 1 for counter 3</button>
        </div>
    )
}

export default Type4UseEffect;



