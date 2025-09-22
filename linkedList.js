#!/usr/bin/node



const linkedList = () =>{

    let n  = 0;
    const getListLength = () => n
  
  const headNode = node(null, null);
  


 const append = (value) => {
    
const newNode =   node(value) 
    newNode.index = n

    let current = headNode

   
    while (current.next != null){
        
    
       
        current = current.next
        
    }

   if(current.next === null){
    current.next = newNode
}
// console.log('---------')
//         console.log(current)
//         console.log(current.next)
//         console.log('__________')
//         console.log('')
   

    //while ever the current.next is not null
    //current node = current.next
        // console.log(newNode)

         n++
   return newNode
}

const getNodeByIndex = (n) => {
   console.log(node(n))
}
//     const prepend=(value) =>{
//         listLength++
//     return node(null, value);
//     }


    const size = () => n

   
// // let head = () => node(null, next)

//     const tail =  node(null, null);

//     const at = (index) => node.getValue()//unfinished - returns node at the index

//     const pop = () => {
//         const tailNode = tail();
//         listLength--
//         //get node before tail
//         //replace next value of previous node to 'null'
//     }

//     const contains = (value) =>{
//         //returns true if value is in linkedList. Otherwise, false
//     }

//     const find = (value) => {
//         //if node contains value, return node
//         //else null
//     }

    const toString = () => {
        let current = headNode.next;
   
        while(current !=null) {
           
     console.log(`${current.value} ->`)
     current = current.next
        }
      
    
}
  

    return {append, toString, size}
}


const node = (value=null, next=null) => {
    const getValue = () => value;
    const getNext = () => next;
    

    return {value, next, getValue, getNext}
}

const list = linkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// console.log(list.append.newNode)

console.log('toString:')
console.log(list.toString())

console.log(list.size())

// const firstNode = node("One");


// const secondNode = node("Two");
// console.log(firstNode.value)
// console.log(firstNode.next)
// console.log(firstNode)
// firstNode.next = "Two"
// console.log({secondNode})



//head.next = null