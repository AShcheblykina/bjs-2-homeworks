"use strict";

function solveEquation(a, b, c) {
	let arr = []
	if (a == 0)
		return false
	let dis = b ** 2 - 4 * a * c;
	console.log('D = ' + dis);
	if (dis < 0)
		return false;
	if (dis == 0)
		arr.push(-b / (2 * a));
	if (dis > 0) {
		arr.push((-b + Math.sqrt(dis)) / (2 * a));
		arr.push((-b - Math.sqrt(dis)) / (2 * a));
	}
	return arr;
};
console.log(solveEquation(''));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let mPercent = (percent / 100) / 12;
	let bodyCredit = amount - contribution;
	let mPayment = bodyCredit * (mPercent + (mPercent / (((1 + mPercent) ** countMonths) - 1)));
	let tAmount = mPayment * countMonths;
	let total = tAmount.toFixed(2);
	return total;
};
console.log(calculateTotalMortgage(''));

