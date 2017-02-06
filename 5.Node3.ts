// 循环单向列表
namespace Node3{
  export class Node {
    next: Node;
    constructor(public ele : string) {}
  }

  export class LinkList {
    head = new Node("head")

    constructor() {
      this.head.next = this.head;
    }

    find(item) {
      let currNode = this.head
      while (currNode.next.ele != 'head' && currNode.ele != item) {
        currNode = currNode.next
      }
      return currNode;
    }

    findPrev(item) {
      let currentNode = this.head

      while (currentNode.next.ele != 'head' && currentNode.next.ele != item) {
        currentNode = currentNode.next
      }

      return currentNode;
    }

    insertAfter(newElement: any, item: any) {
      const newNode = new Node(newElement);
      let currentNode = this.find(item)
      newNode.next = currentNode.next
      currentNode.next = newNode
    }

    remove(item) {
      const prevNode = this.findPrev(item)
      if (prevNode.next) {
        prevNode.next = prevNode.next.next
      }
    }

    toString() {
      let currentNode = this.head
      while (currentNode.next.ele !== 'head') {
        console.log(currentNode.next.ele);
        currentNode = currentNode.next
      }
    }
  }
}




let linked_list_one = new Node3.LinkList();
linked_list_one.insertAfter("A", "head")
linked_list_one.insertAfter("B", "A")
linked_list_one.insertAfter("C", "B")
// linked_list_one.remove("C")
// console.log(JSON.stringify(linked_list_one));
linked_list_one.toString();