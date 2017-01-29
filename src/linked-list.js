const Node = require('./node');


// Shelenium elena.shokan@gmail.com

class LinkedList {

    constructor(data,prev,next) {
        this.datа = data;
        this.prev = prev;
        this.next = next;
        this.length = 0;
    }

    append(data) {
        var newnode = new Node (data,null,null);
        this.length += 1; 
 
       
        if (this._head == undefined) {
            this._head = newnode;
            this._tail = new Node;
            newnode.next = this._tail;
            
        } else 
            if (this._tail.prev == null){
                this._tail = newnode;
                newnode.prev = this._head;
                this._head.next = newnode;
            
               } else {

               var oldnode = this._tail;
               newnode.prev = oldnode;
               oldnode.next = newnode;
               this._tail = newnode;
            
              }
              return this;
    }

    head() {
        return this._head.data;
    }

    tail() { 
        if (this.length == 1){
        return this._head.data;
    } else
        return this._tail.data;
    }

    at(index) {
        var indexnode = this._head;
            for (var i = 0; i < index; i++) {
                indexnode = indexnode.next;
                }
            return indexnode.data;

    }

    insertAt(index, data) {

        if (this._head == undefined) {
            this._head = newnode;
            this._head = new Node (data,null,this._tail);
            this.length = 1;

        } else {

        var indexnode = this._head;
            for (var i = 0; i < index-1; i++) {
                indexnode = indexnode.next;
                }

               var newnode = new Node(data,indexnode,indexnode.next);
               indexnode.next = newnode;
               indexnode = newnode.next;
               indexnode.prev = newnode;

               return this;
    }
}

    isEmpty() {
        if (this._head == undefined) {
           return true;
       } else {
           return false;
        }
    }

    clear() {
        if (this.length == 0){
          return this;
        } else {
        var indexnode = this._head;
        var next = indexnode.next;
        this._head.data = null;

        while (indexnode != this._tail) {
                indexnode = next; 
                indexnode.prev = null;
                }
        this._tail.data = null;        
        this.length = 0;
        return this;

    }
}

    deleteAt(index) {

        this.length--;
        
        if ((index == 0) && (this.length == 0)) {
            this._head = null;
            this._tail = null;
            return this;
        } 
        else if (index == 0){
            this._head = this._head.next;
            this._head.prev = null;
        }
        else if (index == this.length){
            this._tail = this._tail.prev;
            this._tail.next = null;
        }
         else {
            var indexnode = this._head; 
            for (var i = 0; i < index; i++) {
                indexnode = indexnode.next;
                }
            }
               
               var next = indexnode.next;
               indexnode = indexnode.prev;
               indexnode.next = next;
               next.prev = indexnode;


               return this;

    }

    reverse() {
        if (this.length < 2) {
            return this;
        } else {
        var indexnode = this._head;
        function reversenode(indexnode){
            var tempnode = new Node (indexnode.data,indexnode.next,indexnode.prev);
            return tempnode;

        }
        for (var i = 0; i < this.length-1; i++){
            indexnode = reversenode(indexnode);
            var tempnode = indexnode;
            indexnode = indexnode.prev;
            indexnode.prev = tempnode;

        }
        
        tempnode = this._head;
        this._head = reversenode(this._tail);
        this._tail = tempnode;

        return this;
    }
}

    indexOf(data) {
        var indexnode = this._head;
        var index = -1;
        var i = 0;
        while (i < this.length) {
            if (indexnode.data == data){
                index = i;
                break;
            }
                indexnode = indexnode.next;
                i++;
            }
        return(index);
    }

}

module.exports = LinkedList;
