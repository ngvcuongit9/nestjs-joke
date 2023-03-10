const minMax = (values) => {
  const valueSort = values.sort();
  let min = 0;
  let max = 0;
  for (let index = 0; index < valueSort.length; index++) {
    if (index < 4) {
      min += valueSort[index];
    }
    if (index > 0) {
      max += valueSort[index];
    }
  }
  return `${min} ${max}`;
};

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([1, 3, 5, 7, 9]));
