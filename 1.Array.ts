// 创建数组

// 1.字面量
let arr = [1,2,3]

// 2.构造器形式
let arr1 = new Array(2)

let arr2 = new Array(1, 2, 3);

// 3. Array.of

let arr3 = Array.of(1, 2, 3) // [1,2,3]
let arr31 = Array.of(1) // [1]

// 4.静态方法 from

// 将类数组对象（arguments）转换成数组
function create_array(...args) {
  let arr = Array.from(args);
  return arr;
};

let arr4 = create_array(1, 2, 3) // [1, 2, 3]

// 将可迭代对象（Set 对象）转换成数组
Array.from(new Set(["foo", "bar"]));       // ["foo", "bar"]

// Map 对象也可以
let m = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(m);                          // [[1, 2], [2, 4], [4, 8]]

// 字符串对象既是类数组又是可迭代对象
Array.from("foo");                      // ["f", "o", "o"]

// 使用 map 函数转换数组元素
Array.from([1, 2, 3], x => x + x);      // [2, 4, 6]

// 生成一个数字序列
Array.from({length:5}, (v, k) => k);    // [0, 1, 2, 3, 4]

// console.log(Array.from({ length: 5 }, (v, k) => k));


// 连接数组,返回一个新数组

let arr5 = [1, 2, 3].concat([1, 2, 4], 1 , 23);
let arr6 = [1, 2, 3].concat([1, 2, 4], [1 , 23]);

// let arr7 = [1, 2, 3].concat([ 1 , 3 ], [1, 2, 4], [ [1,2,3], [1,2] ]);

let a =  [[1, 3], [1, 2, 4]]

console.log(arr5); // [ 1, 2, 3, 1, 2, 4, 1, 23 ]
console.log(arr6); // [ 1, 2, 3, 1, 2, 4, 1, 23 ]

// filter 过滤，得到满足条件的值

var filtered = [12, 5, 8, 130, 44].filter(item => item >= 10);


// 是否包括某一值

let arr_includes = [1, 2, 3];
(arr_includes as any).includes(2); // true
// arr_includes.includes(4); // false

// of 遍历的语法糖
for (let arr of arr_includes) {
  console.log(arr);
}

var iterator = arr_includes.entries()

iterator.next()

for (let arr of iterator) {
  console.log(arr);
}

// copyWithin 基于数组内部的拷贝, bitArray
// 从 target 开始，支持逆向负值，从数组的 start 位置到 end 位置
// start 默认 0， end 默认 arr.length

[1, 2, 3, 4, 5].copyWithin(0, 3); // [4, 5, 3, 4, 5]
// 3 - end     4, 5
// 从 0 开始2位 1, 2
// 1, 2 变 4, 5


// 找到具体的值所在的位置

[1, 2, 3].findIndex((v) => v == 2);

[1, 2, 3].indexOf(2);

[2, 3, 4, 4].lastIndexOf(4);

// 数组变成字符串

[1, 2, 3].join('/');
[1, 2, 3].toString();

// 字符串变数组
'1/2/3'.split('/');


// 遍历

let new_array = [1, 2, 3].map((v) => v);

[1,2,3].forEach(v => v)

// 组合

var sum = [0, 1, 2, 3].reduceRight((prev, curr, index, arr) => {
  return prev + curr;
}, 0);

// reduce


// 倒置数组

[1, 2, 3].reverse();

// 排序
[1, 2].sort((a, b) => a > b ? a : b);


// 复制数组， 纯函数

let a2 = ["zero", "one", "two", "three"];
let sliced = a.slice(1, 3);

console.log(a2);      // [ "zero", "one", "two", "three" ]
console.log(sliced); // [ "one", "two" ]

// 快速填充数组，用来初始化

arr.fill(1)

// 数组的增加删除

arr.push(1);  // 在尾部添加一个元素
let del_arr1 = arr.pop(); // 从尾部删除一个函数，不纯

// 头部

arr.unshift(1); // 添加
let del_arr2 = arr.shift(); // 删除


// 数组修改操作, 不纯， 既可以删除又可以添加
var myFish = ["angel", "clown", "mandarin", "sturgeon"];

// 从第二位开始，删除0个，添加一个 “drum” 元素
myFish.splice(2, 0, "drum");

// ["angel", "clown", "drum", "mandarin", "sturgeon"];
