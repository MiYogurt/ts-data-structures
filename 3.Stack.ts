class Stack<T>{
  dataSources = [];

  top = 0

  push(element: T){
    this.dataSources[this.top++] = element
  }

  pop(): T{
    return this.dataSources[--this.top]
  }

  peek(){
    console.log(this.dataSources);
    return this.dataSources[this.top - 1];
  }

  clear(){
    this.top = 0;
  }

  length(){
    return this.top;
  }
}

let s = new Stack<String>();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length());

while(s.length() > 0){
  console.log(s.pop());
}

console.log(s.peek());


//  n 转换为以 b 为基数的数字，实现转换的算法

function mulBase(num, base) {
  let bit = new Stack()
  while(num > 0){
    bit.push(num % base)
    num = Math.floor(num /= base);
  }

  let str = '';

  while(bit.length() > 0){
    str += bit.pop()
  }
  return str;
}

console.log(mulBase(10, 2)) // 1010  8+2


// 回文

// "abccba" == "abccba".split('').reverse().join('')

function isPalindrmore_one(word : string | number) {
  let s = new Stack()
  let arr = word.toString().split('')
  arr.forEach((v) => s.push(v));
  let index = 0;
  while(s.length() > 0){
    let value = s.pop()
    if (value !== word.toString()[index]) return false;
    index++
  }
  return true;
}

function isPalindrmore_two(word: string | number) {
  let s = new Stack()
  let arr = word.toString().split('')
  arr.forEach((v) => s.push(v));
  let str = '';
  while (s.length() > 0) {
    str += s.pop()
  }
  if(str === word.toString()) {
    return true;
  }
  return false;
}

console.log(isPalindrmore_one(123321));

// 递归

function factorial(n) {
  if(n === 0) return 1;
  return n * factorial(n -1);
}


function fact(n: number) {
  let s = new Stack<number>()
  while( n > 1){
    s.push(n--)
  }
  let resule = 1;

  while(s.length() > 0){
    resule *= s.pop()
  }
  return resule;
}

console.log(fact(4))