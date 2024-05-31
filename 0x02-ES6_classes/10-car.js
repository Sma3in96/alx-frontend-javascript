export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    if (this instanceof Car) {
      return new Car();
    }
    return new Car();
  }
}
