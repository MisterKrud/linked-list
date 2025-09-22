#!/usr/bin/node

const linkedList = () => {
  let n = 0;

  let preNode = node();

  const append = (value) => {
    const newNode = node(value);
    newNode.index = n;
    const current = iterate()

    if (current.next === null) {
      current.next = newNode;
    }
    n++;
    return newNode;
  };


  const iterate = () => {
    let current = preNode;
    while (current.next) {
      current = current.next;
     
    }
     return current
  }

  const prepend = (value) => {
    const newNode = node(value);
    const rightNode = preNode.next;
    newNode.next = rightNode;
    preNode.next = newNode;
    newNode.index = 0;
    let current = newNode;
    while (current.next != null) {
      current = current.next;
      current.index++;
    }
  };

  const size = () => n;

  const head = () => {
    const headNode = preNode.next;
    return headNode.value;
  };

  const tail = () => {
   const current = iterate()
      if (current.next === null) {
        const tailNode = current;
        return tailNode.value;
      }
    
  };

  const at = (idx) => {
    const current = iterate()
      if (current.index === idx) {
        const atNode = current;
        return atNode.value;
      }
    
  };

  const pop = () => {
    let current = preNode;
    while (current.next) {
      current = current.next;
      let currentNext = current.next;
      if (currentNext.next === null) {
        current.next = null;
      }
    }
  };

  const contains = (value) => {
    let current = preNode;

    while (current.next) {
      current = current.next;
      if (current.value === value) {
        return true;
      }
    }
    return false;
  };


  const find = (value) => {
    const current = iterate()
      if (current.value === value) {
        const matchingNode = current;
        return matchingNode.index
      }
    
    return null;
    }
  
  const toString = () => {
    let current = preNode.next;

    while (current != null) {
      console.log(`${current.value} -> ${current.index}`);
      current = current.next;
    }
  };

  return { prepend, append, toString, size, head, tail, at, pop, contains, find };
};

const node = (value = null, next = null) => {
  

  return { value, next };
};

const list = linkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("car");

// console.log(list.append.newNode)

console.log("toString:");
console.log(list.toString());

console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(5));
list.pop();

console.log(list.toString());
console.log(list.contains("parrot"));
console.log(list.contains("bike"));

console.log(list.find("hamster"));
console.log(list.find("engine"))

// const firstNode = node("One");

// const secondNode = node("Two");
// console.log(firstNode.value)
// console.log(firstNode.next)
// console.log(firstNode)
// firstNode.next = "Two"
// console.log({secondNode})

//head.next = null
