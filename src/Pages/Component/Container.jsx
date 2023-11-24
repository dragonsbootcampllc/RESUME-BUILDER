import { useRef } from 'react'
import Draggable from 'react-draggable';
import CVTemplate from './CVTemplate';

function Container(props) {
  const containerRef = useRef(null);

  return (
    <>
      <section className="bg-gray-900/40  flex justify-center m-auto  backdrop-blur-lg  w-full h-full overflow-hidden cursor-move no-scroll" >
        <Draggable ref={containerRef}>
            <div ref={props.targetRef}>
              <CVTemplate/>
            </div>
        </Draggable>
      </section>
    </>
  )
}


export default Container;