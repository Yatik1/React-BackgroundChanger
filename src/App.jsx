import React, { useState } from 'react'

const App = () => {

  const [color , setColor] = useState("yellow")

  // function changeColor(color) {
  //    setColor(color)
  // }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
           <button 
             className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
             onClick={()=> setColor("red")}>
              Red
           </button>

           <button 
             className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
             onClick={() => setColor("green")}>
               Green
           </button>

         </div>
      </div>
    </div>
  )
}

export default App
