
let getArray = [1,2, null, '', false, 4];
let getArrayNew = getArray;
for (var i = getArray.length - 1; i >= 0; i--) {
    if (typeof getArray[i] !== "number")
    getArray.splice(i,1);
  }
  console.log(getArrayNew);







