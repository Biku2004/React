import { useState } from 'react';
import './App.css'

function App() {

  // 3. We will use useState hook to change the value in the UI
  // use state returns an array with two values


  /* 4. We get 2 things from useState and that is in the form of array
    The First value is the value that we want to change and the second value is 
    the function that we will use to change the value.

  */

    let [counter,setCounter] = useState(15);


  // let counter = 5;

  const addValue = () => {
    console.log("Value added",counter);
    // counter = counter + 1; // 5. When I write this and pass the value to setCounter then the value is showing error of constant
    // setCounter(counter); // But when i directly use counter + 1 then the value is being updated in the UI and not showing any error of constant
  
    if(counter <20){
      setCounter(counter + 1);
    }
  
  }

  const removeValue = ()=>{

    if(counter>0){
      setCounter(counter - 1);
    }

  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button> 
      {/* 1. Here the addValue is not written line addValue() with bracket but rather normally
        beucase we are not calling the function here but rather passing the reference of the function
        because we want to call this function when the button is clicked. */}

        {/* 2. What happening now is that even when we are clicking the addValue button the value is not being
        chnaged in the UI but it is changing which we can see in the console log.
        
        Why becuase the value changing in the ui is controlled by react and it provides us with Hocks and tells
        us that if we want to change the value in the UI then we have to use the hooks provided by react.
        */}
      

      <br />
      <br />
      <p>footer : {counter}</p>
      <button onClick={removeValue}>Remove Value {counter}</button>
      {/* 6. We will add remove Value */}

    </>
  )
}

export default App
