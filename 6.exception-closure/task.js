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
  constructor(leg1, leg2, hypotenuse) {
    if (
      (leg1 + leg2 < hypotenuse ||
        leg1 + hypotenuse < leg2 ||
        leg2 + hypotenuse < leg1) ||
      (leg1 === 0 || leg2 === 0 || hypotenuse === 0)
    ) {
      throw new Error("Треугольник с такими сторонами не существует");
    }

    this.leg1 = leg1;
    this.leg2 = leg2;
    this.hypotenuse = hypotenuse;
  }

  get perimeter() {
    return this.leg1 + this.leg2 + this.hypotenuse;
  }

  get area() {
    const half = this.perimeter / 2;
    return +(
      Math.sqrt(
        half *
        (half - this.leg1) *
        (half - this.leg2) *
        (half - this.hypotenuse)
      ).toFixed(3)
    );
  }
}

function getTriangle(leg_1, leg_2, hypotenuse) {
  try {
    return new Triangle(leg_1, leg_2, hypotenuse);
  }
  catch (error) {
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
