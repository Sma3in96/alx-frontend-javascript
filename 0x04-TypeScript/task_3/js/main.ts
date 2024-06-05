/// <reference path="crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from './crud.js';

const row : RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
}

const rowID : RowID = CRUD.insertRow(row);

console.log(rowID);


const updatedRow : RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23,
}

console.log(CRUD.updateRow(rowID, updatedRow));

CRUD.deleteRow(rowID);
