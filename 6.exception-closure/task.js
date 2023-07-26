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
    if (
      (leg_1 + leg_2 < hypotenuse ||
        leg_1 + hypotenuse < leg_2 ||
        leg_2 + hypotenuse < leg_1) ||
      (leg_1 === 0 || leg_2 === 0 || hypotenuse === 0)
    ) {
      throw new Error("Треугольник с такими сторонами не существует");
    }

    this.leg_1 = leg_1;
    this.leg_2 = leg_2;
    this.hypotenuse = hypotenuse;
  }

  get perimeter() {
    return this.leg_1 + this.leg_2 + this.hypotenuse;
  }

  get area() {
    const half = this.perimeter / 2;
    return +(
      Math.sqrt(
        this.half *
        (this.half - leg_1) *
        (this.half - leg_2) *
        (this.half - hypotenuse)
      ).toFixed(3)
    );
  }
}

function getTriangle(leg_1, leg_2, hypotenuse) {
  try {
    return new Triangle(leg_1, leg_2, hypotenuse);
  }
  catch (eror) {
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


getTriangle(4, 4, 5);
