function Helper () {

    // 生成有n个元素的随机整数数组，每个元素的随机范围为[rangeL, rangeR]
    this.generateRandomArray = function (n, rangeL, rangeR) {

        var arr = [];
        for (var i = 0; i < n; i++) {
            arr[i] = parseInt(Math.random() * (rangeR - rangeL + 1) + rangeL);
        }

        return arr;

    }

    // 计算排序是否正确
    this.isSorted = function (arr) {

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }

        return true;

    }

}