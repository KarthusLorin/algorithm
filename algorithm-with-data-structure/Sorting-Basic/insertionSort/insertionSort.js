/* 插入排序与选择排序的不同在于，插入排序的二级循环可以提前结束
   所以，插入排序一般情况下都比选择排序效率高
   当处理比较有序的数据时，插入排序的效率是所有程序中最快的
   在极限情况下，即处理有序数据时，插入排序二级循环每次都是1
   所以，时间复杂度将达到O(n)  */

function insertionSort (arr) {

    for (var i = 1; i < arr.length; i++) {
        // 寻找元素arr[i]合适的插入位置
        for (var j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                var temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            } else {
                break;
            }
        }
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