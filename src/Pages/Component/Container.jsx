import { useRef } from 'react'
import Draggable from 'react-draggable';
import CVTemplate from './CVTemplate';

function Container(props) {
  const containerRef = useRef(null);

  return (
    <>
      <section className="bg-gray-900/40   backdrop-blur-lg w-[calc(100%-320px)] h-full overflow-hidden overflow-auto cursor-move no-scroll" >
        <Draggable ref={containerRef}>
        
            <div style={{ transform: `scale(${props.scale})` }} ref={props.targetRef}>
              <CVTemplate/>
            </div>
        
        </Draggable>
      </section>
    </>
  )
}


export default Container;