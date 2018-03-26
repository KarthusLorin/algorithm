function selectionSort (arr) {

    for (var i = 0; i < arr.length; i++) {
        // 寻找最小值
        var minIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;

}

function testSort (arr) {
    console.time('time');
    var newArr = selectionSort(arr);
    console.timeEnd('time');
    console.log('Selection Sort:', helper.isSorted(newArr));
}

var n = 10000;
var helper = new Helper();
var arr = helper.generateRandomArray(n, 0, n);
testSort(arr);