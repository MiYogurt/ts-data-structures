class linkNode<T>{
  next: linkNode<T> = null
  constructor(public elemnt : T) {}
}


class LinkedList {
  head = new linkNode("Head")

  find(item) : linkNode<any>{
    let currentNode = this.head

    while (currentNode.next && currentNode.next != item) {
      currentNode = currentNode.next
    }
    return currentNode;
  }

  findPrev(item): linkNode<any>{
    let currentNode = this.head

    while(currentNode.next && currentNode.next.elemnt != item){
      currentNode = currentNode.next
    }

    return currentNode;
  }

  insertAfter(newElement : any, item : any){
    const newNode = new linkNode(newElement);
    let currentNode = this.find(item)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  remove(item){
    const prevNode = this.findPrev(item)
    if(prevNode.next) {
      prevNode.next = prevNode.next.next
    }
  }

  toString(){
    let currentNode = this.head
    while(currentNode.next){
      console.log(currentNode.next.elemnt);
      currentNode = currentNode.next
    }
  }
}




let linked_lists = new LinkedList();
linked_lists.insertAfter("A", "head")
linked_lists.insertAfter("B", "A")
linked_lists.insertAfter("C", "B")
linked_lists.remove("B")
console.log(JSON.stringify(linked_lists));
linked_lists.toString();
