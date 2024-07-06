/** 'hello'
alert('hello');

'some' + 'text'
'some' + 'more' + 'text'

typeof 2
typeof 'hello'

'hello' + 3
'$' + 20.95 + 7.99
'$' + (20.95 + 7.99)
'$' + (2095 + 799) / 100

'Items (' + (1 + 1) + '): $' + (2095 + 799) / 100
alert('Items (' + (1 + 1) + '): $' + (2095 + 799) / 100);
//second way to create strings ""

"hello"
"I'm learning JavaScript"
//escape characters
'I\'m learning JavaScript'
alert('some\ntext');
//backtick `
`hello`
`Items (${1 + 1}): $${(2095 + 799) / 100}`
`some
text`*/
let items = document.getElementById('items').innerText;
let shipping = document.getElementById('shipping').innerText;
const tax = 0.1;

function sum(){
  let sum = items+shipping;
  return sum=document.getElementById('total').textContent;
}