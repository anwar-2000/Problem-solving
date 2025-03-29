class NodeBST {
    value : NodeBST | null
    right : NodeBST | null
    left : NodeBST | null
    constructor(value:any){
        this.value = value;
        this.right = null
        this.left = null
    }
}

class BST {
    root : NodeBST | null
    constructor(){
        this.root = null
    }
    insert(value:any){
        let node = new NodeBST(value)
        if(this.root === null){
            this.root = node
            return this;
        } else {
            let current = this.root;
            while(1){
                if(current.value === value) return undefined;
                if(value<current.value!){
                    if(current.left === null){
                        current.left = node
                        return this;
                    }else{
                        current = current.left
                    }
                } else if(value > current.value!){
                    if(current.right === null){
                        current.right = node
                        return this;
                    } else {
                        current = current.right
                    }
                }
            }
        }
        
    }
    contains(value:any){
        let found = false
        if(this.root === null){
            return found;
        }
        let current = this.root
        while(current && !found){
            if(current.value! > value){
                current = current.left!
            }else if (current.value! < value){
                current = current.right!
            }else{
                return true;
            }
        }
        return false;
    }
    //TODO : isBalanced ? and remove 
}