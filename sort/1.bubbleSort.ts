
// 冒泡排序

function bubbleSort_1(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {        // 相邻元素两两对比
        var temp = arr[j + 1];        // 元素交换
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function bubbleSort_2(arr: number[]) {
  let tempArr = Array.from(arr);
  arr.forEach((value1, index1) => {
    arr.slice(0, arr.length - index1 - 1).forEach((value2, index2) => {
      if (tempArr[index2] > tempArr[index2 + 1]) {
        [tempArr[index2], tempArr[index2 + 1]] = [tempArr[index2 + 1], tempArr[index2]]
      }
    });
  })
  return tempArr;
}

let arr_some = [1, 3, 2];

console.log(bubbleSort_2(arr_some));

console.log(arr_some);

console.log(bubbleSort_1(arr_some));