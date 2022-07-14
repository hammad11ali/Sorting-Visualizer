let CombSort = function(array) {
  var animation = [];
  var interval = Math.floor(array.length / 1.3);
  while (interval > 0) {
    for (var i = 0; i + interval < array.length; i += 1) {
      var comparison = [i, i + interval, false];
      if (array[i] > array[i + interval]) {
        comparison[2] = true;
        var small = array[i + interval];
        array[i + interval] = array[i];
        array[i] = small;
      }
      animation.push(comparison);
    }
    interval = Math.floor(interval / 1.3);
  }
  return animation;
};
export default CombSort;
