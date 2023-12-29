// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
function Vehicle(driver) {
  this.driver = driver;
  this.speed = 0;
}

Vehicle.prototype.drive = function (kmh) {
  this.speed = kmh;
  return `${this.driver} driving at ${kmh} kilometers per hour`;
};

Vehicle.prototype.stop = function () {
  this.speed = 0;
  return `${this.driver} has stopped`;
};

Object.setPrototypeOf(Train.prototype, Vehicle.prototype);
Object.setPrototypeOf(Truck.prototype, Vehicle.prototype);

function Train(driver, speed) {
  Vehicle.call(this, driver, speed);
  this.type = "passenger"; // 'passenger', 'freight', 'mail'
  // this.speed = 0;
  // this.drive = function (kmh) {
  //   this.speed = kmh;
  //   return `${this.driver} driving at ${kmh} kilometers per hour`;
  // };
  // this.stop = function () {
  //   this.speed = 0;
  //   return `${this.driver} has stopped`;
  // };
}

// console.log(new Train("f").drive(40));
// console.log(new Train());

function Truck(driver, speed) {
  Vehicle.call(this, driver, speed);

  this.cargo = [];
  // this.drive = function (kmh) {
  //   this.speed = kmh;
  //   return `${this.driver} driving at ${kmh} kilometers per hour`;
  // };
  // this.stop = function () {
  //   this.speed = 0;
  //   return `${this.driver} has stopped`;
  // };
  // this.loadCargo = function (cargo) {
  //   return this;
  // };
}

console.log(new Truck("mac"));

Truck.prototype.unloadCargo = function () {
  return this.cargo.pop();
};

Truck.prototype.loadCargo = function (cargo) {
  this.cargo.push(cargo);
  return this.cargo;
};
// экспорт Vehicle, Train, Truc в файл с тестами
module.exports = { Vehicle, Train, Truck };

// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
