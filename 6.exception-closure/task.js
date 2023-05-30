function parseCount(avg) {
	let mean = Number.parseFloat(avg);
	if (Number.isNaN(mean)) {
		throw new Error("Невалидное значение");
	}
	return mean;
}
     try {
     console.log(parseCount());
   } catch (error) {
     console.log(error.message);
}


function validateCount(average){
    try {
        console.log(parseCount(average));
    } catch(error){
      console.log("ОШИБКА: Введено не валидное значение!!!")  
    }
    
}

  validateCount("uihj")


class Triangle{
    constructor(leg_1,leg_2,hypotenuse) {
        this.leg_1 = leg_1;
        this.leg_2 = leg_2;
        this.hypotenuse = hypotenuse;
        this.perimeter = leg_1 + leg_2 + hypotenuse;
        this.half = this.perimeter * 0.5;
        this.area = Math.sqrt(
            this.half * 
            (this.half - leg_1) * 
            (this.half - leg_2) * 
            (this.half - hypotenuse)).toFixed(3);
    
    if (
        leg_1 + leg_2 < hypotenuse || 
        leg_1 + hypotenuse < leg_2 || 
        leg_2 + hypotenuse < leg_1
    ) {
        throw new Error("Треугольник с такими сторонами           не сущетсвует")
    }
    }
      
    get perimeter() {
        return this._perimeter;    
    }
    get area() {
        return this._area;
    }
}



function getTriangle(leg_1, leg_2, hypotenuse){
    try {
        let triangle = new Triangle(
            leg_1, leg_2, hypotenuse);
        let perimeter = triangle.perimeter;
        let area = triangle.area;
        
        console.log("Периметр треугольника: ", perimeter);
        console.log("Площадь треугольника: ", area);
    } catch (error) {
        console.log("ОШИБКА ОБРАБОТКИ ДАННЫХ");
    }
}

getTriangle(4,4,4);
