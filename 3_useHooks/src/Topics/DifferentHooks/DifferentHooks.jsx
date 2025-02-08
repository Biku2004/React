// Passward Generator
import { useCallback, useEffect, useRef, useState } from "react"

function DifferentHooks() {

    const [length,setLength] = useState(8);
    const [NumberAllowed,setNumberAllowed] = useState(false);
    const [charAllowed,setCharAllowed] = useState(false);
    const [password,setPassword] = useState("");

    // useRef
    const passwardRef = useRef(null);

    const passwardGenerator = useCallback(()=>{

        let pass = ""; // Generated to be Passward
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // String varaiable is created becuase we are goping to use these to generate the passward

        if(NumberAllowed) str = str + "0123456789"; // If NumberAllowed is true then add the numbers to the string
        if(charAllowed) str = str + "!@#$%^&*()_+"; // If charAllowed is true then add the special characters to the string

        for (let i = 0; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1); // Generate the random number
            
            pass += str.charAt(char);

        }

        setPassword(pass); // Set the passward to the state
        

    },[length,NumberAllowed,charAllowed,setPassword]);

    const copyPasswardToClipBoard = useCallback(()=>{
        passwardRef.current?.select();
        passwardRef.current?.setSelectionRange(0,3);
        window.navigator.clipboard.writeText(password)
    },[password]);

    useEffect( ()=> {passwardGenerator()},[length,NumberAllowed,charAllowed,passwardGenerator]);

    return (
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8
         text-orange-500 bg-gray-800"> 

         <h1 className="text-white text-center my-2">Password Generator</h1>

            <div className="flex shaodw rounded-lg overflow-hidden md-4">
                <input type="text" 
                className="outline-none w-full py-1 px-3"
                value={password} 
                placeholder="password"
                ref={passwardRef}
                readOnly />

                <button 
                onClick={copyPasswardToClipBoard}
                    className="outline-none bg-blue-700 text-white px-3 
                    py-0.5 shrink-0">copy</button>

            </div>

            <div className="flex text-sm gap-x-2">
                <div className="flex items-center gap-x-1">
                    <input type="range" 
                        min={6}
                        max={100}
                        value={length}
                        className="cursor-pointer"
                        onChange={(e)=>{setLength(e.target.value)}}
                    />
                    <label>Length: {length}</label>
                </div>

                <div className="flex items-center gap-x-1"> 
                <input type="checkbox" 
                    defaultChecked={NumberAllowed}
                    id="numberInput"
                    onChange={()=>{
                        setNumberAllowed((prev) => !prev);
                    }}
                    />
                    <label>Numbers</label>
                </div>

                <div className="flex items-center gap-x-1"> 
                <input type="checkbox" 
                    defaultChecked={charAllowed}
                    id="characterInput"
                    onChange={()=>{
                        setCharAllowed((prev) => !prev);
                    }}
                    />
                    <label htmlFor="characterInput">Character</label>
                </div>

            </div>
        </div>
    )
}

export default DifferentHooks