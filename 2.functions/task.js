function getArrayParams(...arr) {
	let min, max, avg;
	let sum = 0;

	min = Infinity;
	max = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) min = arr[i];
		else if (arr[i] > max) max = arr[i];
		sum += arr[i];
	}
  avg = (sum / arr.length).toFixed(2)
	return {
		min: min,
		max: max,
		avg:  Number(avg)
	};
}

function summElementsWorker(...arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}


function differenceMaxMinWorker(...arr) {

	 let min = Infinity;
	 let max = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
      min = arr[i];
    }
		if (arr[i] > max) {
       max = arr[i];
    }
	}
	 return max - min;
}


function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let average;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			sumEvenElement += arr[i];
    }
		if (arr[i] % 2 == 0) {
			sumOddElement += arr[i];
    }
	}
	return sumOddElement - sumEvenElement;
}


function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	let average;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		countEvenElement++;
    }
		average = +(sumEvenElement / countEvenElement).toFixed(2);
	}
	return average;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72
