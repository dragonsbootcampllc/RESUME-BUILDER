// Sondos =========================
import { useRef, useState } from 'react'
import Draggable from 'react-draggable';
import CVTemplate from './CVTemplate';

function Container() {
  const [scale, setScale] = useState(0.7);
  const containerRef = useRef(null);

  //zoom in function
  const handelZoomIn = () => {
    setScale((scale) => scale + 0.1)
  }
  //zoom out function
  const handelZoomOut = () => {
    setScale((scale) => scale - 0.1)
  }

  return (
    <>
      <section className="characters bg-slate-300 w-[calc(100%-320px)] h-screen p-10 overflow-hidden overflow-y-scroll relative" >
        <Draggable ref={containerRef} >
          <div>
            <div style={{ transform: `scale(${scale})` }}>
              <CVTemplate/>
            </div>
          </div>
        </Draggable>
        <div className="fixed z-10 right-10 bottom-10 flex gap-1 flex-col">
          <button className="bg-slate-800 w-8 h-8  rounded-full   text-2xl  flex  justify-center align-center text-white"
            onClick={handelZoomIn}>+</button>
          <button className="bg-slate-800  rounded-full w-8 h-8 flex  justify-center align-center text-2xl text-white" onClick={handelZoomOut}>-</button>
        </div>
      </section>
    </>
  )
}


export default Container;