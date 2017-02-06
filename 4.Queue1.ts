import * as fs from "fs";

class Dancer {
  constructor(public name : string, public gender: string) {}
}

class Queue<T> {
  dataSource: Array<T> = [];

  enqueue(element: T) : void {
    this.dataSource.push(element)
  }

  dequeue(){
    return this.dataSource.shift();
  }

  front(){
    return this.dataSource[0];
  }

  back(){
    return this.dataSource[this.dataSource.length - 1];
  }

  toString(){
    return this.dataSource.join(',');
  }

  empty() {
    if(this.dataSource.length == 0) {
      return true;
    }
    return false;
  }

  count(){
    return this.dataSource.length;
  }
}


function getDancers() : Promise<Dancer[]> {
  return new Promise((yes, no) => {
     fs.readFile('./dancer.txt', 'utf-8', (err, data) => {
        if (err) no(err);
        const dancerArray = data.split('\n').map(personal => {
          personal.trim()
          return new Dancer(personal.split(' ')[1] + " "+ personal.split(' ')[2], personal.split(' ')[0])
        })
        yes(dancerArray);
    })
  });

}

function dance<T extends Queue<Dancer>>(males: T, females: T) {
  console.log("舞会开始");

  while (!females.empty() && !males.empty()) {
    const women = females.dequeue()
    console.log();
    const men = males.dequeue();
    console.log("花好月圆，恭喜 " + women.name + " 女士与 " + men.name + " 男士成双结对");
  }
  console.log('\n');
}


async function Run<T extends Queue<Dancer>>(males: T, females: T) {
  let dancerArray = await getDancers()
  dancerArray.map((dancer) => {
    dancer.gender == 'F' ? females.enqueue(dancer) : males.enqueue(dancer)
  })
  dance(maleDancers, femaleDancers)

  if(!femaleDancers.empty()) {
    console.log(femaleDancers.front().name + " 女士，正在等待舞伴");
  }

  if(!maleDancers.empty()) {
    console.log(maleDancers.front().name + " 男士，正在等待舞伴");
  }

  // 显示正在等待跳舞的人数

  if(maleDancers.count() > 0) {
    console.log("一共有 " + maleDancers.count() + " 位男士在等待");
  }
  if(femaleDancers.count() > 0) {
    console.log("一共有 " + femaleDancers.count() + " 位女士在等待");
  }
}

const maleDancers = new Queue<Dancer>()
const femaleDancers = new Queue<Dancer>()

Run(maleDancers, femaleDancers);

