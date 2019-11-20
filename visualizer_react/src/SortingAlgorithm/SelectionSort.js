let SelectionSort = array => {
  let animation = [];
  var len = array.length;
  for (var i = 0; i < len - 1; i = i + 1) {
    var j_min = i;
    let selected = i;
    for (var j = i + 1; j < len; j = j + 1) {
      let comparison = [selected, j, false];
      if (array[j] < array[j_min]) {
        j_min = j;
        selected = j_min;
      }
      animation.push(comparison);
    }
    if (j_min !== i) {
      let comparison = [i, j_min, true];
      var temp;
      temp = array[i];
      array[i] = array[j_min];
      array[j_min] = temp;
      animation.push(comparison);
    }
  }
  return animation;
};
export default SelectionSort;
