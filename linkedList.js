#!/usr/bin/node

console.log('test')

const linkedList = () =>{

    let listLength  = 0;
  
    

    const append=(value) => {
        listLength ++
       return  newNode(value, null);
    }
    const prepend=(value) =>{
        listLength++
    return newNode(null, value);
    }
    const size = () => listLength+1
    const head = () => newNode(null, newNode.getNext());
    const tail = () => newNode(null, null);
    const atIndex = () => newNode.getValue()//unfinished
    const pop = () => {
        const tailNode = tail();
        listLength--
        //get node before tail
        //replace next value of previous node to 'null'
    }
}


const newNode = (value=null, next=null) => {
    const getValue = () => value;
    const getNext = () => next;

    return {getValue, getNext}
}