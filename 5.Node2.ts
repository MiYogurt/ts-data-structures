// 双向链表

namespace node2{
  export class Node<T>{
    next: Node<T> = null
    prev: Node<T> = null

    constructor(public ele: T) { }
  }



  export class NodeList {
    head = new Node<string>("head")

    find(item){
      let currNode = this.head
      while(currNode.next && currNode.ele != item){
        currNode = currNode.next
      }
      return currNode;
    }

    insertAfter(newEle: string, item){
      const newNode = new Node<string>(newEle)
      let currNode = this.find(item)
      newNode.next = currNode.next
      newNode.prev = currNode
      currNode.next = newNode
    }

    remove(item){
      let currNode = this.find(item)
      if(currNode.next) {
        currNode.prev.next = currNode.next
        currNode.next.prev = currNode.prev
        currNode = null;
      }else{
        currNode.prev.next = null;
        currNode = null;
      }
    }

    findLast(){
      let currNode = this.head
      while(currNode.next){
        currNode = currNode.next
      }
      return currNode;
    }

    dispReverse(){
      let currNode = this.head;
      currNode = this.findLast()
      while(currNode.prev){
        console.log(currNode.ele);
        currNode = currNode.prev
      }
    }
  }
}


let linked_list = new node2.NodeList()

linked_list.insertAfter("A", "head")
linked_list.insertAfter("B", "A")
linked_list.insertAfter("C", "B")

linked_list.remove("C")

linked_list.dispReverse()

// console.log(JSON.stringify(linked_list));

