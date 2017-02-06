class HashTable {
  table = new Array(137)

  simpleHash(data: string){
    let total = 0;
    data.split('').map((v) => {
      total += v.charCodeAt(0)
    });
    console.log(total % this.table.length);
    return total % this.table.length ;
  }

 betterHash(data: string) {
  const H = 47;
  let total = 0;
  data.split('').forEach((v) => {
    total += H * total + v.charCodeAt(0);
  })
  total = total % this.table.length;
  console.log(total);
  return total;
}

  put(data){
    let pos = this.simpleHash(data)
  // let pos = this.betterHash(data)
    this.table[pos] = data;
  }

  toString(){
    this.table.forEach((v) => {
      if (v) console.log(v);
    });
  }

}


let name_arr = ["David", "Jennifer", "Donnie", "Raymond",
  "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

let hTable = new HashTable()

name_arr.forEach((v) => hTable.put(v))

hTable.toString()