
import { useState } from "react";

function App (){
const [IsVisible, setIsVisible]=useState(true)

const ToggleButton=()=>{
  setIsVisible(!IsVisible)
}
 


  return(
  <>
       {IsVisible ? "The button is on" : "The button is off"}

    <button onClick={ToggleButton}>{IsVisible? 'turn off': 'turn ON'}</button>
  
    </>
  )
}
export default App
