function parseCount(value) {
  let parsedValue = Number.parseFloat(value);
  if (Number.isNaN(parsedValue)) {
    throw new Error("Невалидное значение");
  }
  return parsedValue;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}


class Triangle {
  constructor(leg_1, leg_2, hypotenuse) {
    this._leg_1 = leg_1;
    this._leg_2 = leg_2;
    this._hypotenuse = hypotenuse;
    this._perimeter = leg_1 + leg_2 + hypotenuse;
    this._half = this._perimeter * 0.5;
    this._area = Number(Math.sqrt(
      this._half *
      (this._half - leg_1) *
      (this._half - leg_2) *
      (this._half - hypotenuse)
    ).toFixed(3));

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
