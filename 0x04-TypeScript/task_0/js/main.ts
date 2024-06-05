interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  location: "New York"
}

let student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
  location: "New York"
}

let studentList: Student[] = [student1, student2]

const div = document.createElement('div');
const table = document.createElement("table");
const thead = document.createElement("thead");
const headerRow = document.createElement('tr');
const th1 = document.createElement('th');
th1.textContent = 'First Name';
const th2 = document.createElement('th');
th2.textContent = 'Location';
headerRow.appendChild(th1);
headerRow.appendChild(th2);
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement('tbody');
studentList.forEach(item => {
  const row = document.createElement('tr');
  const cell1 = document.createElement('td');
  cell1.textContent = item.firstName
  row.appendChild(cell1);
  const cell2 = document.createElement('td');
  cell2.textContent = item.location
  row.appendChild(cell2);
  tbody.appendChild(row);
});
table.appendChild(tbody);

div.appendChild(table);

document.body.appendChild(div);
