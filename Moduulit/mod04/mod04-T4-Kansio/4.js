'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const ul = document.querySelector("#target");
for (let i = 0; i < 3; i++) {
  console.log(students[i].name)
  let option = document.createElement("option")
  option.innerHTML = `<option value="${students[i].id}">${students[i].name}</option>`
  ul.appendChild(option)
  console.log(option)
}
