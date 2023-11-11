import { useState } from "react";


function App() {
  const [color, setColor] = useState(false);

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-12">
        <div className="flex flex-wrap justify-center px-3 py-3 rounded-2xl bg-white shadow-lg gap-3">
          <button className="outline-none px-4 py-2 bg-white rounded-full shadow-xl "
          style={{backgroundColor: "red"}} onClick={()=> setColor("red")}>red</button>
          <button className="outline-none px-4 py-2 bg-white rounded-full shadow-xl "
          style={{backgroundColor: "green"}} onClick={()=> setColor("green")}>green</button>
          <button className="outline-none px-4 py-2 bg-white rounded-full shadow-xl "
          style={{backgroundColor: "blue"}} onClick={()=> setColor("blue")}>blue</button>
          <button className="outline-none px-4 py-2 bg-white rounded-full shadow-xl "
          style={{backgroundColor: "purple"}} onClick={()=> setColor("purple")}>purple</button>
          <button className="outline-none px-4 py-2 bg-white rounded-full shadow-xl "
          style={{backgroundColor: "orange"}} onClick={()=> setColor("orange")}>orange</button>
          <button className="outline-none px-4 py-2 bg-white rounded-full shadow-xl "
          style={{backgroundColor: "brown"}} onClick={()=> setColor("brown")}>brown</button>
          <button className="outline-none px-4 py-2 bg-white rounded-full shadow-xl "
          style={{backgroundColor: "violet"}} onClick={()=> setColor("violet")}>violet</button>
          <button className="outline-none px-4 py-2 bg-white rounded-full shadow-xl "
          style={{backgroundColor: "grey"}} onClick={()=> setColor("grey")}>grey</button>
          <button className="outline-none px-4 py-2 bg-white rounded-full shadow-xl "
          style={{backgroundColor: "pink"}} onClick={()=> setColor("pink")}>pink</button>
        </div>
      </div>

    </div>
  )
}

export default App

