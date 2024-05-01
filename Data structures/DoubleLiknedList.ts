class NodeClass {
    val: any;
    next: NodeClass | null;
    prev : NodeClass | null
    constructor(val: any) {
      this.val = val;
      this.next = null;
      this.prev = null
    }
  }
class DoubleLinkedList {
    head : NodeClass | null
    tail : NodeClass | null
    length : number
    constructor(){
        this.length = 0;
        this.head = null
        this.tail = null
    }
    push(val:any){
        const newNode = new NodeClass(val)
        if(this.length ===0){
            this.head = newNode
            this.tail = newNode
       
        }else{
            newNode.prev = this.tail
            this.tail!.next = newNode
            this.tail = newNode
        }
        this.length ++ ;
        return this;
    }
    pop(){
        if(this.length <= 1){
            this.head = null;
            this.tail = null;
            this.length = 0;
        }else{
            let oldTail = this.tail;
            let newTail = oldTail?.prev
            newTail!.next = null;
            this.tail = newTail as NodeClass
            oldTail!.prev = null
            this.length--;
            return oldTail;
        }
        return this;
    }
    shift(){
        if(this.length <= 1){
            this.head = null;
            this.tail=null
            this.length = 0
        }else{
            let oldHead = this.head;
            let newHead = oldHead!.next
            this.head = newHead as NodeClass
            newHead!.prev = null
            oldHead!.next = null
            this.length--;
            return oldHead
        }
    }
    unshift(val:any){
        const newNode = new NodeClass(val)
        if(this.length ===0){
            this.head = newNode;
            this.tail = newNode;
            this.length = 0;
        }else{
            this.head!.prev = newNode
            newNode.next = this.head
            this.head = newNode
            this.length++;
        }
        return this;
    }
    get(index:number){
        let wantedNode: NodeClass | null;
        let fromStart = index < this.length / 2  
        let counter = fromStart ? 0 : this.length - 1;

        if(this.length === 0 || index > this.length || index < 0){
            return null;
        }else{
             wantedNode = fromStart ? this.head : this.tail
             if(fromStart){
                 while(counter < index){
                     wantedNode = wantedNode!.next
                     counter++;
                 }
             }else{
                while(counter > index){
                    wantedNode = wantedNode!.prev
                    counter--;
                }
             }
        }
        return wantedNode

    }
    set(index:number,val:any){
        if(index > this.length || index < 0){
            return null;
        }
        const wantedNode = this.get(index)
        wantedNode!.val = val
        return wantedNode;
    }
    insert(index:number,val:any){
        const newNode = new NodeClass(val)
        if(index > this.length || index < 0){
            return null;
        }
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else if(index === 0){
            let oldHead = this.head
            this.head = newNode
            this.head.next = oldHead
            oldHead!.prev = this.head
        }else if(index === this.length){
            let oldTail = this.tail
            this.tail = newNode
            this.tail.prev = oldTail
            oldTail!.next = this.tail
        }else{
            const wantedNode = this.get(index)
            const prevNode = wantedNode?.prev
            prevNode!.next = newNode
            wantedNode!.prev = newNode
            newNode.next = wantedNode
            newNode.prev = prevNode!
        }
        this.length ++;
        return newNode;
    }
    remove(index:number){
        const wantedNode = this.get(index)
        if(index >= this.length || index < 0){
            return null;
        }
        if(this.length === 0){
            return null;
        }
        else if(index === 0){
            this.shift()

        }else if(index === this.length-1){
            this.pop()
        }else{
            const prevNode = wantedNode?.prev
            const nextNode = wantedNode?.next
            prevNode!.next = nextNode!
            nextNode!.prev = prevNode!
            wantedNode!.prev = null
            wantedNode!.next = null
        }
        this.length --;
        return wantedNode;
    }
    reverse(){
        
    }
}

const List = new DoubleLinkedList()
List.push("Hello")
List.push("world")
List.push("!!")
List.push(123)
console.log(List.remove(0))
