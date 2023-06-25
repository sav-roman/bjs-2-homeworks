function parseCount(value) {
    if(typeof value !== 'number') {
      value = Number.parseFloat(value);  
      if (isNaN(value)) {
        throw new Error('Невалидное значение');
      } else {
        return value;
      }
    }
    return value;
}
//console.log(parseCount('j12'));

function validateCount(value) {
    try {
      if (parseCount(value) || parseCount(value) === 0) {
        return parseCount(value);
      }
    } catch(error) {
        return error;
      } 
}
//console.log(validateCount('p34.55'));

class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC; 
    if (this.sideA > this.sideB + this.sideC || this.sideB > this.sideA + this.sideC || this.sideC > this.sideA + this.sideB) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this._perimeter = Number(this.sideA + this.sideB + this.sideC);
    this._area = Number(Math.sqrt((this.perimeter/2)*(this.perimeter/2 - this.sideA)*(this.perimeter/2 - this.sideB)*(this.perimeter/2 - this.sideC)).toFixed(3));
  }
  
  get perimeter() {
    return this._perimeter;
  }

  get area() { 
    return this._area;
  }
}

//let triangle = new Triangle(2, 5, 5);
//triangle.perimeter = 'dsfsdfds';
//console.log(triangle.perimeter);
//console.log(triangle.area);

function getTriangle(sideA, sideB, sideC) {
  try {
    return new Triangle(sideA, sideB, sideC);
  } catch(error) { 
      return {
        get perimeter() {
          return 'Ошибка! Треугольник не существует';
        },

        get area() {
          return 'Ошибка! Треугольник не существует';
        }
      }
   }
}