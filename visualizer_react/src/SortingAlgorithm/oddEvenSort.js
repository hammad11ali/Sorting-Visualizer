let oddEvenSort = arr => {
    var isSorted = false; // Initially array is unsorted
    var n = arr.length;
    let animation = [];
    var i, temp;

    while (!isSorted) {
        isSorted = true;

        // Perform Bubble sort on odd indexed element 
        for (i = 1; i <= n - 2; i = i + 2) {
            let comparison = [i, i + 1, false];
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                //swap(arr[i], arr[i + 1]);
                isSorted = false;
                comparison[2] = true;
            }
            animation.push(comparison)
        }

        // Perform Bubble sort on even indexed element 
        for (i = 0; i <= n - 2; i = i + 2) {
            let comparison = [i, i + 1, false];
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                isSorted = false;
                comparison[2] = true;
            }
            animation.push(comparison)
        }
    }
    console.log(arr)
    return animation;
};

export default oddEvenSort;