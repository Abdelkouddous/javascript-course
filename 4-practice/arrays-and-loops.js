// const array = [10, 20, 30, 40];
// document.write(array);
// array.append(4);
// document.write(array);
// //methods :
// // push
// // splice
// // typeof[ x, y]
// // length
// // isArray
// creating empty array that stocks the todoelement
const toDoList = [
  {
    name: "study",
    date: "2024-07-09",
  },
];
let counter = 0;

//function to remove element
function removeTodo() {
  // toDoList.pop();
  // console.log(toDoList);
  for (let i in toDoList) {
    toDoList.splice(i, 1);
    console.log(toDoList);
  }
}

//function to add the element
function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const inputDate = document.querySelector(".js-date-input");
  const name = inputElement.value;
  const date = inputDate.value;
  toDoList.push({
    name,
    date,
  });
  counter += 1;
  console.log(name + " $" + date);
  //we add paragraph output
  //
  document.querySelector(
    ".paragraph-output"
  ).innerHTML += `<input type = 'checkbox'/>   ${counter}  ${name}  ${date} <button type="button" onclick="removeTodo()
      " class = "delete-btn">Delete</button> <br>`;
  // localStorage.setItem(".js-name-input", name);;
}
//array function of exerice 11i
function array(x = [], y) {
  for (let i in x) {
    x[i] = x[i] * y;
  }
  console.log(x);
}
