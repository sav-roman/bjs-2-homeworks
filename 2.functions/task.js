function getArrayParams(...arr) {
  if (!arr.length) {
    return 0;
  };
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = Number((arr.reduce(function(pValue, cValue) {return pValue + cValue;}) / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if ( !arr.length ) {
    return 0;
  };
  return arr.reduce(function(pValue, cValue) {return pValue + cValue;});
}

function differenceMaxMinWorker(...arr) {
  if ( !arr.length ) {
    return 0;
  };
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if ( !arr.length ) {
    return 0;
  };

  for(i = 0; i < arr.length; i++){
    if ( arr[i] % 2 ){
      sumOddElement += arr[i];
    }
    else {
      sumEvenElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if(!arr.length) {
    return 0;
  };

  for(i = 0; i < arr.length; i++){
    if ( !(arr[i] % 2) ){
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);

  for(let j = 1; j < arrOfArr.length; j++){
    if ( func(...arrOfArr[j]) > maxWorkerResult ){
      maxWorkerResult = func(...arrOfArr[j]);
    }
  }
  
  return  maxWorkerResult;
}
