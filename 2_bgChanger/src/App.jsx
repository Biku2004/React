import { useState } from 'react'
import './App.css'

function App() {
  const [color,setcolor] = useState("olive");

  return (
    <>
      <div 
        className="w-full h-screen duration-150"
        style={{backgroundColor: color}}>

          {/* This is positioning in the bottom for color bar */}
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
            
            {/* This is the color Bar */}
            <div className="flex flex-wrap justify-center gap-3 shadows-lg bg-white px-3 py-2 rounded-3xl">

              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}
                onClick={() => setcolor("red")} 
                // we cannot use setcolor("red") directly in onClick, because it will be called immediately
              >
                Red
              </button>

              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Green"}}
                onClick={() => setcolor("green")} >
                Green
              </button>

              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Blue"}}
              onClick={() => setcolor("blue")} >
                Blue
              </button>

              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blueviolet"}}
              onClick={() => setcolor("blueviolet")} >
                blue violet
              </button>

              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "gray"}}
              onClick={() => setcolor("gray")} >
                Gray
              </button>

              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "pink"}}
              onClick={() => setcolor("pink")} >
                pink
              </button>



            </div>

          </div>

      </div>
    </>
  )
}

export default App
