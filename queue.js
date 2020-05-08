const MyQueue = class {
  construction(){
    this.data = [];
    this.index = 0;
  }
  enqueue(item){
    this.data[this.index]= item;
    this.index++;
    return this.index;

  }
  front(){

  }
  size(){

  }
  isEmpty(){

  }

  print(){

  }
}

const queue = new MyQueue();
queue.enqueue("APPLE");
queue.print();

queue.enqueue("BALL");
queue.print();
queue.enqueue("CAT");
queue.print();