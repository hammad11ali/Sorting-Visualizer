let InsertionSort = nums => {
  let animation = [];
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let tmp = nums[i];
    let comparison = [i, j];
    while (j >= 0 && nums[j] > tmp) {
      nums[j + 1] = nums[j];
      j--;
      console.log(j);
      comparison.push(j);
    }
    nums[j + 1] = tmp;
    animation.push(comparison);
  }
  return animate(animation);
};
function animate(animation) {
  let newAnimation = [];
  for (let i = 0; i < animation.length; i++) {
    let current = animation[i];
    if (current.length === 2) {
      let c = current;
      c.push(false);
      newAnimation.push(c);
      continue;
    }
    let swaps = current.length - 2;
    let k = 0;
    while (swaps > 0) {
      let c = [];
      c.push(current[k]);
      c.push(current[k + 1]);
      c.push(true);
      newAnimation.push(c);
      swaps--;
      k++;
    }
    if (current[k + 1] !== -1) {
      let c = [];
      c.push(current[k]);
      c.push(current[k + 1]);
      c.push(false);
      newAnimation.push(c);
    }
  }
  return newAnimation;
}
export default InsertionSort;
