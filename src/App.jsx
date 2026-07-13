import { useState, useEffect } from "react";


function App (){
  
 const [x, setX]=useState(0)
 const [y, setY]=useState(0)

 useEffect(()=>{
    const mouseMove=(event)=>{
setX(event.clientX)
setY(event.clientY)
    }

    window.addEventListener("mousemove", mouseMove)
 })


 return (


    <div>
<h1>horizantal: {x}px</h1>
<h1>joog {y}px </h1>

    </div>
 )
}

 
export default App
