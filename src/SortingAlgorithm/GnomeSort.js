let GnomeSort = arr => {
  let animation = [];
  function moveBack(i) {
    for (; i > 0 && arr[i - 1] > arr[i]; i--) {
      let comparison = [i, i - 1, true];
      var t = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = t;
      animation.push(comparison);
    }
    if (i > 0) {
      let comparison = [i, i - 1, false];
      animation.push(comparison);
    }
  }
  for (var i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      moveBack(i);
    } else {
      let comparison = [i, i - 1, false];
      animation.push(comparison);
    }
  }
  return animation;
};
export default GnomeSort;
