import { useState } from "react";

function App() {
  const[count, setCount]=useState(0)
  const handleAdd =()=>{
   setCount(count+1)
  }

  const handleSub =()=>{
    setCount(count-1)
  }

  return (
    <div>
    <h1>count:{count}</h1>

    <button onClick={handleAdd}>decrement</button>
    <button onClick={handleSub}   disabled={count === 0}g>increment</button>
    </div> 
  );
}

export default App;