function selectionSort_1(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // 将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
function selectionSort_2(arr) {
    let tempArr = Array.from(arr);
    arr.forEach((value1, index1) => {
        let minIndex = index1;
        arr.slice(index1 + 1).forEach((value2, index2) => {
            if (tempArr[index2 + index1 + 1] < tempArr[minIndex]) {
                minIndex = index2 + index1 + 1;
            }
        });
        [tempArr[index1], tempArr[minIndex]] = [tempArr[minIndex], tempArr[index1]];
    });
    return tempArr;
}
let arr_2 = [1, 3, 2];
console.log(selectionSort_2(arr_2));
console.log(arr_2);
