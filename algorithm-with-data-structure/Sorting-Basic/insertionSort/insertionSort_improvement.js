/* 改进版本的插入排序，只不过把一次又一次的交换操作
   改为比较之后进行一次赋值 */

function insertionSort (arr) {

    for (var i = 1; i < arr.length; i++) {

        var e = arr[i];
        // j保存元素e应该插入的位置
        var j;
        for (j = i; j > 0; j--) {
            if (arr[j - 1] > e) {
                arr[j] = arr[j - 1];
            } else {
                break;
            }
        }
        arr[j] = e;
    }

    return arr;

}

function testSort (arr) {
    console.time('time');
    var newArr = insertionSort(arr);
    console.timeEnd('time');
    console.log('Insert Sort:', helper.isSorted(newArr));
}

var n = 10000;
var helper = new Helper();
var arr = helper.generateRandomArray(n, 0, n);
testSort(arr);