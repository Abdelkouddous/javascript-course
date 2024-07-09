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

//const { default: BaseComponent } = require("bootstrap/js/dist/base-component");

// const { render } = require("react-dom");

// creating empty array that stocks the todoelement
const toDoList = [
  {
    name: "Default",
    date: "12-12-2012",
  },
];

//function to remove element
function removeTodo() {
  // toDoList.pop();

  for (let i = 0; i < toDoList.length; i++) {}
}

//function to add the element
function addTodo() {
  let counter = 0;
  const getName = document.querySelector(".js-name-input");
  const getDate = document.querySelector(".js-date-input");
  name = getName.value;
  date = getDate.value;
  counter += 1;
  console.log(name + " $" + date);
  toDoList.push({
    name,
    date,
  });
  renderToDoList();
}

function renderToDoList() {
  let todoListHTML = "";
  for (let i = 1; i < toDoList.length; i++) {
    todo = toDoList[i];
    const { name, date } = todo;
    const html = `<input type = 'checkbox'/>   
    ${name} ${date} 
    <button type="button" onclick="    
    toDoList.splice(${i}, 1);
    console.log(toDoList);
    renderToDoList();" class = "delete-btn">Delete
    </button> <br>
   `;
    todoListHTML += html;
  }
  //we add paragraph output
  //
  document.querySelector(".paragraph-output").innerHTML = todoListHTML;
  // localStorage.setItem(".js-name-input", name);
}

//array function of exerice 11i
function array(x = [], y) {
  for (let i in x) {
    x[i] = x[i] * y;
  }
  console.log(x);
}
