import { useRef, useState } from 'react'
import Draggable from 'react-draggable';

function App() {
  const [scale, setScale] = useState(1);
  const containerRef = useRef(null);

  //zoom in function
  const handelZoomIn = () => {
    setScale((scale) => scale + 0.1)
  }
  //zoom out function
  const handelZoomOut = () => {
    setScale((scale) => scale - 0.1)
  }

  const [position, setPosition] = useState({x: 0, y: 0});

  return (
    <section className="characters bg-slate-300 w-full h-screen p-10 " >
      <Draggable
        ref={containerRef}
      >
        <div className="cvContainerEle duration-[.01s] w-fit h-fit -z-10 overflow-hidden">
          <div className="bg-slate-200 w-[200px] aspect-[9/16] m-auto -z-10" style={{transform: `scale(${scale})`}}>
            <h1>user Name</h1>
            <p>title job</p>
            <p>phone Number</p>
            <p style={{transform: `translate(${position.x}px, ${position.y}px)`}}>{position.x}   |   {position.y}</p>
          </div>
        </div>
      </Draggable> 
      <div className="text-center z-10" >
        <button className="bg-amber-300 px-4 border-r-2 border-solid border-slate-400 text-xl z-10"
          onClick={handelZoomIn}>+</button>
        <button className="bg-amber-300 px-4 text-xl z-10" onClick={handelZoomOut}>-</button>
      </div>
    </section>
  )
}


export default App
