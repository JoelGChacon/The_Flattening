const arr = [1, 2, [3, 4, [5, 6, [7], 8], 9], [10]];
document.querySelectorAll('#array').forEach(el => {
  el.innerHTML = JSON.stringify(arr);
});

const flatArrRecursive = arr => {
  let flatArr = [];

  const flattener = arrInner => {
    return arrInner.map(el => {
      if (Array.isArray(el)) {
        flattener(el);
      } else {
        flatArr.push(el);
      }
    });
  };
  flattener(arr);

  return flatArr;
};

const flatRec = flatArrRecursive(arr);
console.log(flatRec);
document.querySelector('#recRes').innerHTML = JSON.stringify(flatRec);
console.log(flatRec);

///////////////////////////////////////////////////////////

const flatArrReduce = arr => {
  return arr.reduce((acc, curVal) => {
    return acc.concat(Array.isArray(curVal) ? flatArrReduce(curVal) : curVal);
  }, []);
};

const flatRed = flatArrReduce(arr);
document.querySelector('#redRes').innerHTML = JSON.stringify(flatRed);
console.log(flatRed);

///////////////////////////////////////////////////////////

document.querySelector('#flatRes').innerHTML = JSON.stringify(
  arr.flat(Infinity)
);
