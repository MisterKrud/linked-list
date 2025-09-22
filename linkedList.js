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


  const insertAt = (value, index) => {
    const newNode = node(value);
    newNode.index = index
    const rightNode = at(index);
    const leftNode = at(index-1);
    let current = newNode

   
    leftNode.next = newNode;
     newNode.next = rightNode;
     console.log(`leftNode: ${leftNode.value}`)
     console.log(`rightNode: ${rightNode.value}`)
      console.log(`newNode: ${newNode.value}`)
     

    while(current.next){
      current = current.next;
      current.index++
    }

    
  }


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
    let current = preNode;
    while (current.next) {
      current = current.next;
      if (current.index === idx) {
        const atNode = current;
        console.log(atNode)
        return atNode;
      }
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
      let current = preNode;

    while (current.next) {
      current = current.next;
      if (current.value === value) {
        const matchingNode = current;
        return matchingNode.index
      }
    }
    return null;
    }
  
  const toString = () => {
    let stringChain = ""
    let current = preNode.next;

    while (current) {
      let nodeValue = current.value;   
      stringChain = stringChain.concat(`( ${nodeValue} [${current.index}] ) -> `)
      if(current.next === null){
        stringChain = stringChain.concat(null)
      }
      current = current.next;
    }

    console.log(stringChain);
  };


  return { prepend, append, toString, size, head, tail, at, pop, contains, find, insertAt};
};

const node = (value = null, next = null) => {
  

  return { value, next };
};

const list = linkedList();

const printListItems = (() => {
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("car");



console.log("toString:");
console.log(list.toString());

console.log(`Size: ${list.size()}`);
console.log(`Head: ${list.head()}`);
console.log(`Tail: ${list.tail()}`);
console.log(`List at 5: ${list.at(5)}`);
list.pop();

console.log(`Popped list: ${list.toString()}`);
console.log(`Contains 'parrot': ${list.contains("parrot")}`);
console.log(`Contains 'bike': ${list.contains("bike")}`);

console.log(`Find 'hamster': ${list.find("hamster")}`);
console.log(`Find 'engine': ${list.find("engine")}`)
list.insertAt("Lion", 3)
console.log(list.toString())

})()