/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor(){
    this.result = 0;
  }
  add(num){
    this.result+=num
    console.log(`Added ${num} to the result. The new result is ${this.result}`)
  }
  subtract(num){
    this.result-=num
    console.log(`Subtracted ${num} to the result. The new result is ${this.result}`)
  }
  multiply(num){
    this.result*=num
    console.log(`Multiplied ${num} to the result. The new result is ${this.result}`)
  }
  divide(num){
    try{
      if(num===0){
        throw new Error('Divisiion by zero not allowed')
      }
      this.result/=num
      console.log(`Divided ${num} to the result. The new result is ${this.result}`)
    }catch(e){
      throw new Error(e)
    }
  }
  clear(){
    this.result=0
    console.log(`Cleared the result. The new result is ${this.result}`)
  }
  getResult(){
    console.log(`Result is ${this.result}`)
    return this.result
  }
  calculate(expression){
    try{
      const trimmedExpression = expression.split(' ').join('')
      const result = eval(trimmedExpression)
      if(!isFinite(result)){
        throw new Error('Division by zero not allowed')
      }
      console.log(`Result is ${result}`)
      this.result = result
    }catch(e){
      console.log(e)
      throw new Error(e)
    }
  }
}

module.exports = Calculator;
