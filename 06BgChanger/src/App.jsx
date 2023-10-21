import { useState } from "react";

function App() {
  const [color,setColor]=useState("hotpink");
  return (
      <div className="w-screen h-screen duration-200 flex justify-center" style={{backgroundColor:color}}>



        <div className="fixed flex flex-wrap justify-center align-bottom bottom-8 ">
          <div className="flex justify-center gap-3 px-3 py-2 bg-white rounded-full">
            <button className="bg-red-600 text-white px-4 py-1 rounded-full active:scale-90"
            onClick={()=>setColor("red")}
            >Red
            </button>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-full active:scale-90"
            onClick={()=>setColor("blue")}
            >Blue
            </button>
            <button className="bg-green-600 text-white px-4 py-1 rounded-full active:scale-90"
            onClick={()=>setColor("green")}
            >Green
            </button>
            <button className="bg-cyan-500 text-white px-4 py-1 rounded-full active:scale-90"
            onClick={()=>setColor("cyan")}
            >Cyan
            </button>
            <button className="bg-black text-white px-4 py-1 rounded-full active:scale-90"
            onClick={()=>setColor("black")}
            >Black
            </button>
            <button className="bg-white text-black px-4 py-1 rounded-full active:scale-90"
            onClick={()=>setColor("white")}
            >White
            </button>
          </div>

        </div>
      </div>

  )
} 

export default App
