function HouseBuilder(length, width, floors) {
  this.length = length;
  this.width = width;
  this.floors = floors;
}

HouseBuilder.prototype.calcArea = function () {
  const area = this.length * this.width * this.floors;
  return area;
};

const firstHouse = new HouseBuilder(20, 40, 80);
const secondHouse = new HouseBuilder(30, 60, 90);

firstHouse.totalArea = firstHouse.calcArea();
secondHouse.totalArea = secondHouse.calcArea();
