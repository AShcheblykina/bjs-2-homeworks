function parseCount(avg) {
  let mean = Number.parseFloat(avg);
  if (Number.isNaN(mean)) {
    throw new Error("Невалидное значение");
  }
  return mean;
}

function validateCount() {
  try {
    console.log(parseCount());
  } catch (error) {
    console.log("ОШИБКА: Введено невалидное значение!!!");
  }
}

class Triangle {
  constructor(leg_1, leg_2, hypotenuse) {
    this._leg_1 = leg_1;
    this._leg_2 = leg_2;
    this._hypotenuse = hypotenuse;
    this._perimeter = leg_1 + leg_2 + hypotenuse;
    this._half = this._perimeter * 0.5;
    this._area = Math.sqrt(
      this._half *
      (this._half - leg_1) *
      (this._half - leg_2) *
      (this._half - hypotenuse)
    ).toFixed(3);

    if (
      leg_1 + leg_2 < hypotenuse ||
      leg_1 + hypotenuse < leg_2 ||
      leg_2 + hypotenuse < leg_1
    ) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimeter() {
    return this._perimeter;
  }

  get area() {
    return this._area;
  }
}

function getTriangle(leg_1, leg_2, hypotenuse) {
  try {
    let triangle = new Triangle(leg_1, leg_2, hypotenuse);
    let perimeter = triangle.perimeter;
    let area = triangle.area;

    console.log("Периметр треугольника: ", perimeter);
    console.log("Площадь треугольника: ", area);
  } catch (error) {
    console.log("ОШИБКА ОБРАБОТКИ ДАННЫХ");
  }
}

getTriangle(4, 4, 1);
