let shellSort = arr => {
    let animation = [];
    var n = arr.length;
    var temp;
    for (var gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (var j = gap; j < n; j++) {
            for (var i = j - gap; i >= 0; i = i - gap) {
                var x = i + gap;
                let comparison = [x, i, false];
                if (arr[i + gap] >= arr[i]) {
                    animation.push(comparison)
                    break;
                }
                else {
                    temp = arr[i + gap];
                    arr[i + gap] = arr[i];
                    arr[i] = temp;
                    comparison[2] = true;
                    animation.push(comparison)
                }
            }
        }
    }
    console.log(arr)
    return animation;
};

export default shellSort;
