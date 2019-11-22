let CocktailSort = arr => {
  let animation = [];
  var swapped;
  var j = 0;
  do {
    for (var i = j; i < arr.length - (2 + j); i++) {
      let comparison = [i, i + 1, false];
      if (arr[i] > arr[i + 1]) {
        comparison[2] = true;
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
      animation.push(comparison);
    }
    if (!swapped) {
      break;
    }
    swapped = false;
    for (i = arr.length - (2 + j); i >= j; i--) {
      let comparison = [i, i + 1, false];
      if (arr[i] > arr[i + 1]) {
        comparison[2] = true;
        var temp1 = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp1;
        swapped = true;
      }
      animation.push(comparison);
    }
    j++;
  } while (swapped);
  return animation;
};
export default CocktailSort;
