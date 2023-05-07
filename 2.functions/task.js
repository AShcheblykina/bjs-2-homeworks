function getArrayParams(...arr) {
	let min, max, avg, tal;
	let sum = 0;

	min = Infinity;
	max = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) min = arr[i];
		else if (arr[i] > max) max = arr[i];
		sum += arr[i];
	}
	avg = +(sum / arr.length).toFixed(2)
	tal = parseFloat(avg)
	return {
		min: min,
		max: max,
		avg: avg
	};
}
console.log(getArrayParams(-99, 99, 10));

function summElementsWorker(...arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	console.log(sum);
}
summElementsWorker(6, 10);
}

function differenceMaxMinWorker(...arr) {
	let avg;

	min = Infinity;
	max = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) min = arr[i];
		if (arr[i] > max) max = arr[i];
		avg = max - min;
	}
	console.log(avg);
}
differenceMaxMinWorker(90, 50);

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let average;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0)
			sumEvenElement += arr[i];
		if (arr[i] % 2 == 0)
			sumOddElement += arr[i];
		average = sumOddElement - sumEvenElement;
	}
	console.log(average);
}
differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17);

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	let average;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0)
			sumEvenElement += arr[i];
		countEvenElement++;
		average = +(sumEvenElement / countEvenElement).toFixed(2);
	}
	console.log(average);
}
averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9);

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return mawWorkerResult;
}
