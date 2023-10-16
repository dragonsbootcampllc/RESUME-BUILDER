import { Fragment } from "react";

function Liststyletext() {



  const p = (e) => {
    if (e.target.classList.contains("bg-[#fff]")) {
      e.target.classList.replace("bg-[#fff]", "bg-[#585757]");
      e.target.classList.replace("text-[#000]", "text-[#fff]");
    } else {
      e.target.classList.replace("bg-[#585757]", "bg-[#fff]");
      e.target.classList.replace("text-[#fff]", "text-[#000]");
    }


  }

  const p1 = (e) => {
    if (e.target.classList.contains("bg-[#fff]")) {
      e.target.classList.replace("bg-[#fff]", "bg-[#585757]");
      e.target.classList.replace("text-[#000]", "text-[#fff]");
    } else {
      e.target.classList.replace("bg-[#585757]", "bg-[#fff]");
      e.target.classList.replace("text-[#fff]", "text-[#000]");
    }
  }
  const styleTextPart1 = [
    { url: <svg className="h-4 w-4 " width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z" />  <path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7" /></svg> },
    { url: <svg className="h-4 w-4 " width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="11" y1="5" x2="17" y2="5" />  <line x1="7" y1="19" x2="13" y2="19" />  <line x1="14" y1="5" x2="10" y2="19" /></svg> },
    { url: <svg className="h-4 w-4 " width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="6" y1="20" x2="18" y2="20" />  <path d="M8 5v6a4 4 0 0 0 8 0v-6" /></svg> }
  ]
  const styleTextPart2 = [
    { url: <svg className="h-4 w-4 " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <line x1="17" y1="10" x2="3" y2="10" />  <line x1="21" y1="6" x2="3" y2="6" />  <line x1="21" y1="14" x2="3" y2="14" />  <line x1="17" y1="18" x2="3" y2="18" /></svg> },
    { url: <svg className="h-4 w-4 " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <line x1="18" y1="10" x2="6" y2="10" />  <line x1="21" y1="6" x2="3" y2="6" />  <line x1="21" y1="14" x2="3" y2="14" />  <line x1="18" y1="18" x2="6" y2="18" /></svg> },
    { url: <svg className="h-4 w-4 " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <line x1="21" y1="10" x2="7" y2="10" />  <line x1="21" y1="6" x2="3" y2="6" />  <line x1="21" y1="14" x2="3" y2="14" />  <line x1="21" y1="18" x2="7" y2="18" /></svg> }
  ]
  return (
    <Fragment>
      <div className="flex justify-start gap-2 items-center p-2 bg-[#eeeeee8a]">
        {styleTextPart1.map((item, i) => {
          return (

            <div onClick={p} key={i} className={`bg-[#fff] text-[#000] p-2 cursor-pointer rounded-sm`}>
              {item.url}
            </div>
          )
        })}
        {styleTextPart2.map((item, i) => {
          return (

            <div onClick={p1} key={i} className={`bg-[#fff] text-[#000] p-2 cursor-pointer rounded-sm`}>
              {item.url}
            </div>
          )
        })}

      </div>
    </Fragment>
  )
}

export default Liststyletext;


