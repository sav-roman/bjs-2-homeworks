"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = b ** 2 - 4 * a * c;

  if (discr < 0) {
    return arr;
  }

  if (discr === 0) {
    arr[0] = -b/(2*a);
    return arr;
  }

  if (discr > 0) {
    arr[0] = (-b + Math.sqrt(discr) )/(2*a);
    arr[1] = (-b - Math.sqrt(discr) )/(2*a);
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = percent/1200;
  let monthPaymant = (amount - contribution) * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)));
  let payment = +((monthPaymant*countMonths).toFixed(2));
  return payment;
}