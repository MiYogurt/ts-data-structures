class Queue<T> {
  dataSource: Array<T> = [];

  enqueue(element: T): void {
    this.dataSource.push(element)
  }

  dequeue() {
    return this.dataSource.shift();
  }

  front() {
    return this.dataSource[0];
  }

  back() {
    return this.dataSource[this.dataSource.length - 1];
  }

  toString() {
    return this.dataSource.join(',');
  }

  empty() {
    if (this.dataSource.length == 0) {
      return true;
    }
    return false;
  }

  count() {
    return this.dataSource.length;
  }
}


// 第二个例子，排序

// Bin 0:
// Bin 1: 91, 31
// Bin 2: 92, 22
// Bin 3:
// Bin 4:
// Bin 5: 85, 15, 35
// Bin 6: 46
// Bin 7:
// Bin 8:
// Bin 9:

const distruibute = (
  nums: number[],
  queues: Queue<number>[],
  digit: boolean | number
) => {
  nums.forEach((num) => {
    if (digit) {
      queues[num % 10].enqueue(num) // 个位
    } else {
      queues[Math.floor(num / 10)].enqueue(num) // 十位
    }
  })
}

function collect(queues: Queue<number>[], nums) {
  for (let digit = 0, i = 0; digit < 10; digit++) {
    while (!queues[digit].empty()) {
      nums[i++] = queues[digit].dequeue()
    }
  }
}

function showArray(arr: any[]) {
  arr.map((v) => console.log(v))
}

let queues: Queue<number>[] = Array.from(
  { length: 10 },
  (v, k) => new Queue<number>()
)

let nums: number[] = Array.from(
  { length: 10 },
  (v, k) => Math.floor(Math.random() * 101)
)

console.log("排序前 \n");

console.log(nums);

distruibute(nums, queues, true)
collect(queues, nums)

console.log("\n 个位排序已经完成 --");
console.log(nums);

distruibute(nums, queues, false)
collect(queues, nums)

console.log("\n 十位排序已经完成 --");
console.log(nums);