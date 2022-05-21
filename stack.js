class Stack {
    constructor(maxSize) {
        if (typeof maxSize === 'undefined' || maxSize > 10) {
            maxSize = 10;
        } else if (!Number.isInteger(maxSize) || maxSize < 0) {
            throw new Error ('Parameter is not a valid number.');
        }

        this.maxSize = maxSize; 

        this.count = 0;

        this.data = [];
    }

    isFull() {
        return this.data.length >= this.maxSize;
    }

    push(elem) {
        if (this.isFull()) {
            throw new Error ('Stack Overflow.');
        } else if (!Number.isInteger(elem) || elem < 0) {
            throw new Error ('Parameter is not a valid number.');
        }

        this.data[this.count] = elem;

        this.count++; 
    }

    isEmpty() {
        return this.count === 0;
    }
    
    pop() {
        if (this.isEmpty() === false) {
            this.count--;

            let result = this.data[this.count];

            delete this.data[this.count];

            return result;
        } else {
            throw new Error ('Stack Underflow.');
        }
    }
    
    peek() {
        if (this.isEmpty() === true) {
            return null;
        }

        return this.data[this.count - 1];
    }

    toArray() {
        return this.data;
    }

    static fromIterable(iterable) {
        let stack = new Stack();

        stack = [iterable];

        return stack;
    }
}

// module.exports = { Stack };

class LinkedListNode {
    constructor(elem, next = null) {
        this.elem = elem;

        this.next = next;
    }

    toString(callback) {
        return callback ? callback(this.elem) : `${this.elem}`;
    }
}

class LinkedList {
    constructor() {
        this.head = null;

        this.tail = null;
    }

    append(elem) {
        const newNode = new LinkedListNode(elem);

        if (!this.head || !this.tail) {
            this.head = newNode;

            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;

        this.tail = newNode;

        return this;
    }

    prepend(elem) {
        const newNode = new LinkedListNode(elem, this.head);

        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    find(elem) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode) {
            if (typeof elem !== 'undefined' && currentNode.elem === elem) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    toArray() {
        const nodes = [];

        let currentNode = this.head;

        while (currentNode) {
            nodes.push(currentNode);

            currentNode = currentNode.next;
        }

        return nodes;
    }

    static fromIterable(iterable) {
        let ll = new LinkedList();

        ll = [iterable];

        return ll;
    }
}