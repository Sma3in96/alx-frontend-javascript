var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "New York"
};
var student2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    location: "New York"
};
var studentList = [student1, student2];
var div = document.createElement('div');
var table = document.createElement("table");
var thead = document.createElement("thead");
var headerRow = document.createElement('tr');
var th1 = document.createElement('th');
th1.textContent = 'First Name';
var th2 = document.createElement('th');
th2.textContent = 'Location';
headerRow.appendChild(th1);
headerRow.appendChild(th2);
thead.appendChild(headerRow);
table.appendChild(thead);
var tbody = document.createElement('tbody');
studentList.forEach(function (item) {
    var row = document.createElement('tr');
    var cell1 = document.createElement('td');
    cell1.textContent = item.firstName;
    row.appendChild(cell1);
    var cell2 = document.createElement('td');
    cell2.textContent = item.location;
    row.appendChild(cell2);
    tbody.appendChild(row);
});
table.appendChild(tbody);
div.appendChild(table);
document.body.appendChild(div);
