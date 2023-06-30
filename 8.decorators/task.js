//Задача № 1
function cachingDecoratorNew(func) {
  let cache = {};
  return (...args) => {
    const hash = md5(args);
    if(hash in cache) {
      return 'Из кэша: ' + cache[hash];
    }
    const result = func(...args);
    if(Object.keys(cache).length > 4) {
      cache[hash] = result;
      let propName = Object.keys(cache)[0];
      delete cache[propName];
      return 'Вычисляем: ' + result;
    }
    cache[hash] = result;
    return 'Вычисляем: ' + result;
  }
}

//Задача № 2

function debounceDecoratorNew(func, delay) {

  let setTimeoutId = null;
  function wrapperFunc(...args) {
    if(!setTimeoutId) {
      func(...args);
      wrapperFunc.count++;
    }

    wrapperFunc.allCount++;

    clearTimeout(setTimeoutId);
    setTimeoutId = setTimeout(() => {
      func(...args);
      wrapperFunc.count++;
    }, delay)
  }

  wrapperFunc.count = 0;
  wrapperFunc.allCount = 0;
  
  return wrapperFunc;
}

/*
function sumSum1() {
  console.log("тук тук");
}

abc3 = debounceDecoratorNew(sumSum1, 2000);

abc3();
abc3();
abc3();
abc3();
abc3();
console.log(abc3.allCount);
console.log(abc3.count);
*/