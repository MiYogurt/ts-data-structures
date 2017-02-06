// 优先队列


class Patient{
  constructor(public name: string, public priority: number) {
    // code...
  }
}

class QueueP {
  dataSource: Array<Patient> = [];

  enqueue(element: Patient): void {
    this.dataSource.push(element)
  }

  dequeue() : Patient{
    let priority = this.dataSource[0].priority;
    let patientIndex = 0;
    this.dataSource.reverse().forEach((patient, index) => {
      if (patient.priority <= priority) {
        patientIndex = index // 越小优先级越高
        priority = patient.priority;
      }
    });
    console.log(this.dataSource);
    return this.dataSource.splice(patientIndex, 1)[0]
  }

  front() {
    return this.dataSource[0];
  }

  back() {
    return this.dataSource[this.dataSource.length - 1];
  }

  toString() {
    return this.dataSource.map(console.log)
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


let A = new Patient("A", 2);
let B = new Patient("B", 1);
let C = new Patient("C", 6);
let D = new Patient("D", 1);

let q = new QueueP()

q.enqueue(A)
q.enqueue(B)
q.enqueue(C)
q.enqueue(D)

let B_1 = q.dequeue()
let D_1 = q.dequeue()

console.log(B_1);
console.log(D_1);