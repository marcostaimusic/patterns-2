const Middleware = require('./Middlewares')
const numbers = {num1: 34, num2: 45}


const sum = (parameters) => {
    let result = parameters.num1 + parameters.num2
    //console.log(result)
    return result
}

const diff = (parameters) => {
    let result = parameters.num1 - parameters.num2
    return result
}

const mult = (parameters) => {
    let result = parameters.num1 * parameters.num2
    return result
}

const resultSum = sum(numbers);
const resultDiff = diff(numbers)
const resultMult = mult(numbers)


const mid = new Middleware(resultSum)

mid.use((next, num)=> {
    console.log('The initial number is: ' + num)
    console.log('Power2: ' + Math.pow(num,2))
    next()
})
mid.use((next, num)=> {
    console.log('Power3: ' + Math.pow(num,3))
    next()
})
mid.use((next, num)=> {
    console.log('Divided by 2: ' + num/2)
    next()
})
mid.getNum(resultSum)
mid.getNum(resultDiff)
mid.getNum(resultMult)
