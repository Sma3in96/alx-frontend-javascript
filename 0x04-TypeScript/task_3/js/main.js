"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CRUD = require("./crud.js");
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};
var rowID = CRUD.insertRow(row);
console.log(rowID);
var updatedRow = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23,
};
console.log(CRUD.updateRow(rowID, updatedRow));
CRUD.deleteRow(rowID);
