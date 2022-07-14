let bubbleSort = arr => {
  let animation = [];
  for (var i = arr.length - 1; i > 0; --i) {
    for (var j = 0; j < i; j++) {
      let comparison = [j, j + 1, false];
      if (arr[j] > arr[j + 1]) {
        comparison[2] = true;
        var temp;
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      animation.push(comparison);
    }
  }
  return animation;
};

export default bubbleSort;
