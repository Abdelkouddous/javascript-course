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
const toDoList = [];
let counter = 0;
var date = Date();

//function to add the element
function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  toDoList.push(name);
  counter += 1;
  console.log(name + " $" + toDoList);
  document.querySelector(".paragraph-output").innerHTML +=
    "<input type = 'checkbox'/> " +
    " " +
    counter +
    " " +
    name +
    "<br>" +
    date +
    "<br>";
  // localStorage.setItem(".js-name-input", name);
}
