/**

*  
 */ 

var FreqStack = function() {
    
  this.fmap = new Map()
  this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
  let freq = (this.fmap.get(val) || 0) + 1;
  this.fmap.set(val, freq);
  
  if (!this.stack[freq]) 
    this.stack[freq] = [val];
  else 
    this.stack[freq].push(val);
};
 
/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    
  let top = this.stack[this.stack.length-1], x = top.pop();

  if (!top.length) 
    this.stack.pop();

  this.fmap.set(x, this.fmap.get(x) - 1);

  return x
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */