import { useState } from "react";
import Liststyletext from "./Liststyletext";
import { document } from "postcss";

function EmploymentHistory() {
  const [convertDot, setDot] = useState('+');
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const [p, setfo] = useState(`h-0`);
  function pointer() {
    if (convertDot == "+") {
      setfo(`h-full`);
      return setDot("-");

    }
    else {
      setfo(`h-0`);
      return setDot("+");
    }

  }

  function changeV(i) {
    if (i == 0) {
      document.querySelector(".title_jop").value = this.value;
    }
    else if (i == 1) {
      document.querySelector(".coumpanies").value = this.value;
    }
    else if (i == 2) {
      document.querySelector(".start").value = this.value;
    }
    else if (i == 3) {
      document.querySelector(".end").value = this.value;
    }
    else if (i == 4) {
      document.querySelector(".city").value = this.value;
    }
    else if (i == 5) {
      document.querySelector(".textareaa").value = this.value;
    }
  }

  const list = [
    { typeinput: "text", title: "jop title", placeholdername: "jop" },
    { typeinput: "text", title: "companies", placeholdername: "componey" },
    { typeinput: "date", title: "date1", placeholdername: "date1" },
    { typeinput: "date", title: "date2", placeholdername: "date2" },
    { typeinput: "text", title: "city your live", placeholdername: "city" }
  ]
  return (
    <>
      <div className="container_history  border-b-[#eee] border-b-2 p-6 capitalize">
        <div className="flex justify-between items-center">
          <h3 onClick={pointer} className="font-black cursor-pointer text-[1.2rem] max-sm:text-[1rem]">employment history</h3>
          <div onClick={pointer} className="dot w-12 text-center self-start font-black text-[1.3rem] max-sm:text-[1rem] cursor-pointer">
            {convertDot}
          </div>
        </div>
        <form className={`container_input ${p}  overflow-hidden `}>
          {
            list.map((item, index) => {
              return (
                <div key={index} className="container_name my-[1rem]">
                  <p className="font-black text-[1rem] my-[1rem]">{item.title}</p>
                  <input onKeyDown={() => changeV(index)} type={item.typeinput} name={item.title} placeholder={item.placeholdername} className="w-full p-2 text-[0.9rem] font-black placeholder:text-[#00000070] placeholder:font-black placeholder:capitalize border border-[#eee] rounded-md " />
                </div>
              )
            })
          }
          <div className="containstyle border border-[#eee] rounded-md">
            <Liststyletext />
            <div className="textarea">
              <textarea value={text}
                onChange={handleChange}
                className="w-full  p-1" ></textarea>
            </div>
          </div>

        </form>
      </div>
      <h1 className="title_jop text-[red] text-center text-[2rem]"></h1>
      <p className="coumpanies text-[red] text-center text-[2rem]"></p>
      <p className="start text-[red] text-center text-[2rem]"></p>
      <p className="end text-[red] text-center text-[2rem]"></p>
      <p className="city text-[red] text-center text-[2rem]"></p>
      <p className="textareaa text-[red] text-center text-[2rem]"></p>

    </>
  )
}
export default EmploymentHistory;