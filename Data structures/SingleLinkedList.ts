class ListNode {
  val: any;
  next: ListNode | null;
  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  tail: ListNode | null;
  head: ListNode | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: any) {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
    this.length++;
    return this;
  }
  pop(){
    let current = this.head;
    let newTail = current;
//@ts-ignore
    while(current.next){
//@ts-ignore
       // console.log(current.val)
        newTail = current
//@ts-ignore
        current = current.next
    }
    if(newTail){
      //if our list has more than 2 items
        newTail.next = null
        this.tail = newTail
    }else{
        this.head = null;
        this.tail = null;
    }
        this.length--;
//@ts-ignore
        return current.val
  }
  shift(){
    if(this.head?.next === null){
        this.head=null
        this.tail=null
        this.length = 0
        return this;
    }else{
      const currentHead = this.head
//@ts-ignore
      this.head  = currentHead?.next
      this.length--;
//@ts-ignore
      currentHead.next = null
      return currentHead;
    }

  }
  unshift(val: any) {
    const newHead = new ListNode(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head; // Update tail when list is empty
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }
  get(index:number){
    if (this.length < index || index < 0){
      return undefined
    }else{
      if(index===0){
        return this.head
      }
      let currentNode = this.head
      for(let i=1 ;i<=index; i++){
//@ts-ignore
         currentNode = currentNode?.next
      }
      return currentNode
    }
  }
  set(index:number,newValue:any){
    const wantedNode = this.get(index)
    if(wantedNode){
      wantedNode.val = newValue
      return this;
    }else{
      return null;
    }
  }
  insert(index:number,newValue:any){
    if(index > this.length || index < 0){
      return null
    }
    switch(index){
      case 0 : this.unshift(newValue) 
                break;
      case this.length : this.push(newValue)
                        break;
      default :  
      const previousNode = this.get(index-1)
      const wantedNode = this.get(index)
      const newNode = new ListNode(newValue)
//@ts-ignore
        previousNode.next = newNode
//@ts-ignore
        newNode.next = wantedNode
      break;
    }
    this.length ++;
    return this;

  }
  remove(index:number){
    if(index > this.length || index < 0){
      return null
    }
    switch(index){
      case 0 : this.shift() 
                break;
      case this.length : this.pop()
                        break;
      default :  
      const previousNode = this.get(index-1)
      const wantedNode = this.get(index)
      const removed = wantedNode
//@ts-ignore
      previousNode.next = wantedNode.next
      this.length --;
      return removed
      
    }
    
  }
  reverse() {
    let node: ListNode | null = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev: ListNode | null = null;
    let nextNode: ListNode | null;

    for (let i = 0; i < this.length; i++) {
//@ts-ignore
        nextNode = node?.next;
        node && (node.next = prev);
        prev = node;
        node = nextNode;
    }
}

  print(){
    let arr = []
    let current = this.head
    while(current){
      //@ts-ignore
      arr.push(current.val)
      current=current.next
    }
    console.log(arr)
  }
}
const List = new SingleLinkedList();

List.push("no");
List.push("well");
List.push("yes");
List.unshift(123)

console.log(List.print());
console.log(List.reverse())
console.log(List.print());
