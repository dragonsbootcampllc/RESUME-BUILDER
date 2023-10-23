// Ahmed ============
let input = document.querySelectorAll(".wrapper .input");
let del = document.querySelector(".delete");
let save = document.querySelector(".save")
let edit = document.querySelector(".edit")



del.addEventListener("click", () => {
  for (let i = 0; i < input.length; i++) {
    input[i].value = " ";
  }

});

save.addEventListener("click", () => {
  for (let i = 0; i < input.length; i++) {
    input[i].setAttribute("disabled", "");
    input[i].style.backgroundColor = "gray";
    input[i].style.opacity = .2;
  }
});

edit.addEventListener("click", () => {
  for (let i = 0; i < input.length; i++) {
    input[i].style.backgroundColor = "transparent";
    input[i].style.opacity = 1;
    input[i].removeAttribute("disabled");
  }
  input[0].focus();
});
// input.forEach((ele ,index) => {
// window.localStorage.setItem("input[`${index}`]",ele.innerHTML);
// console.log(localStorage.getItem("input[`${i}`]"))
// })
input.forEach((ele, index) => {
  window.localStorage.setItem(`input[${index}]`, ele.value);
  console.log(window.localStorage.getItem("input[0]"));
});
// export default Edu;
