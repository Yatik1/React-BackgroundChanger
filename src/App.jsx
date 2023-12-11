import React, { useState } from 'react'

const App = () => {

  const [color , setColor] = useState("brown")

  

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
         <div className="flex flex-wrap justify-center gap-3 font-bold shadow-lg bg-white px-3 py-2 rounded-3xl">
          
           <button 
             className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
             onClick={()=> setColor("red")}
             style={{backgroundColor : "red", color: "white"}}>
              Red
           </button>

           <button 
             className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
             onClick={() => setColor("green")}
             style={{backgroundColor: "green"}}>
               Green
           </button>

           <button 
             className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
             onClick={() => setColor("blue")}
             style={{backgroundColor: "blue"}}>
               Blue
           </button>

           <button 
             className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
             onClick={() => setColor("orange")}
             style={{backgroundColor: "orange"}}>
               Orange
           </button>

           <button 
             className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
             onClick={() => setColor("black")}
             style={{backgroundColor: "black"}}>
               Black
           </button>

           <button 
             className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
             onClick={() => setColor("gray")}
             style={{backgroundColor: "gray"}}>
               Gray
           </button>

         </div>
      </div>
    </div>
  )
}

export default App
