import { ListNode } from "./SingleLinkedList"

class Stack {
    first : ListNode | null
    last: ListNode | null
    size : number
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    push(val:any){
        const newNode = new ListNode(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        }else{
           let temp = this.first
           this.first = newNode
           this.first.next = temp
        }
        return ++this.size
    }
    pop(){
        let deletedNode : ListNode | null;
        if(!this.first){
            return null;
        }
        if(this.size === 1){
            this.first = null
            this.last = null
            this.size--;
        }else{
            deletedNode = this.first
            this.first = deletedNode!.next
            this.size--;
            deletedNode!.next = null
        }
        return deletedNode!.val
    }
}

const stack = new Stack()
stack.push("one")
stack.push("two")
stack.push("three")
console.log(stack.pop())