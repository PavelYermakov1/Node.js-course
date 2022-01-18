class House {
  constructor(length, width, floors) {
    this.length = length;
    this.width = width;
    this.floors = floors;
  }

  static sortByFloors(array) {
    return array.sort((a, b) => a.floors - b.floors);
  }
}

class Skyscraper extends House {
  constructor(length, width, floors, offices) {
    super(length, width, floors);
    this.offices = offices;
  }
}

const firstSkyscraper = new House(20, 40, 2);
const secondSkyscraper = new House(80, 60, 5);
const thirdSkyscraper = new House(36, 112, 18);

const array = [firstSkyscraper, secondSkyscraper, thirdSkyscraper];

const sorted = House.sortByFloors(array);
console.log(sorted);
