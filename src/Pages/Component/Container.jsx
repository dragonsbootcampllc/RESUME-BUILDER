import { useRef } from 'react'
import Draggable from 'react-draggable';
import CVTemplate from './CVTemplate';

function Container(props) {
  const containerRef = useRef(null);

  return (
    <>
      <section className="bg-primary-900/60 backdrop-blur-sm w-[calc(100%-320px)] h-full overflow-hidden overflow-y-scroll no-scroll" >
        <Draggable ref={containerRef} >
          <div>
            <div style={{ transform: `scale(${props.scale})` }} ref={props.targetRef}>
              <CVTemplate/>
            </div>
          </div>
        </Draggable>
      </section>
    </>
  )
}


export default Container;