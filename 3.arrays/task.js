function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((item, index) => {
    if (item === arr2[index]) {
        return true;
    }
    else {
        return false;
    }
  });
}

function getUsersNamesInAgeRange(users, gender) {
      
  if (users.length === 0) return 0;

  if ( gender !== "мужской" && gender !== "женский" ) return 0;

  let result = users.filter(value => value.gender === gender).map(value => value.age).reduce((acc, item, index, arr) => {
    acc += item;
    if (index + 1 === arr.length) {
      return (acc / arr.length);
    }
    return acc;
    });

    return result;
}