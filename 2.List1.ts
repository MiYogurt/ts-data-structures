class List1 {
  listSize = 0;
  pos = 0;
  data = [];

  clear(){
    this.data = []
    this.listSize = this.pos = 0
  }

  find(element){
    for (let i = this.listSize; i >= 0; i--) {
      if(this.data[i] == element) {
        return i;
      }
    }
    return -1;
  }

  contains(element) {
    return Boolean(this.find(element));
  }

  toString(){
    return this.data;
  }

  insert(element, after) {
    let insertPos = this.find(after)
    if(insertPos > -1) {
      this.data.splice(insertPos + 1, 0, element)
      ++this.listSize;
      return true;
    }

    return false;
  }

  append(element){
    this.data[this.listSize++] = element
  }

  remove(element){
    let foundAt = this.find(element)
    if(foundAt > -1) {
      this.data.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
    return false;
  }

  front(){
    this.pos = 0;
  }

  end(){
    this.pos = this.listSize - 1
  }

  prev(){
    if(this.pos > -1) {
      --this.pos;
    }
  }

  next(){
    if (this.pos < this.listSize ) ++this.pos;
  }

  length(){
    return this.listSize;
  }

  currPos(){
    return this.pos;
  }

  moveTo(position){
    this.pos = position;
  }

  getElement(){
    return this.data[this.pos];
  }
}


let lists = new List1()
lists.clear()
lists.append("hello")
lists.append("world")


// for (lists.front() ; lists.currPos() < lists.length(); lists.next()) {
  // console.log(lists.currPos());
  // console.log(lists.length());
  // console.log(lists.getElement());
// }

// lists.end()

// console.log(lists.currPos());
// console.log(lists.getElement());
// lists.prev()
// console.log(lists.getElement());

// console.log(lists.currPos());
// lists.prev()
// console.log(lists.currPos());

for (lists.end(); lists.currPos() >= 0 ; lists.prev() ){
  console.log(lists.currPos());
  console.log(lists.getElement());
}

console.log(lists.currPos());

